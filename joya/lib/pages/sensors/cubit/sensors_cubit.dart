import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/material.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:joya/pages/plant/cubit/sensor_detail_page.dart';

import '../../../data/models/sensor.dart';
part 'sensors_state.dart';

class SensorsCubit extends Cubit<SensorsState> {
  final SensorRepository sensorRepository;
  List<Sensor> sensors = [];

  List<Sensor> _allSensors = [];
  String searchField = "";
  bool isSubmit = false;
  SensorsCubit({required this.sensorRepository}) : super(SensorsInitial());

  void fetchSensors() async {
    try {
      var responseData = await sensorRepository.fetch();
      if (responseData != null && responseData.isNotEmpty) {
        _allSensors = [...responseData];
        _allSensors.removeWhere((sensor) => sensor.user == null);
        return emit(SensorsLoaded(sensors: _allSensors));
      }
      emit(SensorsLoaded(sensors: []));
    } catch (err) {
      print("error on get sensors : $err");
      return emit(SensorsLoaded(sensors: []));
    }
  }

  void navigateToDetailPage(
      BuildContext context, String id, String serialNumber) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => SensorPage(
          serialNumber: serialNumber,
          sensorId: id,
        ),
      ),
    );
  }

  void setSensors(List<Sensor> sensorsData) {
    sensors = sensorsData;
  }

  List<Sensor> removeDuplicateSensorsInList(List<Sensor> sensorDuplicate) {
    for (var indexLoopOne = 0;
        indexLoopOne < sensorDuplicate.length;
        indexLoopOne++) {
      for (var indexLoopTwo = indexLoopOne + 1;
          indexLoopTwo < sensorDuplicate.length;
          indexLoopTwo++) {
        if (sensorDuplicate[indexLoopOne].serial_number ==
            sensorDuplicate[indexLoopTwo].serial_number) {
          sensorDuplicate.removeAt(indexLoopTwo);
          break;
        }
      }
    }
    return sensorDuplicate;
  }

  void setSearchField(String value) {
    var allSensorsCopy = [..._allSensors];
    emit(SensorsSearchState());
    if (value.isEmpty) {
      return emit(SensorsLoaded(sensors: allSensorsCopy));
    }
    List<Sensor> sensorFilterByName = [];
    List<Sensor> sensorFilterBySn = [];

    allSensorsCopy.forEach((sensor) {
      var sensorName = sensor.name?.toUpperCase();
      if (sensorName != null) {
        if (sensor.serial_number.contains(value)) sensorFilterBySn.add(sensor);
        if (sensorName.contains(value.toUpperCase()))
          sensorFilterByName.add(sensor);
      }
    });

    emit(
      SensorsLoaded(
        sensors: removeDuplicateSensorsInList(
            [...sensorFilterBySn, ...sensorFilterByName]),
      ),
    );
  }

  bool isInWarnning(Sensor sensor) {
    var sensorDataHumidity = sensor.sensorData?.humidity;
    var sensorPlant = sensor.plant;
    if (sensorPlant == null) return false;
    if (sensorDataHumidity != null) {
      var absolutValueBeetweenMaxAndMin =
          (sensorPlant.humidity_needs.max - sensorPlant.humidity_needs.min)
              .abs();
      if ((sensorPlant.humidity_needs.max - sensorDataHumidity).abs() >
              absolutValueBeetweenMaxAndMin + 2 ||
          (sensorPlant.humidity_needs.min - sensorDataHumidity).abs() >
              absolutValueBeetweenMaxAndMin + 2) return true;
    }
    return false;
  }

  bool isInDanger(Sensor sensor) {
    var sensorDataHumidity = sensor.sensorData?.humidity;
    var sensorPlant = sensor.plant;
    if (sensorPlant == null) return false;
    if (sensorDataHumidity != null) {
      if (sensorPlant.humidity_needs.max.abs() >
              sensorPlant.humidity_needs.max + 2 ||
          sensorPlant.humidity_needs.min.abs() >
              sensorPlant.humidity_needs.min + 2) return true;
    }
    return false;
  }
}
