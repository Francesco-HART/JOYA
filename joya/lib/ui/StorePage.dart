import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:joya/bloc/bloc_provider.dart';
import 'package:joya/bloc/controller/RequestBloc.dart';
import 'package:joya/component/ButtonComponent.dart';
import 'package:joya/component/ScaffoldComponent.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import 'package:joya/styles/MainTextPalettes.dart';

import '../data/enum/EnumerateCategoriesButton.dart';
import '../data/enum/EnumerateCategoriesScaffold.dart';
import 'ErrorPage.dart';

class StorePage extends StatelessWidget {
  final bool debugShowCheckedModeBanner;
  final bool isIOSPlatform;

  StorePage(
      {required this.isIOSPlatform, required this.debugShowCheckedModeBanner});

  @override
  Widget build(BuildContext context) {
    bool change = true;
    final bloc = BlocProvider.of<RequestBloc>(context);
    if (this.isIOSPlatform) {
      return ScaffoldComponent(
          enumerateCategoriesScaffold: EnumerateCategoriesScaffold.curvedBar,
          debugShowCheckedModeBanner: debugShowCheckedModeBanner,
          index: 3,
          child: Container(
              height: double.infinity,
              width: double.infinity,
              child: SingleChildScrollView(
                  child: Container(
                      color: MainColorPalettes.colorsThemeMultiple[5],
                      child: Column(
                        children: [
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 5,
                          ),
                          Text(
                            '${MainTextPalettes.textFr["BUILD"]}',
                            style: TextStyle(
                                color:
                                    MainColorPalettes.colorsThemeMultiple[30],
                                fontSize: 30,
                                fontFamily: 'DMSans-Bold.ttf'),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.width / 15,
                                0,
                                MediaQuery.of(context).size.width / 15,
                                0),
                            child: ButtonComponent(
                              text: MainTextPalettes
                                  .textFr["CONNEXION_BUTTON_DEFAULT_TEXTFIELD"],
                              enumerateCategoriesButton:
                                  EnumerateCategoriesButton
                                      .typeBigButtonIconQRcode,
                              isIOSPlatform: isIOSPlatform,
                              methode: () =>
                                  {Navigator.pushNamed(context, 'qrcodeScan')},
                              colorBorder:
                                  MainColorPalettes.colorsThemeMultiple[5]!,
                              backgroundColorButton:
                                  MainColorPalettes.colorsThemeMultiple[5]!,
                            ),
                          ),
                        ],
                      )))));
    } else {
      return ScaffoldComponent(
          enumerateCategoriesScaffold: EnumerateCategoriesScaffold.curvedBar,
          debugShowCheckedModeBanner: debugShowCheckedModeBanner,
          index: 3,
          child: Container(
              height: double.infinity,
              width: double.infinity,
              child: SingleChildScrollView(
                  child: Container(
                      color: MainColorPalettes.colorsThemeMultiple[5],
                      child: Column(
                        children: [
                          SizedBox(
                            height: MediaQuery.of(context).size.height / 5,
                          ),
                          Text(
                            '${MainTextPalettes.textFr["BUILD"]}',
                            style: TextStyle(
                                color:
                                    MainColorPalettes.colorsThemeMultiple[30],
                                fontSize: 30,
                                fontFamily: 'DMSans-Bold.ttf'),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(
                                MediaQuery.of(context).size.width / 15,
                                0,
                                MediaQuery.of(context).size.width / 15,
                                0),
                            child: ButtonComponent(
                              text: MainTextPalettes
                                  .textFr["CONNEXION_BUTTON_DEFAULT_TEXTFIELD"],
                              enumerateCategoriesButton:
                                  EnumerateCategoriesButton
                                      .typeBigButtonIconQRcode,
                              isIOSPlatform: isIOSPlatform,
                              methode: () =>
                                  {Navigator.pushNamed(context, 'qrcodeScan')},
                              colorBorder:
                                  MainColorPalettes.colorsThemeMultiple[5]!,
                              backgroundColorButton:
                                  MainColorPalettes.colorsThemeMultiple[5]!,
                            ),
                          ),
                        ],
                      )))));
    }
  }
}
