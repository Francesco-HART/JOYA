part of 'plant_alerts_cubit.dart';

@immutable
abstract class SensorAlertsState extends Equatable {}

class SensorAlertsInitial extends SensorAlertsState {
  @override
  List<Object?> get props => [];
}

class SensorAlertsSearchState extends SensorAlertsState {
  SensorAlertsSearchState();
  @override
  List<Object?> get props => [];
}

class SensorAlertsLoaded extends SensorAlertsState {
 final Sensor sensor;
 SensorAlertsLoaded({required this.sensor,});
  @override
  List<Sensor> get props => [sensor];
}

class SensorAlertsSubmit extends SensorAlertsState {
  final Sensor sensor;

  SensorAlertsSubmit({required this.sensor,});
  @override
  List<Object?> get props => [];
}

class SensorAlertsSuccess extends SensorAlertsState {
  final Sensor sensor;

  SensorAlertsSuccess({required this.sensor,});
  @override
  List<Object?> get props => [];
}

class SensorAlertsLoading extends SensorAlertsState {
  SensorAlertsLoading();
  @override
  List<Object?> get props => [];
}

class SensorAlertsError extends SensorAlertsState {
  final String message;
  SensorAlertsError({required this.message});
  @override
  List<String> get props => [message];
}
