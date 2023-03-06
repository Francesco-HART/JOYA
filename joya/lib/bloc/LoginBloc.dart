import 'dart:async';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/repositories/joya/auth.dart';
import 'package:joya/data/services/api/joya/auth.dart';

import 'bloc.dart';

class LoginBloc extends Bloc {
  BuildContext context;
  LoginBloc({required this.context}) {
    sink.add(_dataInstance);
  }
  AuthRepository _authRepository = AuthRepository(authService: AuthService());

  Map<String, dynamic> _dataInstance = {
    "isValidEmail": true,
    "email": "",
    "password": ""
  };
  var _streamController = StreamController<Map<String, dynamic>>();

  Sink<Map<String, dynamic>> get sink => _streamController.sink;

  Stream<Map<String, dynamic>> get stream => _streamController.stream;

  setByKey(String key, String value) {
    _dataInstance[key] = value;
    sink.add(_dataInstance);
  }

  setIsValidEmail(bool newInstance) {
    _dataInstance["isValidEmail"] = newInstance;
    sink.add(_dataInstance);
  }

  login() async {
    try {
      await _authRepository.login(
          email: _dataInstance["email"], password: _dataInstance["password"]);
      var user = await _authRepository.getCurrentUser();
      if (user != null) {
        Navigator.pushNamedAndRemoveUntil(
            context, 'homeWithoutSensor', (route) => false);
      }
    } catch (error) {
      // todo show sidebar
      print(error);
    }
  }

  @override
  void dispose() => _streamController.close();
}
