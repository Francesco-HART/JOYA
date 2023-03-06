import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/services/api/http_service.dart';
import '../../../../common/variables.dart';
import '../../../models/sensor-data.dart';

class SensorDataService {
  HttpService _httpService = HttpService();

  Future<List<SensorData>?> fetch(String serialNumber) async {
    try {
      Response responseData =
          await _httpService.get(url: JOYA_URL + "sensors-data/$serialNumber");
      if (responseData.data == null) return [];
      var sensorsData = (responseData.data as List)
          .map((data) => SensorData.fromJson(data))
          .toList();
      return sensorsData;
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }

  Future<List<SensorData>?> findLastSensorsData(String serialNumber) async {
    try {
      Response responseData = await _httpService.get(
          url: JOYA_URL + "sensors-data/statistics/$serialNumber");
      if (responseData.data == null) return [];

      var sensorsData = (responseData.data as List)
          .map((data) => SensorData.fromJson(data))
          .toList();
      return sensorsData;
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }
}
