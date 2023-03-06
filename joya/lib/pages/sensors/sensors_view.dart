import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/common/utils/snackbar.dart';
import 'package:joya/pages/sensors/widgets/ItemsComponent.dart';

import '../../component/ScaffoldComponent.dart';
import '../../component/TextFieldComponent.dart';
import '../../data/enum/EnumerateCategoriesScaffold.dart';
import '../../styles/MainColorPalettes.dart';
import '../../styles/MainTextPalettes.dart';
import 'cubit/sensors_cubit.dart';

class SensorsView extends StatefulWidget {
  const SensorsView({
    Key? key,
  }) : super(key: key);

  @override
  _SensorsState createState() => _SensorsState();
}

class _SensorsState extends State<SensorsView> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    context.read<SensorsCubit>().fetchSensors();
  }

  @override
  void dispose() {
    super.dispose();
  }

  void updateUI(SensorsState state) {
    //debugPrint(state.runtimeType.toString());
    if (state is SensorsSuccess) {
    } else if (state is SensorsLoaded) {
      context.read<SensorsCubit>().setSensors(state.sensors);
    } else if (state is SensorsError) {
      showWarningSnackbar(context, state.message);
    }
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async => false,
      child: ScaffoldComponent(
      debugShowCheckedModeBanner: true,
      index: 0,
      enumerateCategoriesScaffold: EnumerateCategoriesScaffold.curvedBar,
      child: Scaffold(
        key: _scaffoldKey,
        body: BlocConsumer<SensorsCubit, SensorsState>(
          listener: (context, state) {
            updateUI(state);
          },
          builder: (context, state) {
            const Key centerKey = ValueKey<String>('sensors');

            return Column(
              children: [
                Padding(
                  padding:
                      const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                  child: Text(
                    '${MainTextPalettes.textFr["MY_PLANT"]}',
                    style: TextStyle(
                        color: MainColorPalettes.colorsThemeMultiple[10],
                        fontSize: 28,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'DMSans-Bold.ttf'),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
                  child: TextFieldComponent(
                    methode: (data) async {
                      context.read<SensorsCubit>().setSearchField(data);
                    },
                    text: "${MainTextPalettes.textFr["SEARCH"]}",
                    isNotValidRenderText: "",
                    hiddenText: false,
                    isValid: true,
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 8.0, horizontal: 16),
                    child: GridView.builder(
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        crossAxisSpacing: 8,
                        mainAxisSpacing: 8,
                      ),
                      itemCount: context.read<SensorsCubit>().sensors.length,
                      itemBuilder: (context, index) {
                        var sensor =
                            context.read<SensorsCubit>().sensors[index];
                        return sensor.name != null || sensor.user != null
                            ? GridTile(
                                child: ItemComponent(
                                  id: sensor.id,
                                  name: sensor.name.toString(),
                                  serial_number: sensor.serial_number,
                                  backgroundColor: context
                                          .read<SensorsCubit>()
                                          .isInDanger(sensor)
                                      ? Colors.red
                                      : context
                                              .read<SensorsCubit>()
                                              .isInWarnning(sensor)
                                          ? Colors.orange
                                          : Colors.green,
                                ),
                              )
                            : Container();
                      },
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
      ),
    );
  }
}
