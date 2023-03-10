import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../cubit/sensor_detail_cubit.dart';
import 'expanded_item.dart';

class DetailIconButton extends StatefulWidget {
  const DetailIconButton({Key? key}) : super(key: key);

  @override
  State<DetailIconButton> createState() => _DetailIconButtonState();
}

class _DetailIconButtonState extends State<DetailIconButton> {
  @override
  Widget build(BuildContext context) {
    var sensor = context.read<SensorCubit>().sensor;
    var luminosity = sensor?.sensorData?.luminosity;
    var humidity = sensor?.sensorData?.humidity;
    var temperature = sensor?.sensorData?.temperature;
    var sensorReset = sensor?.sensorData?.serial_number;
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: [
        luminosity != null
            ? ExpandedItem(
                popupTitle: "Luminosit√© :",
                rate: sensor?.sensorData?.luminosity,
                unit: "% d'exposition",
                min: sensor?.plant?.luminosity_needs.min != null
                    ? sensor?.plant?.luminosity_needs.min
                    : 0,
                max: sensor?.plant?.luminosity_needs.max != null
                    ? sensor?.plant?.luminosity_needs.max
                    : 0,
                label: "Luminosit√©",
                icon: Icons.wb_sunny_outlined,
                color: luminosity >= 70
                    ? Colors.yellow
                    : luminosity >= 20
                        ? Colors.red
                        : Colors.orange)
            : Container(),
        humidity != null
            ? ExpandedItem(
                popupTitle: "Humidit√© :",
                rate: sensor?.sensorData?.humidity,
                unit: "%",
                min: sensor?.plant?.humidity_needs.min != null
                    ? sensor?.plant?.humidity_needs.min
                    : 0,
                max: sensor?.plant?.humidity_needs.max != null
                    ? sensor?.plant?.humidity_needs.max
                    : 0,
                label: "Humidit√©",
                icon: Icons.water_rounded,
                color: humidity > 80
                    ? Colors.blue
                    : humidity < 40 || humidity > 100
                        ? Colors.red
                        : Colors.orange)
            : Container(),
        /*ExpandedItem(
          popupTitle: "Fertilit√© du sol",
          rate: sensor?.sensorData?.soil_fertillity,
          unit: "¬ĶS/cm",
          min: sensor?.plant?.fertility_needs,
          max: sensor?.plant?.fertility_needs,
          label: "Fertilit√©",
          icon: Icons.compost,
          color: Colors.brown,
        ),*/
        temperature != null
            ? ExpandedItem(
                popupTitle: "Temp√©rature :",
                rate: sensor?.sensorData?.temperature,
                unit: "¬įC",
                min: sensor?.plant?.temperature_needs.min != null
                    ? sensor?.plant?.temperature_needs.min
                    : 0,
                max: sensor?.plant?.temperature_needs.max != null
                    ? sensor?.plant?.temperature_needs.max
                    : 0,
                label: "Temp√©rature",
                icon: Icons.thermostat,
                color: temperature < 600 && temperature > 450
                    ? Colors.teal
                    : temperature > 1200 || temperature < 200
                        ? Colors.red
                        : Colors.orange)
            : Container(),
      ],
    );
  }
}
