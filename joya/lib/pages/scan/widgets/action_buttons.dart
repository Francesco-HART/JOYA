import 'package:flutter/material.dart';
import '../../../component/ButtonComponent.dart';
import '../../../data/enum/EnumerateCategoriesButton.dart';
import '../../../styles/MainColorPalettes.dart';
import '../../../styles/MainTextPalettes.dart';

class ActionButtonsAddSensor extends StatelessWidget {
  Function submit;

  ActionButtonsAddSensor({required this.submit});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        ButtonComponent(
          text: MainTextPalettes.textFr["VALIDER"],
          enumerateCategoriesButton:
              EnumerateCategoriesButton.typeButtonTextOnly,
          isIOSPlatform: false,
          methode: submit,
          colorBorder: MainColorPalettes.colorsThemeMultiple[10]!,
          backgroundColorButton: MainColorPalettes.colorsThemeMultiple[10]!,
        ),
      ],
    );
  }
}
