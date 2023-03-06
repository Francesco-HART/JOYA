import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:joya/common/utils/form_validation.dart';
import 'package:meta/meta.dart';
import '../../../data/repositories/joya/auth.dart';
part 'login_state.dart';

class LoginCubit extends Cubit<LoginState> {
  final AuthRepository authRepository;
  String email = "";
  String password = "";
  bool isSubmit = false;
  LoginCubit({required this.authRepository}) : super(LoginInitial());

  void setIsValidEmail(bool newInstance) {}

  void getCurrentUser() async {
    try {
      var user = await authRepository.getCurrentUser();
      if (user != null) {
        return emit(LoginSuccess());
      }
      emit(LoginLoaded());
    } catch (err) {
      emit(LoginLoaded());
      print("$err");
    }
  }

  void login() async {
    try {
      emit(LoginLoadingSubmit());
      isSubmit = true;
      var res = await authRepository.login(email: email, password: password);
      if (res != null) return emit(LoginSuccess());
      emit(LoginError(message: "Identifiants invalides"));
    } catch (error) {
      emit(LoginError(message: "Identifiants invalides"));
    }
  }

  bool isValidEmail() {
    return email.isValidEmail() || email != "" || !isSubmit;
  }

  bool isValidPassword() {
    return password.length >= 6 || password != "" || !isSubmit;
  }

  void setEmail(String value) {
    email = value.trim();
  }

  void setPassword(String value) {
    password = value.trim();
  }
}
