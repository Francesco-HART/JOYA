import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/models/plant.dart';
import 'package:joya/data/services/api/http_service.dart';

import '../../../../common/variables.dart';

class PlantService {
  HttpService _httpService = HttpService();

  Future<List<Plant>?> fetch() async {
    try {
      Response responseData = await _httpService.get(url: JOYA_URL + "plants");
      if (responseData.data == null) return [];

      var plants = (responseData.data as List)
          .map((plant) => Plant.fromJson(plant))
          .toList();
      return plants;
    } on Exception catch (err) {
      debugPrint(" error$err");

      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }

  Future<Plant?> findOne(String id) async {
    try {
      var responseData = await _httpService.get(url: JOYA_URL + "plants/$id");
      if (responseData == null) throw ErrorDescription("unknown plant id");
      return Plant.fromJson(json.decode(responseData.toString()));
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }
}
