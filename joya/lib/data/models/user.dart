import 'package:json_annotation/json_annotation.dart';
part 'user.g.dart';

@JsonSerializable()
class User {
  String id;
  String? firstname;
  String? lastname;
  String email;
  String type;

  User({
    required this.id,
    this.firstname = "",
    this.lastname = "",
    required this.email,
    required this.type,
  });

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}
