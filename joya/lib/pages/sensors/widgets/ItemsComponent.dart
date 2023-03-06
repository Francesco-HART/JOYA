import 'package:flutter/material.dart';
import 'package:joya/pages/plant/cubit/sensor_detail_page.dart';

class ItemComponent extends StatelessWidget {
  final String name;
  final String id;
  final String serial_number;
  final Color backgroundColor;
  final destination;

  const ItemComponent({
    Key? key,
    required this.name,
    required this.id,
    required this.serial_number,
    required this.backgroundColor,
    this.destination,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;

    return Container(
      margin: const EdgeInsets.all(8),
      width: size.width * 0.45,
      child: GestureDetector(
        onTap: () {
          Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) =>
                      SensorPage(sensorId: id, serialNumber: serial_number)));
        },
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: backgroundColor,
                borderRadius: BorderRadius.only(
                  topRight: Radius.circular(10),
                  topLeft: Radius.circular(10),
                ),
              ),
              child: Container(
                alignment: Alignment.center,
                child: Text(
                  " ${name.toUpperCase()}",
                  style: TextStyle(
                      fontWeight: FontWeight.bold, color: Colors.white70),
                ),
              ),
            ),
            Expanded(
              child: ClipRRect(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(10),
                  bottomRight: Radius.circular(10),
                ),
                child: Image.network(
                  "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
                  height: double.infinity,
                  width: double.infinity,
                  alignment: Alignment.center,
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
