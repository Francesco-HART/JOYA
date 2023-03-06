class CreateSensorDTO {
  final String? location;
  final String name;
  final String serial_number;
  final String plant_id;

  CreateSensorDTO(
      {this.location,
      required this.name,
      required this.serial_number,
      required this.plant_id});
}


class UpdateSensorAlertsDTO {
  final String serial_number;

 final int humidity_alert;
final  bool humidity_alert_enabled;


 final int temperature_alert;
 final bool temperature_alert_enabled;

 final int soil_fertillity_alert;
 final bool soil_fertillity_alert_enabled;

 final int luminosity_alert;
 final bool luminosity_alert_enabled;


 UpdateSensorAlertsDTO(
      {
        required this.serial_number,
        required this.humidity_alert,
        required this.humidity_alert_enabled,
        required this.luminosity_alert,
        required this.luminosity_alert_enabled,
        required this.soil_fertillity_alert,
        required this.soil_fertillity_alert_enabled,
        required this.temperature_alert,
        required this.temperature_alert_enabled,
       });
}
