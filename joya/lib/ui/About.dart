import 'package:flutter/cupertino.dart';
import 'package:joya/component/ButtonComponent.dart';
import 'package:joya/component/ScaffoldComponent.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import 'package:joya/styles/MainTextPalettes.dart';

import '../common/utils/navigation.dart';
import '../data/enum/EnumerateCategoriesButton.dart';
import '../data/enum/EnumerateCategoriesScaffold.dart';

class About extends StatelessWidget {
  static String pageName = "about";

  final bool debugShowCheckedModeBanner;
  final bool isIOSPlatform;

  About(
      {required this.debugShowCheckedModeBanner, required this.isIOSPlatform});

  @override
  Widget build(BuildContext context) {
    return ScaffoldComponent(
      enumerateCategoriesScaffold: EnumerateCategoriesScaffold.curvedBar,
      debugShowCheckedModeBanner: debugShowCheckedModeBanner,
      index: 2,
      child: Container(
        width: MediaQuery.of(context).size.width,
        height: MediaQuery.of(context).size.height,
        color: MainColorPalettes.colorsThemeMultiple[5],
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(
              height: MediaQuery.of(context).size.height / 15,
            ),
            Text(
              '${MainTextPalettes.textFr["ABOUT"]}',
              style: TextStyle(
                  color: MainColorPalettes.colorsThemeMultiple[10],
                  fontSize: 38,
                  fontWeight: FontWeight.w600,
                  fontFamily: 'DMSans-Bold.ttf'),
            ),
            // SizedBox(
            //   height: MediaQuery.of(context).size.width / 25,
            // ),
            // ButtonComponent(
            //   text: MainTextPalettes.textFr["ABOUTPRENIUM"],
            //   enumerateCategoriesButton:
            //       EnumerateCategoriesButton.typeButtonTextAndIconAndOpacity,
            //   isIOSPlatform: isIOSPlatform,
            //   methode: () => {},
            //   colorBorder: MainColorPalettes.colorsThemeMultiple[5]!,
            //   backgroundColorButton: MainColorPalettes.colorsThemeMultiple[5]!,
            // ),
            // SizedBox(
            //   height: MediaQuery.of(context).size.width / 25,
            // ),
            SizedBox(
              height: MediaQuery.of(context).size.width / 10,
            ),
            ButtonComponent(
              text: MainTextPalettes.textFr["ABOUT_MY_ACCOUNT"],
              enumerateCategoriesButton:
                  EnumerateCategoriesButton.typeButtonTextAndIconAndOpacity,
              isIOSPlatform: isIOSPlatform,
              methode: () => {},
              colorBorder: MainColorPalettes.colorsThemeMultiple[5]!,
              backgroundColorButton: MainColorPalettes.colorsThemeMultiple[5]!,
            ),
            // SizedBox(
            //   height: MediaQuery.of(context).size.width / 25,
            // ),
            // ButtonComponent(
            //   text: MainTextPalettes.textFr["ABOUT_SETTING"],
            //   enumerateCategoriesButton:
            //       EnumerateCategoriesButton.typeButtonTextAndIconAndOpacity,
            //   isIOSPlatform: isIOSPlatform,
            //   methode: () => {},
            //   colorBorder: MainColorPalettes.colorsThemeMultiple[5]!,
            //   backgroundColorButton: MainColorPalettes.colorsThemeMultiple[5]!,
            // ),
            SizedBox(
              height: MediaQuery.of(context).size.width / 10,
            ),
            ButtonComponent(
              text: MainTextPalettes.textFr["ABOUT_HELP"],
              enumerateCategoriesButton:
                  EnumerateCategoriesButton.typeButtonTextAndIconAndOpacity,
              isIOSPlatform: isIOSPlatform,
              methode: () => {redirectToWebPage("FAQ")},
              colorBorder: MainColorPalettes.colorsThemeMultiple[5]!,
              backgroundColorButton: MainColorPalettes.colorsThemeMultiple[5]!,
            ),
            SizedBox(
              height: MediaQuery.of(context).size.width / 10,
            ),
            ButtonComponent(
              text: MainTextPalettes.textFr["ABOUT_JOYA"],
              enumerateCategoriesButton:
                  EnumerateCategoriesButton.typeButtonTextAndIconAndOpacity,
              isIOSPlatform: isIOSPlatform,
              methode: () => {redirectToWebPage("")},
              colorBorder: MainColorPalettes.colorsThemeMultiple[5]!,
              backgroundColorButton: MainColorPalettes.colorsThemeMultiple[5]!,
            ),
          ],
        ),
      ),
    );
  }
}
