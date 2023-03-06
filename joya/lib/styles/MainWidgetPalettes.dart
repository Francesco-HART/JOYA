import 'package:flutter/material.dart';

class MainWidgetPalettes{
  static const MaterialColor DEBUG_COLOR = MaterialColor(0xFFFF0000,{50:Color.fromARGB(255, 255, 0, 0),});
  static const MaterialColor DEBUG_COLOR_CONTAINER_CUSTUM = MaterialColor(0xFFFFFFFF,{50:Color.fromARGB(255, 255, 255, 255),});
  static const EdgeInsets PADDING_CONTAINER_CUSTUM = EdgeInsets.fromLTRB(10, 20, 10, 25);
  static const MaterialColor DEBUG_COLOR_DEEP = MaterialColor(0xFFF8D72A,{50:Color.fromARGB(255, 248, 215, 42),});
  static const MaterialColor DEBUG_COLOR_DEEP_CONTAINER_CUSTUM = MaterialColor(0xFFFFFFFF,{50:Color.fromARGB(255, 255, 255, 255),});
  static const EdgeInsets PADDING_CONTAINER_CUSTUM_DEEP = EdgeInsets.fromLTRB(5, 5, 5, 5);

  static const Map<String, dynamic> itemsComponentConfig = {
    "ROUND": 5.0,
  };

}
