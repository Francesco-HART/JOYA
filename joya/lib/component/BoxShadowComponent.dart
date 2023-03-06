import 'package:flutter/material.dart';
import 'package:joya/styles/MainColorPalettes.dart';

class BoxShadowComponent extends StatelessWidget {
  final String text;
  final bool isIOSPlatform;
  final int numberOfError;

  BoxShadowComponent({
    required this.text,
    required this.isIOSPlatform,
    required this.numberOfError,
  });

  @override
  Widget build(BuildContext context) {
    if (isIOSPlatform) {
      return Container(
        child: Column(
          children: [
            SizedBox(
              height: 15,
            ),
            Center(
              child: RichText(
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: "Error $numberOfError :\n",
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.underline,
                          fontFamily: 'DMSans-Bold',
                          fontSize: MediaQuery.of(context).size.width / 15,
                          color: MainColorPalettes.colorsThemeMultiple[15]),
                    ),
                  ],
                ),
              ),
            ),
            Center(
              child: RichText(
                textAlign: TextAlign.center,
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: "$text",
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.none,
                          fontFamily: 'DMSans-Bold',
                          fontSize: MediaQuery.of(context).size.width / 20,
                          color: MainColorPalettes.colorsThemeMultiple[15]),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(
              height: 15,
            ),
          ],
        ),
        decoration: BoxDecoration(
          color: MainColorPalettes.colorsThemeMultiple[20],
          borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(10),
              topRight: Radius.circular(10),
              bottomLeft: Radius.circular(10),
              bottomRight: Radius.circular(10)),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 5,
              blurRadius: 7,
              offset: const Offset(0, 3), // changes position of shadow
            ),
          ],
        ),
      );
    } else {
      return Container(
        child: Column(
          children: [
            SizedBox(
              height: 15,
            ),
            Center(
              child: RichText(
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: "Error $numberOfError :\n",
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.underline,
                          fontFamily: 'DMSans-Bold',
                          fontSize: MediaQuery.of(context).size.width / 15,
                          color: MainColorPalettes.colorsThemeMultiple[15]),
                    ),
                  ],
                ),
              ),
            ),
            Center(
              child: RichText(
                textAlign: TextAlign.center,
                text: TextSpan(
                  children: [
                    TextSpan(
                      text: "$text",
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          decoration: TextDecoration.none,
                          fontFamily: 'DMSans-Bold',
                          fontSize: MediaQuery.of(context).size.width / 20,
                          color: MainColorPalettes.colorsThemeMultiple[15]),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(
              height: 15,
            ),
          ],
        ),
        decoration: BoxDecoration(
          color: MainColorPalettes.colorsThemeMultiple[20],
          borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(10),
              topRight: Radius.circular(10),
              bottomLeft: Radius.circular(10),
              bottomRight: Radius.circular(10)),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 5,
              blurRadius: 7,
              offset: const Offset(0, 3), // changes position of shadow
            ),
          ],
        ),
      );
    }
  }
}
