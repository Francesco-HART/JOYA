import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/dto/sensor.dart';
import 'package:joya/data/repositories/joya/sensor-data.dart';
import 'package:joya/data/repositories/wiki/wiki-plant.dart';
import 'package:socket_io_client/socket_io_client.dart';
import '../../../data/models/sensor-data.dart';
import '../../../data/models/sensor.dart';
import '../../../data/repositories/joya/sensor.dart';

part 'plant_alerts_state.dart';

class SensorAlertsCubit extends Cubit<SensorAlertsState> {
  final SensorRepository sensorRepository;
  String searchField = "";
  bool isSubmit = false;
  Sensor? sensor;
  bool isDispose = false;


  int humidity_alert = 0;
  bool humidity_alert_enabled = false;

  int temperature_alert = 0;
  bool temperature_alert_enabled = false;

  int luminosity_alert = 0;
  bool luminosity_alert_enabled = false;

  List<SensorData> sensorsData = [];
  SensorAlertsCubit({
    required this.sensorRepository,

  }) : super(SensorAlertsInitial());

  void setHumidityAlert(int value){
    humidity_alert = value;
  }
  void setHumidityBoolAlert(bool value){
    if(!value) humidity_alert = 0;
    humidity_alert_enabled = value;
  }

  void setTemperatureAlert(int value){
    temperature_alert = value;
  }
  void setTemperatureBoolAlert(bool value){
    if(!value) temperature_alert = 0;
    temperature_alert_enabled = value;
  }

  void setLuminosityAlert(int value){
    luminosity_alert = value;
  }
  void setLuminosityBoolAlert(bool value){
    if(!value) luminosity_alert = 0;
    luminosity_alert_enabled = value;
  }

  void setIsDisposed(bool value) {
    isDispose = value;
  }

  Future<Sensor?> fetchSensor(String id) async {
    try {
      emit(SensorAlertsLoading());
      var responseData = await sensorRepository.findOne(id);
      print("res $responseData");
      if (responseData != null) {
        return responseData;
      }
    } catch (err) {
      emit(SensorAlertsError(message: "error on get Sensor "));
      print("error on get Sensor : $err");
    }
  }

  void loadPageData(String serialNumber, String id) async {
    try {
      if (isDispose) return;
      var responseData = await fetchSensor(id);
      if (responseData != null) {
        emit(SensorAlertsLoaded(sensor: responseData));
        return;
      }
    } catch (err) {}
  }

  void setSensor(Sensor sensorRes) {
    sensor = sensorRes;
  }

  void submit() async {
    try {
    isSubmit = true;
    if(sensor != null) {
      var res = await sensorRepository.updateSensorAlerts(UpdateSensorAlertsDTO(
        serial_number: sensor!.serial_number,
        humidity_alert: humidity_alert,
        humidity_alert_enabled: humidity_alert_enabled,
        luminosity_alert: luminosity_alert,
        luminosity_alert_enabled: luminosity_alert_enabled,
        soil_fertillity_alert: 0,
        soil_fertillity_alert_enabled: false,
        temperature_alert: temperature_alert,
        temperature_alert_enabled: temperature_alert_enabled,));
      if (res != null) {
         emit(SensorAlertsSuccess(sensor: res));
         return emit(SensorAlertsLoaded(sensor: res));

      };
      emit(SensorAlertsError(message: "Capteur impossible à midifier invalides 1"));
    } else {
      emit(SensorAlertsError(message: "Capteur impossible à midifier invalides 2"));
    }
  } catch (error) {
      emit(SensorAlertsError(message: "Capteur impossible à midifier invalides 3"));
      if(sensor != null)
        emit(SensorAlertsLoaded(sensor: sensor!));
    }
  }
}
