import 'dart:convert';
import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/models/plant.dart';
import 'package:joya/data/services/api/joya/plant.dart';

class PlantRepository {
  PlantService plantService;

  PlantRepository({required this.plantService});

  Future<List<Plant>?> fetch() async {
    try {
      var plant = await this.plantService.fetch();
      return plant;
    } on Exception catch (err) {
      debugPrint(" error$err");

      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }
}
