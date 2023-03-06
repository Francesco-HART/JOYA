import 'package:flutter/cupertino.dart';
import 'package:joya/component/TextFieldComponent.dart';

class ErrorPage extends StatelessWidget {
  final bool debugShowCheckedModeBanner;
  final String errorMessage;
  final bool isIOSPlatform;

  ErrorPage(
      {required this.errorMessage,
      required this.debugShowCheckedModeBanner,
      required this.isIOSPlatform});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Text('test'),
    );
    // return ScaffoldComponent(
    //     enumerateCategoriesScaffold: EnumerateCategoriesScaffold.curvedBar,
    //     child: errorBody(),
    //     isIOSPlatform: isIOSPlatform,
    //     debugShowCheckedModeBanner: debugShowCheckedModeBanner
    // );
  }

  errorBody() {
    if (this.isIOSPlatform) {
      // TO DO
      return Text('TO DO');
    } else {
      return Container(
          // decoration: const BoxDecoration(
          //   color: Color(0xE5E5E5),
          //   image: DecorationImage(
          //       image: AssetImage('assets/images/error_window.png'),
          //       fit: BoxFit.fill,
          //       opacity: 0.3),
          // ),
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // BoxShadowComponent(
          //   text:
          //       'Data don\'t existed please activate your connection $errorMessage',
          //   isIOSPlatform: isIOSPlatform,
          //   numberOfError: 404,
          // ),
          // ButtonComponent(
          //   text : MainTextPalettes.textFr["INSCRIPTION"],
          //   enumerateCategoriesButton: EnumerateCategoriesButton.typeButtonTextAndIconRight,
          //   isIOSPlatform: isIOSPlatform,
          //   methode: null,
          //   colorBorder: MainColorPalettes.colorsThemeMultiple[5]!,
          //   backgroundColorButton: MainColorPalettes.colorsThemeMultiple[10]!,
          // )
          TextFieldComponent(
            hiddenText: false,
            methode: (test) => {},
            text: "DATA",
            isValid: true,
            isNotValidRenderText: 'test',
          )
        ],
      ));
    }
  }
}
