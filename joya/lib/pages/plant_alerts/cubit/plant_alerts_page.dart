import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/data/repositories/joya/sensor-data.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:joya/data/repositories/wiki/wiki-plant.dart';
import 'package:joya/pages/plant/cubit/sensor_detail_cubit.dart';
import 'package:joya/pages/plant_alerts/cubit/plant_alerts_cubit.dart';
import 'package:joya/pages/plant_alerts/plant_alerts_view.dart';
import '../../../data/services/api/joya/sensor.dart';

class SensorAlertsPage extends StatelessWidget {
  static String pageName = "SensorAlerts";
  final String sensorId;
  final String serialNumber;
  const SensorAlertsPage(
      {Key? key, required this.sensorId, required this.serialNumber})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiRepositoryProvider(
      providers: [
        RepositoryProvider<SensorRepository>(
          create: (context) => SensorRepository(sensorService: SensorService()),
        ),
      ],
      child: BlocProvider(
        create: (context) => SensorAlertsCubit(
          sensorRepository: context.read<SensorRepository>(),
        ),
        child: SensorAlertsView(
          serialNumber: serialNumber,
          sensorId: sensorId,
        ),
      ),
    );
  }
}
