import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/common/utils/navigation.dart';
import 'package:joya/data/repositories/joya/sensor-data.dart';
import 'package:joya/data/repositories/wiki/wiki-plant.dart';
import 'package:joya/pages/plant/cubit/sensor_detail_page.dart';
import 'package:socket_io_client/socket_io_client.dart';
import 'package:socket_io_client/socket_io_client.dart' as IO;

import '../../../common/variables.dart';
import '../../../data/models/sensor-data.dart';
import '../../../data/models/sensor.dart';
import '../../../data/repositories/joya/sensor.dart';

part 'sensor_detail_state.dart';

class SensorCubit extends Cubit<SensorState> {
  final SensorRepository sensorRepository;
  final SensorDataRepository sensorDataRepository;
  final WikiPlantRepository wikiPlantRepository;
  String searchField = "";
  bool isSubmit = false;
  Sensor? sensor;
  String description = "";
  Socket? socketCubit;
  bool isDispose = false;
  List<SensorData> sensorsData = [];

  SensorCubit({
    required this.sensorDataRepository,
    required this.sensorRepository,
    required this.wikiPlantRepository,
  }) : super(SensorInitial());

  void setIsDisposed(bool value) {
    isDispose = value;
  }

  void setSensorsData(List<SensorData> value) {
    sensorsData = value;
  }

  Future<Sensor?> fetchSensor(String id) async {
    try {
      var responseData = await sensorRepository.findOne(id);
      if (responseData != null) {
        return responseData;
      }
      emit(SensorError(message: "Capteur introuvable"));
    } catch (err) {
      print("error on get Sensor : $err");
      emit(SensorError(message: "Capteur introuvable"));
    }
  }

  Future<String> fetchPlantDescription(String plantName) async {
    try {
      String? plantDescription = await wikiPlantRepository
          .fetchOneDdescriptionByTitle(plantName != null ? plantName : "");
      return plantDescription != null ? plantDescription : "";
    } catch (err) {
      print("Impossible de trouver la description de la plante : $err");
      return "";
    }
  }

  dynamic fetchLastSensorsData(String serialNumber) async {
    try {
      var responseData =
          await sensorDataRepository.fetchLastSensorsData(serialNumber);
      return responseData;
    } catch (err) {
      print("error on get Sensor data : $err");
    }
  }

  void loadPageData(String serialNumber, String id) async {
    try {
      if (isDispose) return;

      emit(SensorLoading());
      var responseData = await fetchSensor(id);
      var plantDescription = "";
      var fetchedSensorsData = await fetchLastSensorsData(serialNumber);
      if (responseData != null) {
        var plantName = responseData.plant?.name;
        if (plantName != null)
          plantDescription = await fetchPlantDescription(plantName);
        return emit(SensorLoaded(
          sensor: responseData,
          description: plantDescription,
          sensorData: fetchedSensorsData != null ? fetchedSensorsData : [],
        ));
      }
      emit(SensorError(message: "Capteur introuvable"));
    } catch (err) {}
  }

  void connectAndListen(String serialNumber) {
    IO.Socket socket = IO.io(
        JOYA_SOCKET_URL, OptionBuilder().setTransports(['websocket']).build());
    socket.connect();
    socket.on(
        "connect", (data) => print("socket is connected ${socket.connected}"));
    socket.on(serialNumber, (data) => {updateSensorData(data)});
    socket.onDisconnect((_) => print('disconnect'));
    socketCubit = socket;
  }

  void resetSensor(BuildContext context) async {
    try {
      var sensorID = sensor?.id;
      if (sensorID != null) await this.sensorRepository.resetSensor(sensorID);
      emit(SensorResetSuccess());
    } on Exception catch (e) {
      emit(SensorError(message: "$e"));
    }
  }

  void updateSensorData(dynamic data) {
    if (isDispose) return;

    emit(SensorSocketLoading());
    try {
      SensorData newSensorData = SensorData.fromJson(data);
      if (sensor != null) {
        sensor?.sensorData = newSensorData;
        emit(SensorLoaded(
            sensor: sensor!,
            description: description,
            sensorData: updateSensorDataArray(sensorsData, newSensorData)));
      }
    } on Exception catch (e) {}
  }

  List<SensorData> updateSensorDataArray(
      List<SensorData> sensorsData, SensorData sensorData) {
    var copiedSensorsData = [...sensorsData];

    if (copiedSensorsData.length >= 50) {
      copiedSensorsData.removeAt(0);
    }
    copiedSensorsData.add(sensorData);
    return copiedSensorsData;
  }

  void setSensor(Sensor sensorRes) {
    sensor = sensorRes;
  }

  void setDescription(String value) {
    description = value;
  }

  void disposeSocket() {
    socketCubit?.disconnect();
  }
}
