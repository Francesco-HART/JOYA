import 'package:curved_navigation_bar/curved_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:joya/pages/scan/cubit/scan_page.dart';
import 'package:joya/pages/sensors/cubit/sensors_page.dart';
import 'package:joya/styles/MainColorPalettes.dart';
import 'package:joya/styles/MainIconsPalettes.dart';

import '../data/enum/EnumerateCategoriesScaffold.dart';

class ScaffoldComponent extends StatelessWidget {
  Widget child;
  bool debugShowCheckedModeBanner;
  EnumerateCategoriesScaffold enumerateCategoriesScaffold;
  int? index;

  ScaffoldComponent(
      {required this.enumerateCategoriesScaffold,
      required this.child,
      required this.debugShowCheckedModeBanner,
      this.index});

  @override
  Widget build(BuildContext context) {
    if (enumerateCategoriesScaffold == EnumerateCategoriesScaffold.curvedBar) {
      return scaffoldWithCurvedBar(context);
    } else if (enumerateCategoriesScaffold ==
        EnumerateCategoriesScaffold.noCurvedBar) {
      return scaffoldWithNoCurvedBar();
    } else {
      return Container(
        child: Text('NO'),
      );
    }
  }

  Map<int, String?> path = {
    0: SensorsPage.pageName,
    1: ScanPage.pageName,
    2: "about"
  };

  Widget scaffoldWithCurvedBar(context) {
    return Scaffold(
      bottomNavigationBar: CurvedNavigationBar(
        key: const Key('curved'),
        index: this.index!,
        height: 50,
        items: MainIconsPalettes.iconCurved[
            "ICONS_NAV_BAR"], // sinon prend IconConstants.ICONS_CURVED_NAV_BAR,
        color: MainColorPalettes.colorsThemeMultiple[10]!,
        buttonBackgroundColor: MainColorPalettes.colorsThemeMultiple[10]!,
        backgroundColor: Colors.transparent,
        animationCurve: Curves.easeInOut,
        animationDuration: const Duration(milliseconds: 600),
        onTap: (index) async {
          if (path[index] == null) {
            Navigator.pushNamed(context, 'landing');
          } else {
            Navigator.pushNamed(context, path[index].toString());
          }
        },
        letIndexChange: (index) => true,
      ),
      body: SafeArea(
        bottom: false,
        child: child,
      ),
    );
  }

  Widget scaffoldWithNoCurvedBar() {
    return Scaffold(
      body: SafeArea(
        bottom: false,
        child: child,
      ),
    );
  }
}
