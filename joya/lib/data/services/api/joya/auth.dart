import 'dart:convert';

import 'package:flutter/cupertino.dart';
import 'package:joya/data/models/user.dart';
import 'package:joya/data/services/api/http_service.dart';
import 'package:joya/data/services/device/local_storage_service.dart';

import '../../../../common/variables.dart';

class AuthService {
  HttpService _httpService = HttpService();
  LocalStorageService _localStorageService = LocalStorageService();

  Future<String?> login(
      {required String email, required String password}) async {
    try {
      var data = {"email": email, "password": password};
      var responseData =
          await _httpService.post(url: JOYA_URL + "auth", data: data);

      await _localStorageService.setString(
        LocalStorageService.cookies,
        responseData.toString(),
      );
      return responseData.toString();
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint("$error");
    }
  }

  Future<User> getAuthuser() async {
    try {
      var responseData = await _httpService.get(url: JOYA_URL + "auth");

      if (responseData == null) throw ErrorDescription("you are not connect");
      return User.fromJson(json.decode(responseData.toString()));
    } on Exception {
      rethrow;
    } on Error catch (error) {
      debugPrint("On fetch current user : $error");
      rethrow;
    }
  }
}
