part of 'scan_cubit.dart';

@immutable
abstract class ScanState extends Equatable {}

class ScanInitial extends ScanState {
  @override
  List<Object?> get props => throw UnimplementedError();
}

class ScanLoaded extends ScanState {
  List<Plant> plants = [];
  ScanLoaded({required this.plants});
  @override
  List<Object?> get props => [plants];
}

class ScanLoading extends ScanState {
  ScanLoading();
  @override
  List<String?> get props => [];
}

class ScanLoadingSubmit extends ScanState {
  ScanLoadingSubmit();
  @override
  List<String?> get props => [];
}

class ScanSuccessScanQRCode extends ScanState {
  String result;
  ScanSuccessScanQRCode({required this.result});

  @override
  List<String> get props => [result];
}

class ScanError extends ScanState {
  final String message;
  ScanError({required this.message});
  @override
  List<String> get props => [message];
}

class ScanSuccessScanQRCodeAndVerifySensor extends ScanState {
  ScanSuccessScanQRCodeAndVerifySensor();
  @override
  List<String> get props => [];
}

class ScanSuccessSubmit extends ScanState {
  ScanSuccessSubmit();
  @override
  List<String> get props => [];
}
