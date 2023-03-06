import 'package:flutter/material.dart';

class MainIconsPalettes {
  static const Map<String, dynamic> iconCurved = {
    "ICONS_NAV_BAR": [
      Icon(
        Icons.home,
        size: 25,
        color: Colors.white,
      ),
      Icon(
        Icons.qr_code_scanner_sharp,
        size: 35,
        color: Colors.white,
      ),
      Icon(
        Icons.more_vert,
        size: 25,
        color: Colors.white,
      ),
    ]
  };

  static const Map<String, dynamic> iconButtons = {
    "BACK": Icon(
      Icons.arrow_back,
      size: 30,
      color: Color.fromARGB(255, 255, 255, 255),
    ),
    "NEXT": Icon(
      Icons.arrow_forward,
      size: 30,
      color: Color.fromARGB(255, 255, 255, 255),
    ),
    "CAMERA": Icon(
      Icons.add,
      size: 30,
      color: Color.fromARGB(255, 255, 255, 255),
    ),
    "QR": Icon(
      Icons.qr_code,
      color: Color.fromARGB(255, 0, 0, 0),
      size: 300.0,
    ),
    "BUILD": Icon(
      Icons.build,
      size: 300.0,
      color: Color.fromARGB(255, 0, 0, 0),
    ),
  };
}
