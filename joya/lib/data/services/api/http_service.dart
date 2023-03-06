import 'dart:convert';
import 'dart:io';

import 'package:dio/dio.dart';
import 'package:joya/data/services/device/local_storage_service.dart';

class HttpService extends HttpOverrides {
  LocalStorageService localStorageService = LocalStorageService();

  final BaseOptions _requestOptionsInit = BaseOptions(
    connectTimeout: 5000,
    receiveTimeout: 3000,
  );

  Future<BaseOptions> setCookies(BaseOptions options) async {
    var cookies =
        await localStorageService.getString(LocalStorageService.cookies);
    if (cookies != null) {
      Map<String, dynamic> map = {
        LocalStorageService.cookies: cookies,
      };
      options.headers["cookies"] = map;
    }
    return options;
  }

  Future<Dio> _initDio() async {
    HttpOverrides.global = this;
    BaseOptions options = _requestOptionsInit;
    options = await setCookies(options);

    return Dio(options);
  }

  Future<dynamic> get({
    required String url,
  }) async {
    try {
      Dio dio = await _initDio();
      var response = await dio.get(url);
      return response;
    } on DioError {
      rethrow;
    }
  }

  Future<dynamic> post({
    required String url,
    required dynamic data,
    Function(int, int)? onSendProgressCallback,
  }) async {
    try {
      Dio dio = await _initDio();
      var response = await dio.post(
        url,
        data: data,
        onSendProgress: onSendProgressCallback,
      );
      return response;
    } on DioError {
      rethrow;
    }
  }

  Future<dynamic> put({
    required String url,
    required dynamic data,
    Function(int, int)? onSendProgressCallback,
  }) async {
    try {
      Dio dio = await _initDio();
      var response = await dio.put(
        url,
        data: data,
        onSendProgress: onSendProgressCallback,
      );
      return response;
    } on DioError {
      rethrow;
    }
  }

  Future<dynamic> delete({
    required String url,
    required dynamic data,
    Map<String, dynamic>? headers,
    Function(int, int)? onSendProgressCallback,
  }) async {
    try {
      Dio dio = await _initDio();
      var response = await dio.delete(
        url,
      );
      return response;
    } on DioError {
      rethrow;
    }
  }
}
