// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sensor.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Sensor _$SensorFromJson(Map<String, dynamic> json) => Sensor(
      id: json['id'] as String,
      name: json['name'] as String?,
      plant: json['plant'] == null
          ? null
          : Plant.fromJson(json['plant'] as Map<String, dynamic>),
      location: json['location'] as String?,
      serial_number: json['serial_number'] as String,
      user: json['user'] == null
          ? null
          : User.fromJson(json['user'] as Map<String, dynamic>),
      sensorData: json['sensorData'] == null
          ? null
          : SensorData.fromJson(json['sensorData'] as Map<String, dynamic>),
      humidity_alert: json['humidity_alert'] as int,
      humidity_alert_enabled: json['humidity_alert_enabled'] as bool,
      humidity_alert_sent: json['humidity_alert_sent'] as bool,
      luminosity_alert: json['luminosity_alert'] as int,
      luminosity_alert_enabled: json['luminosity_alert_enabled'] as bool,
      luminosity_alert_sent: json['luminosity_alert_sent'] as bool,
      soil_fertillity_alert: json['soil_fertillity_alert'] as int,
      soil_fertillity_alert_enabled:
          json['soil_fertillity_alert_enabled'] as bool,
      soil_fertillity_alert_sent: json['soil_fertillity_alert_sent'] as bool,
      temperature_alert: json['temperature_alert'] as int,
      temperature_alert_enabled: json['temperature_alert_enabled'] as bool,
      temperature_alert_sent: json['temperature_alert_sent'] as bool,
    );

Map<String, dynamic> _$SensorToJson(Sensor instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'plant': instance.plant,
      'location': instance.location,
      'serial_number': instance.serial_number,
      'user': instance.user,
      'sensorData': instance.sensorData,
      'humidity_alert': instance.humidity_alert,
      'humidity_alert_enabled': instance.humidity_alert_enabled,
      'humidity_alert_sent': instance.humidity_alert_sent,
      'temperature_alert': instance.temperature_alert,
      'temperature_alert_enabled': instance.temperature_alert_enabled,
      'temperature_alert_sent': instance.temperature_alert_sent,
      'soil_fertillity_alert': instance.soil_fertillity_alert,
      'soil_fertillity_alert_enabled': instance.soil_fertillity_alert_enabled,
      'soil_fertillity_alert_sent': instance.soil_fertillity_alert_sent,
      'luminosity_alert': instance.luminosity_alert,
      'luminosity_alert_enabled': instance.luminosity_alert_enabled,
      'luminosity_alert_sent': instance.luminosity_alert_sent,
    };
