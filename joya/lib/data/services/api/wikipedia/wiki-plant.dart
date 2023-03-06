import 'package:dio/dio.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/services/api/http_service.dart';

import '../../../../common/variables.dart';

class ServiceWikipediaPlant {
  HttpService _httpService = HttpService();

  ServiceWikipediaPlant();

  Future<String?> fetchOneDdescriptionByTitle(String title) async {
    try {
      Response responseData = await _httpService.get(url: WIKI_URL + title);
      if (responseData.data == null) return "";
      var description = responseData.data["query"]["pages"];
      description = description[description.keys.toList()[0]]["extract"];
      print(description);
      return description != null ? description : "";
    } on Exception catch (err) {
      debugPrint(" error$err");

      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }
}
