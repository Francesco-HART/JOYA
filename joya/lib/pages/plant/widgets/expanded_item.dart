import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../cubit/sensor_detail_cubit.dart';

class ExpandedItem extends StatefulWidget {
  final String popupTitle;
  final int? rate;
  final String unit;
  final int? min;
  final int? max;
  final String label;
  final IconData icon;
  final Color color;

  const ExpandedItem(
      {Key? key,
      required this.popupTitle,
      required this.rate,
      required this.unit,
      required this.min,
      required this.max,
      required this.label,
      required this.icon,
      required this.color})
      : super(key: key);

  @override
  State<ExpandedItem> createState() => _ExpandedItemState();
}

class _ExpandedItemState extends State<ExpandedItem> {
  @override
  Widget build(BuildContext context) {
    var sensor = context.read<SensorCubit>().sensor;

    return Expanded(
      child: Column(
        children: [
          Container(
            height: 50,
            width: 50,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(50),
              border: Border.all(color: Colors.grey),
            ),
            child: IconButton(
              onPressed: (() => {
                    popup(widget.popupTitle, widget.rate, widget.unit,
                        widget.min, widget.max)
                  }),
              icon: Icon(
                widget.icon,
                color: widget.color,
                size: 30.0,
                semanticLabel: widget.label,
              ),
              tooltip: widget.label,
            ),
          ),
          const SizedBox(height: 8.0),
          Text("${widget.rate}"),
        ],
      ),
    );
  }

  Future<Null> popup(
      String title, int? rate, String unit, int? min, int? max) async {
    double height = MediaQuery.of(context).size.width * 0.75;
    return showDialog(
        context: context,
        builder: (BuildContext context) {
          return SimpleDialog(
            contentPadding: EdgeInsets.all(20.0),
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text("$title $rate $unit"),
                  SizedBox(height: 4.0),
                  Text("Minimum : $min"),
                  SizedBox(height: 4.0),
                  Text("Maximum :  $max"),
                ],
              ),
            ],
          );
        });
  }
}
