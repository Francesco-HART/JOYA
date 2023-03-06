part of 'sensors_cubit.dart';

@immutable
abstract class SensorsState extends Equatable {}

class SensorsInitial extends SensorsState {
  @override
  List<Object?> get props => [];
}

class SensorsSearchState extends SensorsState {
  SensorsSearchState();

  @override
  List<Object?> get props => [];
}

class SensorsLoaded extends SensorsState {
  final List<Sensor> sensors;
  SensorsLoaded({required this.sensors});

  @override
  List<List<Sensor>> get props => [sensors];
}

class SensorsSuccess extends SensorsState {
  SensorsSuccess();

  @override
  List<Object?> get props => [];
}

class SensorsError extends SensorsState {
  final String message;
  SensorsError({required this.message});
  @override
  List<String> get props => [message];
}
