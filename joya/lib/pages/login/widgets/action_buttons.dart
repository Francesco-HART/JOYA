import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:joya/ui/LoadingPage.dart';
import '../../../component/ButtonComponent.dart';
import '../../../data/enum/EnumerateCategoriesButton.dart';
import '../../../styles/MainColorPalettes.dart';
import '../../../styles/MainTextPalettes.dart';
import '../cubit/login_cubit.dart';

class ActionButtonsLogin extends StatelessWidget {
  Function submit;
  LoginState loginState;
  ActionButtonsLogin(
      {required this.submit, required LoginState this.loginState});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        loginState is LoginLoadingSubmit
            ? LoadingPage()
            : ButtonComponent(
                text: MainTextPalettes
                    .textFr["CONNEXION_BUTTON_DEFAULT_TEXTFIELD"],
                enumerateCategoriesButton:
                    EnumerateCategoriesButton.typeButtonTextOnly,
                isIOSPlatform: false,
                methode: () async {
                  submit();
                },
                colorBorder: MainColorPalettes.colorsThemeMultiple[10]!,
                backgroundColorButton:
                    MainColorPalettes.colorsThemeMultiple[10]!,
              ),
        SizedBox(height: MediaQuery.of(context).size.height / 15),
        Center(
          child: RichText(
            textAlign: TextAlign.center,
            text: TextSpan(
              children: [
                TextSpan(
                  text: "\n${MainTextPalettes.textFr["RECUP"]}",
                  style: TextStyle(
                      fontFamily: "DMSans-Regular",
                      fontSize: 15,
                      color: MainColorPalettes.colorsThemeMultiple[10]),
                  recognizer: TapGestureRecognizer()
                    ..onTap = () {
                      Navigator.pushNamed(context, 'about');
                    },
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}
