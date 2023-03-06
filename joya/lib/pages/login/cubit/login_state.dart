part of 'login_cubit.dart';

@immutable
abstract class LoginState extends Equatable {}

class LoginInitial extends LoginState {
  @override
  List<Object?> get props => throw UnimplementedError();
}

class LoginLoadingSubmit extends LoginState {
  LoginLoadingSubmit();

  @override
  List<Object?> get props => throw UnimplementedError();
}

class LoginLoaded extends LoginState {
  LoginLoaded();

  @override
  List<Object?> get props => throw UnimplementedError();
}

class LoginSuccess extends LoginState {
  LoginSuccess();

  @override
  List<Object?> get props => throw UnimplementedError();
}

class LoginError extends LoginState {
  final String message;
  LoginError({required this.message});
  @override
  List<String> get props => [message];
}
