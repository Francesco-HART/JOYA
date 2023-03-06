import 'package:json_annotation/json_annotation.dart';
part 'plant.g.dart';

@JsonSerializable()
class Needs {
  int max;
  int min;
  Needs({required this.min, required this.max});

  factory Needs.fromJson(Map<String, dynamic> json) => _$NeedsFromJson(json);

  Map<String, dynamic> toJson() => _$NeedsToJson(this);
}

@JsonSerializable()
class Plant {
  String id;
  String name;
  String type;
  int fertility_needs;
  Needs humidity_needs;
  Needs luminosity_needs;
  Needs temperature_needs;

  Plant(
      {required this.id,
        required this.name,
        required this.type,
        required this.fertility_needs,
        required this.humidity_needs,
        required this.luminosity_needs,
        required this.temperature_needs});

  factory Plant.fromJson(Map<String, dynamic> json) => _$PlantFromJson(json);

  Map<String, dynamic> toJson() => _$PlantToJson(this);
}
