import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/data/repositories/joya/sensor-data.dart';
import 'package:joya/data/repositories/joya/sensor.dart';
import 'package:joya/data/repositories/wiki/wiki-plant.dart';
import 'package:joya/data/services/api/joya/sensor-data.dart';
import 'package:joya/pages/plant/cubit/sensor_detail_cubit.dart';
import '../../../data/services/api/joya/sensor.dart';
import '../../../data/services/api/wikipedia/wiki-plant.dart';
import '../../../data/services/socket/web_socket.dart';
import '../sensor_detail_view.dart';

class SensorPage extends StatelessWidget {
  static String pageName = "Sensor";
  final String sensorId;
  final String serialNumber;
  const SensorPage(
      {Key? key, required this.sensorId, required this.serialNumber})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MultiRepositoryProvider(
      providers: [
        RepositoryProvider<SensorRepository>(
          create: (context) => SensorRepository(sensorService: SensorService()),
        ),
        RepositoryProvider<SensorDataRepository>(
            create: (context) => SensorDataRepository(sensorDataService: SensorDataService())),
        RepositoryProvider<WikiPlantRepository>(
            create: (context) => WikiPlantRepository(
                serviceWikipediaPlant: ServiceWikipediaPlant())),
        RepositoryProvider<StreamSocketService>(
            create: (context) => StreamSocketService())
      ],
      child: BlocProvider(
        create: (context) => SensorCubit(
          sensorRepository: context.read<SensorRepository>(),
          wikiPlantRepository: context.read<WikiPlantRepository>(),
          sensorDataRepository: context.read<SensorDataRepository>(),
        ),
        child: SensorView(
          serialNumber: serialNumber,
          sensorId: sensorId,
        ),
      ),
    );
  }
}
