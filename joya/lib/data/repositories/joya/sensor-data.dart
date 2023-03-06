import 'package:flutter/foundation.dart';
import 'package:joya/data/models/sensor-data.dart';
import '../../services/api/joya/sensor-data.dart';

class SensorDataRepository {
  final SensorDataService _sensorDataService;

  const SensorDataRepository({required SensorDataService sensorDataService})
      : _sensorDataService = sensorDataService;

  Future<List<SensorData>?> fetch(String serialNumber) async {
    try {
      return await _sensorDataService.fetch(serialNumber);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }

  Future<List<SensorData>?> fetchLastSensorsData(String serialNumber) async {
    try {
      return await _sensorDataService.findLastSensorsData(serialNumber);
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }
}
