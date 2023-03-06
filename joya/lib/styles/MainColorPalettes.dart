import 'package:flutter/material.dart';

class MainColorPalettes {
  static const MaterialColor colorsThemeMultiple = MaterialColor(0xFFFFFFFF,{
    5:Color.fromARGB(255, 255, 255, 255),
    10:Color.fromARGB(255, 31, 195, 113),
    15:Color.fromARGB(255, 255, 164, 0),
    20:Color.fromARGB(255, 46, 58, 89),
    25:Color.fromARGB(255, 199, 198, 198),
    30:Color.fromARGB(255, 255, 60, 60),
    35:Color.fromARGB(255, 0, 0, 0),
    40:Color.fromARGB(64, 255, 255, 255),
  });

  static const Map<int, Color> colorsCustum = {
    5:Color.fromARGB(255, 255, 255, 255),
    10:Color.fromARGB(255, 31, 195, 113),
    15:Color.fromARGB(255, 255, 164, 0),
    20:Color.fromARGB(255, 46, 58, 89),
  };

  final Map<int, Color> _yellow700Map = {
    50: Color(0xFFFFD7C2),
    100: Colors.yellow[100]!,
    // 200: Colors.yellow[200],
    // 300: Colors.yellow[300],
    // 400: Colors.yellow[400],
    // 500: Colors.yellow[500],
    // 600: Colors.yellow[600],
    // 700: Colors.yellow[800],
    // 800: Colors.yellow[900],
    // 900: Colors.yellow[700],
  };
}