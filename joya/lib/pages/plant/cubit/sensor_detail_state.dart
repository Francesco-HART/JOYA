part of 'sensor_detail_cubit.dart';

@immutable
abstract class SensorState extends Equatable {}

class SensorInitial extends SensorState {
  @override
  List<Object?> get props => [];
}

class SensorSearchState extends SensorState {
  SensorSearchState();

  @override
  List<Object?> get props => [];
}

class SensorResetSuccess extends SensorState {
  SensorResetSuccess();
  @override
  List<Object?> get props => [];
}

class SensorLoaded extends SensorState {
  final Sensor sensor;
  final String description;
  final List<SensorData> sensorData;

  SensorLoaded({required this.sensor, required this.description, required this.sensorData});

  @override
  List<Sensor> get props => [sensor];
}

class SensorSuccess extends SensorState {
  SensorSuccess();

  @override
  List<Object?> get props => [];
}

class SensorLoading extends SensorState {
  SensorLoading();

  @override
  List<Object?> get props => [];
}

class SensorSocketLoading extends SensorState {
  SensorSocketLoading();
  @override
  List<Object?> get props => [];
}

class SensorError extends SensorState {
  final String message;
  SensorError({required this.message});
  @override
  List<String> get props => [message];
}
