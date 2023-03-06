import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:joya/styles/MainWidgetPalettes.dart';

class ContainerCustum extends StatelessWidget {

  final Widget child;
  final bool debugShowCheckedModeBanner;
  ContainerCustum({required this.child,required this.debugShowCheckedModeBanner});

  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        color: debugShowCheckedModeBanner ?
        MainWidgetPalettes.DEBUG_COLOR :
        MainWidgetPalettes.DEBUG_COLOR_CONTAINER_CUSTUM,
        padding: MainWidgetPalettes.PADDING_CONTAINER_CUSTUM,
        child: Container(
            width: MediaQuery.of(context).size.width / 1.5 ,
            height: MediaQuery.of(context).size.height / 1.5 ,
            color: debugShowCheckedModeBanner ?
            MainWidgetPalettes.DEBUG_COLOR_DEEP :
            MainWidgetPalettes.DEBUG_COLOR_DEEP_CONTAINER_CUSTUM,
            child: Padding(
              padding: MainWidgetPalettes.PADDING_CONTAINER_CUSTUM_DEEP,
              child: child,
            )
        )
    );
  }
}
