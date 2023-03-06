import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:joya/data/services/api/joya/sensor.dart';
import 'package:joya/pages/sensors/cubit/sensors_cubit.dart';
import '../sensors_view.dart';

class SensorsPage extends StatelessWidget {
  static String pageName = "sensors";

  SensorsPage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiRepositoryProvider(
      providers: [
        RepositoryProvider<SensorRepository>(
          create: (context) => SensorRepository(sensorService: SensorService()),
        ),
      ],
      child: BlocProvider(
        create: (context) => SensorsCubit(
          sensorRepository: context.read<SensorRepository>(),
        ),
        child: SensorsView(),
      ),
    );
  }
}
