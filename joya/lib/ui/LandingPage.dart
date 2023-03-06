import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:joya/component/ScaffoldComponent.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import '../component/ButtonComponent.dart';
import '../data/enum/EnumerateCategoriesButton.dart';
import '../data/enum/EnumerateCategoriesScaffold.dart';
import '../styles/MainTextPalettes.dart';

// SWITCH BACK
class LandingPage extends StatelessWidget {
  static String pageName = "landing";
  LandingPage();

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async => false,
      child: ScaffoldComponent(
        debugShowCheckedModeBanner: false,
        enumerateCategoriesScaffold: EnumerateCategoriesScaffold.noCurvedBar,
        child: Container(
          color: MainColorPalettes.colorsThemeMultiple[5],
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                color: MainColorPalettes.colorsThemeMultiple[5],
                padding: EdgeInsets.fromLTRB(0, 0, 0, 0),
                child: Image.asset(
                  'assets/images/joyalogo.png',
                  width: MediaQuery.of(context).size.width,
                  height: MediaQuery.of(context).size.height / 5,
                  scale: 0.8,
                  colorBlendMode: BlendMode.darken,
                  fit: BoxFit.fitWidth,
                ),
              ),
              SizedBox(
                height: MediaQuery.of(context).size.height / 50,
              ),
              Text(
                '${MainTextPalettes.textFr["BIENVENUE"]}',
                style: TextStyle(
                    color: MainColorPalettes.colorsThemeMultiple[20],
                    fontSize: 45,
                    fontWeight: FontWeight.w600,
                    fontFamily: 'DMSans-Bold.ttf'),
              ),
              Text(
                '${MainTextPalettes.textFr["VOS_PLANTES"]}',
                style: TextStyle(
                    color: MainColorPalettes.colorsThemeMultiple[20],
                    fontSize: 20,
                    fontFamily: 'DMSans-Regular.ttf'),
              ),
              SizedBox(
                height: MediaQuery.of(context).size.height / 10,
              ),
              ButtonComponent(
                text: MainTextPalettes.textFr["INSCRIPTION"],
                enumerateCategoriesButton:
                EnumerateCategoriesButton.typeButtonTextOnly,
                isIOSPlatform: false,
                methode: () => {Navigator.pushNamed(context, 'signup')},
                colorBorder: MainColorPalettes.colorsThemeMultiple[10]!,
                backgroundColorButton:
                MainColorPalettes.colorsThemeMultiple[10]!,
              ),
              SizedBox(height: MediaQuery.of(context).size.height / 35),
              ButtonComponent(
                text: MainTextPalettes
                    .textFr["CONNEXION_BUTTON_DEFAULT_TEXTFIELD"],
                enumerateCategoriesButton:
                EnumerateCategoriesButton.typeButtonTextOnly,
                isIOSPlatform: false,
                methode: () => {Navigator.pushNamed(context, 'login')},
                colorBorder: MainColorPalettes.colorsThemeMultiple[10]!,
                backgroundColorButton:
                MainColorPalettes.colorsThemeMultiple[10]!,
              ),
            ],
          ),
        ),
        ));
  }
}
