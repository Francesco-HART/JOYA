import 'dart:async';
import '../bloc.dart';

class SensorBloc extends Bloc {


  Map<String, dynamic> _dataInstance = {
    "isValidEmail":true,
    "email":"",
    "password":""
  };
  var _streamController = StreamController<Map<String, dynamic>>();

  Sink<Map<String, dynamic>> get sink => _streamController.sink;

  Stream<Map<String, dynamic>> get stream => _streamController.stream;

  RequestBloc() {
    sink.add(_dataInstance);
  }

  


  @override
  void dispose() => _streamController.close();
}
