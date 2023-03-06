// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'plant.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Needs _$NeedsFromJson(Map<String, dynamic> json) => Needs(
      min: json['min'] as int,
      max: json['max'] as int,
    );

Map<String, dynamic> _$NeedsToJson(Needs instance) => <String, dynamic>{
      'max': instance.max,
      'min': instance.min,
    };

Plant _$PlantFromJson(Map<String, dynamic> json) => Plant(
      id: json['id'] as String,
      name: json['name'] as String,
      type: json['type'] as String,
      fertility_needs: json['fertility_needs'] as int,
      humidity_needs:
          Needs.fromJson(json['humidity_needs'] as Map<String, dynamic>),
      luminosity_needs:
          Needs.fromJson(json['luminosity_needs'] as Map<String, dynamic>),
      temperature_needs:
          Needs.fromJson(json['temperature_needs'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$PlantToJson(Plant instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'type': instance.type,
      'fertility_needs': instance.fertility_needs,
      'humidity_needs': instance.humidity_needs,
      'luminosity_needs': instance.luminosity_needs,
      'temperature_needs': instance.temperature_needs,
    };
