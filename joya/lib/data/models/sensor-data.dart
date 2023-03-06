import 'package:json_annotation/json_annotation.dart';
part 'sensor-data.g.dart';

@JsonSerializable()
class SensorData {
  String id;
  String serial_number;
  int luminosity;
  int temperature;
  int humidity;
  int soil_fertillity;
  DateTime created_at;

  SensorData(
      {required this.id,
      required this.serial_number,
      required this.luminosity,
      required this.temperature,
      required this.humidity,
      required this.soil_fertillity,
      required this.created_at});

  factory SensorData.fromJson(Map<String, dynamic> json) =>
      _$SensorDataFromJson(json);

  Map<String, dynamic> toJson() => _$SensorDataToJson(this);
}
