import 'package:flutter/material.dart';
import 'package:joya/component/BoxShadowComponent.dart';
import 'package:joya/styles/MainBottonPalettes.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import 'package:joya/styles/MainIconsPalettes.dart';

import '../data/enum/EnumerateCategoriesButton.dart';

class ButtonComponent extends StatelessWidget {
  EnumerateCategoriesButton enumerateCategoriesButton;
  bool isIOSPlatform;
  var methode;
  Color colorBorder;
  Color backgroundColorButton;
  String? text;

  ButtonComponent(
      {required this.enumerateCategoriesButton,
      required this.isIOSPlatform,
      required this.methode,
      required this.colorBorder,
      required this.backgroundColorButton,
      this.text});

  @override
  Widget build(BuildContext context) {
    return creationFunctionInRelationToTheCategory(
        enumerateCategoriesButton, context);
  }

  Widget creationFunctionInRelationToTheCategory(
      EnumerateCategoriesButton enumerateCategoriesButton,
      BuildContext context) {
    switch (enumerateCategoriesButton) {
      case EnumerateCategoriesButton.typeButtonIconOnly:
        return renderingOfAButtonWithoutTextWithIcon();
      case EnumerateCategoriesButton.typeButtonTextOnly:
        return renderingOfButtonWithoutIconWithText(context);
      case EnumerateCategoriesButton.typeButtonTextAndIconRight:
        return renderingOfButtonWithIconAndText(context);
      case EnumerateCategoriesButton.typeButtonTextAndIconAndOpacity:
        return renderingButtonTextAndIconAndOpacity(context);
      case EnumerateCategoriesButton.typeBigButtonIconQRcode:
        return renderingBigButtonIcon(context);
      default:
        return BoxShadowComponent(
            text: 'Botton category Don\'t existed',
            isIOSPlatform: isIOSPlatform,
            numberOfError: 404);
    }
  }

  Widget renderingOfAButtonWithoutTextWithIcon() {
    return SizedBox(
      width: MainBottonPalettes.bottonWithIconOnly["BTN_WIDHT"],
      height: MainBottonPalettes.bottonWithIconOnly["BTN_HEIGHT"],
      child: ElevatedButton(
        onPressed: methode,
        style: ButtonStyle(
          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
              RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(
                      MainBottonPalettes.bottonWithIconOnly["BTN_RADIUS"]),
                  side: BorderSide(color: colorBorder))),
          backgroundColor: MaterialStateProperty.all(backgroundColorButton),
          padding: MaterialStateProperty.all(
              MainBottonPalettes.bottonWithIconOnly["EDGEINSET_ICON"]),
        ),
        child: Center(child: MainIconsPalettes.iconButtons["CAMERA"]),
      ),
    );
    // );
  }

  Widget renderingOfButtonWithoutIconWithText(context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width / 1.2,
      height: MediaQuery.of(context).size.height / 16,
      child: ElevatedButton(
        onPressed: methode,
        style: ButtonStyle(
          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
              RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(
                      MainBottonPalettes.bottonWithTextOnly["BTN_RADIUS"]),
                  side: BorderSide(color: colorBorder))),
          backgroundColor: MaterialStateProperty.all(backgroundColorButton),
          padding: MaterialStateProperty.all(
              MainBottonPalettes.bottonWithTextOnly["EDGEINSET_ICON"]),
        ),
        child: Center(
            child: Text(
          '$text',
          style: TextStyle(
              fontWeight: FontWeight.bold,
              decoration: TextDecoration.none,
              fontFamily: 'DMSans-Bold',
              fontSize: MediaQuery.of(context).size.width / 18,
              color: MainColorPalettes.colorsThemeMultiple[5]),
        )),
      ),
    );
  }

  Widget renderingOfButtonWithIconAndText(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width / 1.2,
      height: MediaQuery.of(context).size.height / 16,
      child: ElevatedButton(
          onPressed: methode,
          style: ButtonStyle(
            shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(
                        MainBottonPalettes.bottonWithTextOnly["BTN_RADIUS"]),
                    side: BorderSide(color: colorBorder))),
            backgroundColor: MaterialStateProperty.all(backgroundColorButton),
            padding: MaterialStateProperty.all(
                MainBottonPalettes.bottonWithTextOnly["EDGEINSET_ICON"]),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '$text',
                style: TextStyle(
                    fontWeight: FontWeight.bold,
                    decoration: TextDecoration.none,
                    fontFamily: 'DMSans-Bold',
                    fontSize: MediaQuery.of(context).size.width / 18,
                    color: MainColorPalettes.colorsThemeMultiple[5]),
              ),
            ],
          )),
    );
  }

  Widget renderingButtonTextAndIconAndOpacity(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width / 1.2,
      height: MediaQuery.of(context).size.height / 16,
      child: ElevatedButton(
        onPressed: methode,
        style: ButtonStyle(
          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
              RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(
                      MainBottonPalettes.bottonWithTextOnly["BTN_RADIUS"]),
                  side: BorderSide(color: colorBorder))),
          backgroundColor: MaterialStateProperty.all(backgroundColorButton),
          padding: MaterialStateProperty.all(
              MainBottonPalettes.bottonWithTextOnly["EDGEINSET_ICON"]),
        ),
        child: Center(
            child: Text(
          '$text',
          style: TextStyle(
              fontWeight: FontWeight.w600,
              decoration: TextDecoration.none,
              fontFamily: 'DMSans-Bold',
              fontSize: MediaQuery.of(context).size.width / 18,
              color: MainColorPalettes.colorsThemeMultiple[35]),
        )),
      ),
    );
  }

  Widget renderingBigButtonIcon(BuildContext context) {
    return SizedBox(
      child: ElevatedButton(
        onPressed: methode,
        style: ButtonStyle(
          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
              RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(
                      MainBottonPalettes.bottonWithIconOnly["BTN_RADIUS"]),
                  side: BorderSide(color: colorBorder))),
          backgroundColor: MaterialStateProperty.all(backgroundColorButton),
          padding: MaterialStateProperty.all(
              MainBottonPalettes.bottonWithIconOnly["EDGEINSET_ICON"]),
        ),
        child: Center(child: MainIconsPalettes.iconButtons["QR"]),
      ),
    );
  }
}
