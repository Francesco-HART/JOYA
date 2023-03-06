import 'package:flutter/foundation.dart';
import 'package:joya/data/app_error.dart';
import 'package:joya/data/services/api/joya/auth.dart';

import '../../models/user.dart';

class AuthRepository {
  final AuthService _authService;

  const AuthRepository({required AuthService authService})
      : _authService = authService;

  Future<String?> login(
      {required String email, required String password}) async {
    try {
      return await _authService.login(email: email, password: password);
    } on Exception catch (error) {
      print(AppError(error).message);
    }
  }

  Future<User?> getCurrentUser() async {
    try {
      return await _authService.getAuthuser();
    } on Exception catch (error) {
      rethrow;
    } on Error catch (error) {
      debugPrint(error.toString());
    }
  }
}
