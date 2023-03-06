import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:joya/bloc/bloc_provider.dart';
import 'package:joya/bloc/controller/RequestBloc.dart';
import 'package:joya/component/ButtonComponent.dart';
import 'package:joya/component/ScaffoldComponent.dart';
import 'package:joya/component/TextFieldComponent.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import 'package:joya/styles/MainTextPalettes.dart';

import '../data/enum/EnumerateCategoriesButton.dart';
import '../data/enum/EnumerateCategoriesScaffold.dart';

class InscriptionPage extends StatelessWidget {
  final bool debugShowCheckedModeBanner;
  final bool isIOSPlatform;

  InscriptionPage(
      {required this.debugShowCheckedModeBanner, required this.isIOSPlatform});

  @override
  Widget build(BuildContext context) {
    final bloc = BlocProvider.of<RequestBloc>(context);
    if (this.isIOSPlatform) {
      return ScaffoldComponent(
          enumerateCategoriesScaffold: EnumerateCategoriesScaffold.noCurvedBar,
          debugShowCheckedModeBanner: debugShowCheckedModeBanner,
          child: Container(
              height: double.infinity,
              width: double.infinity,
              child: SingleChildScrollView(
                  child: Container(
                      color: MainColorPalettes.colorsThemeMultiple[5],
                      child: Column(
                        children: [
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 18,
                          ),
                          Text(
                            '${MainTextPalettes.textFr["INSCRIPTION"]}',
                            style: TextStyle(
                                color:
                                    MainColorPalettes.colorsThemeMultiple[10],
                                fontSize: 60,
                                fontFamily: 'DMSans-Bold.ttf'),
                          ),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                MediaQuery.of(context).size.height / 15,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["EMAIL_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: false,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["NAME_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: false,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["SURNAME_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: false,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["PASSWORD_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: true,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                15,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["CONFIRMATION_PASSWORD_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: true,
                              )),
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 25,
                          ),
                          ButtonComponent(
                            text: MainTextPalettes.textFr["INSCRIPTION"],
                            enumerateCategoriesButton:
                                EnumerateCategoriesButton.typeButtonTextOnly,
                            isIOSPlatform: isIOSPlatform,
                            methode: () =>
                                {Navigator.pushNamed(context, 'confirmEmail')},
                            colorBorder:
                                MainColorPalettes.colorsThemeMultiple[5]!,
                            backgroundColorButton:
                                MainColorPalettes.colorsThemeMultiple[10]!,
                          ),
                          SizedBox(
                            height: 15,
                          ),
                          Center(
                              child: RichText(
                                  textAlign: TextAlign.center,
                                  text: TextSpan(children: [
                                    TextSpan(
                                      text:
                                          "${MainTextPalettes.textFr["PLUSINFO"]}",
                                      style: TextStyle(
                                          fontFamily: "DMSans-Regular",
                                          fontSize: 15,
                                          color: MainColorPalettes
                                              .colorsThemeMultiple[20]),
                                    ),
                                    TextSpan(
                                      text:
                                          "\n${MainTextPalettes.textFr["CONDITIONURL"]}",
                                      style: TextStyle(
                                          fontFamily: "DMSans-Regular",
                                          fontSize: 15,
                                          color: MainColorPalettes
                                              .colorsThemeMultiple[10]),
                                      recognizer: TapGestureRecognizer()
                                        ..onTap = () {
                                          Navigator.pushNamed(context, 'about');
                                        },
                                    ),
                                  ])))
                        ],
                      )))));
    } else {
      return ScaffoldComponent(
          enumerateCategoriesScaffold: EnumerateCategoriesScaffold.noCurvedBar,
          debugShowCheckedModeBanner: debugShowCheckedModeBanner,
          child: Container(
              height: double.infinity,
              width: double.infinity,
              child: SingleChildScrollView(
                  child: Container(
                      color: MainColorPalettes.colorsThemeMultiple[5],
                      child: Column(
                        children: [
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 50,
                          ),
                          Text(
                            '${MainTextPalettes.textFr["INSCRIPTION"]}',
                            style: TextStyle(
                                color:
                                    MainColorPalettes.colorsThemeMultiple[10],
                                fontSize: 50,
                                fontFamily: 'DMSans-Bold.ttf'),
                          ),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                MediaQuery.of(context).size.height / 25,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["EMAIL_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: false,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["NAME_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: false,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["SURNAME_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: false,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                5,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["PASSWORD_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: true,
                              )),
                          Padding(
                              padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.height / 25,
                                5,
                                MediaQuery.of(context).size.height / 25,
                                15,
                              ),
                              child: TextFieldComponent(
                                methode: (test) => {},
                                text:
                                    "${MainTextPalettes.textFr["CONFIRMATION_PASSWORD_LABEL_DEFAULT_TEXTFIELD"]}",
                                isValid: true,
                                isNotValidRenderText: 'test',
                                hiddenText: true,
                              )),
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 25,
                          ),
                          ButtonComponent(
                            text: MainTextPalettes.textFr["INSCRIPTION"],
                            enumerateCategoriesButton:
                                EnumerateCategoriesButton.typeButtonTextOnly,
                            isIOSPlatform: isIOSPlatform,
                            methode: () =>
                                {Navigator.pushNamed(context, 'confirmEmail')},
                            colorBorder:
                                MainColorPalettes.colorsThemeMultiple[5]!,
                            backgroundColorButton:
                                MainColorPalettes.colorsThemeMultiple[10]!,
                          ),
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 50,
                          ),
                          Center(
                              child: RichText(
                                  textAlign: TextAlign.center,
                                  text: TextSpan(children: [
                                    TextSpan(
                                      text:
                                          "${MainTextPalettes.textFr["PLUSINFO"]}",
                                      style: TextStyle(
                                          fontFamily: "DMSans-Regular",
                                          fontSize: 15,
                                          color: MainColorPalettes
                                              .colorsThemeMultiple[20]),
                                    ),
                                    TextSpan(
                                      text:
                                          "\n${MainTextPalettes.textFr["CONDITIONURL"]}",
                                      style: TextStyle(
                                          fontFamily: "DMSans-Regular",
                                          fontSize: 15,
                                          color: MainColorPalettes
                                              .colorsThemeMultiple[10]),
                                      recognizer: TapGestureRecognizer()
                                        ..onTap = () {
                                          Navigator.pushNamed(context, 'about');
                                        },
                                    ),
                                  ])))
                        ],
                      )))));
    }
  }
}
