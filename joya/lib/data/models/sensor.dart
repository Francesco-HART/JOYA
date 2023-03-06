import 'dart:ffi';

import 'package:joya/data/models/sensor-data.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:joya/data/models/plant.dart';
import 'package:joya/data/models/user.dart';
part 'sensor.g.dart';

@JsonSerializable()
class Sensor {
  String id;
  String? name;
  Plant? plant;
  String? location;
  String serial_number;
  User? user;
  SensorData? sensorData;

  int humidity_alert;
  bool humidity_alert_enabled;
  bool humidity_alert_sent;


  int temperature_alert;
  bool temperature_alert_enabled;
  bool temperature_alert_sent;

  int soil_fertillity_alert;
  bool soil_fertillity_alert_enabled;
  bool soil_fertillity_alert_sent;

  int luminosity_alert;
  bool luminosity_alert_enabled;
  bool luminosity_alert_sent;

  Sensor({
    required this.id,
    required this.name,
    required this.plant,
    this.location,
    required this.serial_number,
    required this.user,
    this.sensorData,

    required this.humidity_alert,
    required this.humidity_alert_enabled,
    required this.humidity_alert_sent,
    required this.luminosity_alert,
    required this.luminosity_alert_enabled,
    required this.luminosity_alert_sent,
    required this.soil_fertillity_alert,
    required this.soil_fertillity_alert_enabled,
    required this.soil_fertillity_alert_sent,
    required this.temperature_alert,
    required this.temperature_alert_enabled,
    required this.temperature_alert_sent,
  });

  factory Sensor.fromJson(Map<String, dynamic> json) => _$SensorFromJson(json);

  Map<String, dynamic> toJson() => _$SensorToJson(this);
}
