import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:joya/data/models/sensor-data.dart';
import 'package:syncfusion_flutter_charts/charts.dart';

class ChartComponent extends StatefulWidget {
  final List<SensorData> sensorsData;
  const ChartComponent({Key? key, required this.sensorsData}) : super(key: key);

  @override
  State<ChartComponent> createState() => _ChartComponentState();
}

class _ChartComponentState extends State<ChartComponent> {
  //late List<SensorData> sensorsData;
  late TooltipBehavior _tooltipBehavior;

  @override
  void initState() {
    widget.sensorsData.forEach(
        (element) => print("${element.created_at.toString()} sensors data"));
    _tooltipBehavior = TooltipBehavior(enable: true);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SfCartesianChart(
      title: ChartTitle(
          text: 'Les statistiques de ma plante',
          textStyle: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
      legend: Legend(isVisible: true),
      tooltipBehavior: _tooltipBehavior,
      series: <ChartSeries>[
        SplineAreaSeries<SensorData, String>(
            dataSource: widget.sensorsData,
            xValueMapper: (SensorData exp, _) =>
                DateFormat.Hm().format(exp.created_at),
            yValueMapper: (SensorData exp, _) => exp.luminosity,
            name: 'Luminosité',
            color: Colors.yellow,
            opacity: .5),
        SplineAreaSeries<SensorData, String>(
            dataSource: widget.sensorsData,
            xValueMapper: (SensorData exp, _) =>
                DateFormat.Hm().format(exp.created_at),
            yValueMapper: (SensorData exp, _) => exp.humidity,
            name: 'Humidité',
            color: Colors.blue,
            opacity: .5),
        SplineAreaSeries<SensorData, String>(
            dataSource: widget.sensorsData,
            xValueMapper: (SensorData exp, _) =>
                DateFormat.Hm().format(exp.created_at),
            yValueMapper: (SensorData exp, _) => exp.temperature,
            name: 'Température',
            color: Colors.teal,
            opacity: .5),
      ],
      primaryXAxis: CategoryAxis(),
    );
  }
}
