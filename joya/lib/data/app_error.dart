import 'dart:io';

import 'package:dio/dio.dart';
import 'package:flutter/foundation.dart';

enum AppErrorType {
  network,
  badRequest,
  unauthorized,
  cancel,
  timeout,
  server,
  unknown,
}

class AppError {
  late String message;
  late AppErrorType type;
  late int? statusCode;

  AppError(Exception? error) {
    if (error is DioError) {
      debugPrint('AppError(DioError): '
          'type is ${error.type}, message is ${error.message}');
      message = error.message;

      switch (error.type) {
        case DioErrorType.other:
          if (error.error is SocketException) {
            // SocketException: Failed host lookup: '***'
            // (OS Error: No address associated with hostname, errno = 7)
            type = AppErrorType.network;
          } else {
            type = AppErrorType.unknown;
          }
          break;
        case DioErrorType.connectTimeout:
        case DioErrorType.receiveTimeout:
          type = AppErrorType.timeout;
          break;
        case DioErrorType.sendTimeout:
          type = AppErrorType.network;
          break;
        case DioErrorType.response:
          dioStatusCodeResponseCases(error);
          break;
        case DioErrorType.cancel:
          setErrorInformations(error, AppErrorType.cancel);
          break;
        default:
          setErrorInformations(error, AppErrorType.unknown);
      }
    } else {
      debugPrint('AppError(UnKnown): $error');
      type = AppErrorType.unknown;
      message = 'AppError: $error';
    }
  }

  void dioStatusCodeResponseCases(DioError error) {
    switch (error.response?.statusCode) {
      case HttpStatus.badRequest: // 400
        setErrorInformations(error, AppErrorType.badRequest);
        break;
      case HttpStatus.unauthorized: // 401
        setErrorInformations(error, AppErrorType.unauthorized);
        break;
      case HttpStatus.internalServerError: // 500
        setErrorInformations(error, AppErrorType.unknown);
        break;
      case HttpStatus.badGateway: // 502
        setErrorInformations(error, AppErrorType.badRequest);
        break;
      case HttpStatus.serviceUnavailable: // 503
        setErrorInformations(error, AppErrorType.badRequest);
        break;
      case HttpStatus.gatewayTimeout: // 504
        setErrorInformations(error, AppErrorType.server);
        break;
      default:
        setErrorInformations(error, AppErrorType.unknown);
        break;
    }
  }

  void setErrorInformations(DioError error, AppErrorType typeError) {
    type = typeError;
    statusCode = error.response?.statusCode;
    if (error.response?.data?["message"] is String)
      message = error.response?.data?["message"];
  }
}
