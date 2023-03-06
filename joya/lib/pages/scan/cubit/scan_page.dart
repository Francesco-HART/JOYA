import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/data/repositories/joya/plant.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:joya/data/services/api/joya/plant.dart';
import 'package:joya/data/services/api/joya/sensor.dart';
import 'package:joya/pages/scan/cubit/scan_cubit.dart';
import 'package:joya/pages/scan/scan_view.dart';

class ScanPage extends StatelessWidget {
  static String pageName = "scan";

  ScanPage({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiRepositoryProvider(
      providers: [
        RepositoryProvider<SensorRepository>(
          create: (context) => SensorRepository(sensorService: SensorService()),
        ),
        RepositoryProvider<PlantRepository>(
          create: (context) => PlantRepository(plantService: PlantService()),
        ),
      ],
      child: BlocProvider(
        create: (context) => ScanCubit(
            sensorRepository: context.read<SensorRepository>(),
            plantRepository: context.read<PlantRepository>()),
        child: QrCodeScan(),
      ),
    );
  }
}
