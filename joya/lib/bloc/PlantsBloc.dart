import 'dart:async';
import 'package:flutter/cupertino.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:joya/data/services/api/joya/sensor.dart';

import '../data/models/sensor.dart';
import 'bloc.dart';

class PlantsBloc extends Bloc {
  BuildContext context;
  SensorRepository _sensorRepository =
      SensorRepository(sensorService: SensorService());

  PlantsBloc({required this.context}) {
    sink.add(_sensorsInstance);
  }

  List<Sensor> _sensorsInstance = [];

  var _streamController = StreamController<List<Sensor>>();

  Sink<List<Sensor>> get sink => _streamController.sink;

  Stream<List<Sensor>> get stream => _streamController.stream;

  setSensors(List<Sensor> sensors) {
    _sensorsInstance = sensors;
    sink.add(_sensorsInstance);
  }

  fetchSensors() async {
    try {
      var sensors = await _sensorRepository.fetch();
      setSensors(sensors != null ? sensors : []);
    } catch (error) {}
  }

  @override
  void dispose() => _streamController.close();
}
