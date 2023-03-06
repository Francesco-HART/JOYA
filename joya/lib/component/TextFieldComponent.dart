import 'package:flutter/material.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import 'package:joya/styles/MainTextFieldPalettes.dart';

class TextFieldComponent extends StatelessWidget {
  Function(String) methode;
  Icon? icon;
  String text;
  bool isValid;
  String isNotValidRenderText;
  String? initialValue;
  bool hiddenText;

  TextFieldComponent({
    required this.methode,
    required this.text,
    required this.isValid,
    this.icon,
    this.initialValue,
    required this.hiddenText,
    required this.isNotValidRenderText});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          height: 60,
            decoration: BoxDecoration(
              border: Border.all(
                  width: 1.0,
                  color: isValid
                      ? Colors.grey
                      : MainColorPalettes.colorsThemeMultiple[30]!),
              borderRadius: BorderRadius.all(Radius.circular(
                  MainTextFieldPalettes.simpleTextfield["RADIUS"])),
            ),
            child: TextField(
              textInputAction: TextInputAction.done,
              onChanged: methode,
              obscureText: hiddenText,
              decoration: InputDecoration(
                hintText: '$text',
                hintStyle: TextStyle(
                  color: isValid
                      ? MainColorPalettes.colorsThemeMultiple[20]!
                      : MainColorPalettes.colorsThemeMultiple[30]!,
                  fontWeight: FontWeight.normal,
                  decoration: TextDecoration.none,
                  fontFamily: 'DMSans-Regular',
                  fontSize: MediaQuery.of(context).size.width / 20,
                ),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(
                      MainTextFieldPalettes.simpleTextfield["RADIUS"])),
                ),
                enabledBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(
                        MainTextFieldPalettes.simpleTextfield["RADIUS"])),
                    borderSide: BorderSide(
                        color: isValid
                            ? MainColorPalettes.colorsThemeMultiple[5]!
                            : MainColorPalettes.colorsThemeMultiple[30]!)),
                focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(
                        MainTextFieldPalettes.simpleTextfield["RADIUS"])),
                    borderSide: BorderSide(
                        color: isValid
                            ? MainColorPalettes.colorsThemeMultiple[5]!
                            : MainColorPalettes.colorsThemeMultiple[30]!)),
              ),
            )),
        errorInstanceTextWidget()
      ],
    );
  }

  Widget errorInstanceTextWidget() {
    if (isValid) {
      return Text('');
    } else {
      return Text(
        '$isNotValidRenderText',
        style: TextStyle(
          color: MainColorPalettes.colorsThemeMultiple[30]!,
          fontSize: 15,
          fontFamily: 'DMSans-Bold',
        ),
      );
    }
  }
}
