import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import '../cubit/sensor_detail_cubit.dart';
import 'detail_icon_button.dart';

class DataDetailDisplay extends StatefulWidget {
  const DataDetailDisplay({Key? key}) : super(key: key);

  @override
  State<DataDetailDisplay> createState() => _DataDetailDisplayState();
}

class _DataDetailDisplayState extends State<DataDetailDisplay> {
  @override
  Widget build(BuildContext context) {
    var sensor = context.read<SensorCubit>().sensor;

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 2),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.only(right: 10.0),
                child: Text(
                  sensor?.name == null
                      ? ""
                      : context.read<SensorCubit>().sensor!.name!.capitalize(),
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16.0,
                  ),
                ),
              ),
              Text(
                "${sensor?.location != null ? sensor?.location?.capitalize() : ""}",
                style: const TextStyle(
                    fontWeight: FontWeight.normal, fontSize: 16.0),
              ),
            ],
          ),
          const SizedBox(height: 4.0),
          Text(
            sensor?.plant != null
                ? context.read<SensorCubit>().sensor!.plant!.name.capitalize()
                : "",
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: 14.0,
            ),
          ),
          const SizedBox(height: 8.0),
          Text(
            sensor?.plant != null
            ? context.read<SensorCubit>().description
            : "",
            style: TextStyle(
              fontSize: 12.0,
              height: 1.5,
              letterSpacing: 0.5,
            ),
          ),
          SizedBox(height: MediaQuery.of(context).size.height / 25),
          DetailIconButton(),
          SizedBox(height: MediaQuery.of(context).size.height / 25),
        ],
      ),
    );
  }
}

extension CapitalizeData on String {
  String capitalize() {
    return "${this[0].toUpperCase()}${substring(1).toLowerCase()}";
  }
}
