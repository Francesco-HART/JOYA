import 'package:flutter/material.dart';
import 'package:joya/pages/login/cubit/login_page.dart';
import 'package:joya/pages/scan/widgets/action_buttons.dart';
import '../../styles/MainTextPalettes.dart';

class AddSensor extends StatefulWidget {
  String? result;

  AddSensor({
    Key? key,
    required this.result,
  }) : super(key: key);

  @override
  _AddSensorState createState() => _AddSensorState(result);
}

class _AddSensorState extends State<AddSensor> {
  String? result;

  final plantType = [
    "Calathea zebrina",
    "Ficus lyrata",
    "Alocasia zebrina",
    "Dracaena marginata",
    "Chlorophytum comosum"
  ];

  final _sensorNameController = TextEditingController();
  final _sensorLocationController = TextEditingController();

  late String sensorName;
  late String sensorLocation;
  String? type;

  _AddSensorState(this.result);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
          child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.all(8.0),
                      child: Text(
                        '${MainTextPalettes.textFr["CONFIG_PLANT"]}',
                        style: TextStyle(
                            fontWeight: FontWeight.w700,
                            fontSize: 28,
                            color: Color.fromRGBO(35, 162, 92, 1)),
                      ),
                    ),
                    const SizedBox(height: 10.0),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 8, horizontal: 16),
                      child: TextFormField(
                        onChanged: (plantBotanicalName) {
                          setState(() {
                            sensorName = _sensorNameController.text;
                          });
                        },
                        controller: _sensorNameController,
                        decoration: InputDecoration(
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(18.2),
                            ),
                            hintText:
                                '${MainTextPalettes.textFr["NAME_PLANT"]}'),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 8, horizontal: 16),
                      child: DropdownButtonHideUnderline(
                        child: Container(
                          padding: EdgeInsets.symmetric(
                              horizontal: 8.0, vertical: 5.0),
                          decoration: BoxDecoration(
                            border: Border.all(color: Colors.grey),
                            borderRadius: BorderRadius.circular(18.2),
                          ),
                          child: DropdownButton<String>(
                            hint: Text(
                                '${MainTextPalettes.textFr["PLANT_TYPE"]}'),
                            value: type,
                            isExpanded: true,
                            items: plantType.map(buildDropdownItem).toList(),
                            onChanged: (plantBotanicalName) =>
                                setState(() => this.type = plantBotanicalName!),
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          vertical: 8, horizontal: 16),
                      child: TextFormField(
                        onChanged: (plantBotanicalName) {
                          setState(() {
                            sensorLocation = _sensorLocationController.text;
                          });
                        },
                        controller: _sensorLocationController,
                        decoration: InputDecoration(
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(18.2),
                            ),
                            hintText:
                                '${MainTextPalettes.textFr["LOCALISATION_PLANT"]}'),
                      ),
                    ),
                    SizedBox(height: MediaQuery.of(context).size.height / 25),
                    ActionButtonsAddSensor(
                        submit: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => LoginPage()))),
                  ]))),
    );
  }

  DropdownMenuItem<String> buildDropdownItem(String item) => DropdownMenuItem(
        value: item,
        child: Text(item),
      );

  @override
  void dispose() {
    _sensorNameController.dispose();
    _sensorLocationController.dispose();
    super.dispose();
  }
}
