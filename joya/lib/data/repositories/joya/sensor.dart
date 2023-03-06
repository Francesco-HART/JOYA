import 'package:flutter/foundation.dart';
import 'package:joya/data/dto/sensor.dart';
import 'package:joya/data/models/sensor.dart';
import '../../services/api/joya/sensor.dart';

class SensorRepository {
  final SensorService _sensorService;

  const SensorRepository({required SensorService sensorService})
      : _sensorService = sensorService;

  Future<List<Sensor>?> fetch() async {
    try {
      return await _sensorService.fetch();
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }

  Future<void> resetSensor( String sensorID) async {
    try {
      return await _sensorService.resetSensors(sensorID);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }


  Future<Sensor?> findOne(String id) async {
    try {
      return await _sensorService.findOne(id);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }

  Future<Sensor?> findOneBySerialNumber(String serialNumber) async {
    try {
      return await _sensorService.findOneBySerialNumber(serialNumber);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }

  Future<Sensor?> createSensor(CreateSensorDTO dto) async {
    try {
      return await _sensorService.createSensor(dto);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }

  Future<Sensor?> updateSensorAlerts(UpdateSensorAlertsDTO dto) async {
    try {
      return await _sensorService.updateSensorAlertsSensor(dto);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }
}
