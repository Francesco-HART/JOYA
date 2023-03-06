import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../../component/TextFieldComponent.dart';
import '../../../styles/MainColorPalettes.dart';
import '../../../styles/MainTextPalettes.dart';
import '../cubit/login_cubit.dart';

class LoginFormFields extends StatelessWidget {
  Function isValidEmail;
  Function isValidPassword;
  Function setEmail;
  Function setPassword;
  String email;
  String password;

  LoginFormFields({
    required this.isValidEmail,
    required this.isValidPassword,
    required this.setEmail,
    required this.setPassword,
    required this.email,
    required this.password,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(height: MediaQuery.of(context).size.height / 10),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
            '${MainTextPalettes.textFr["CONNEXION_BUTTON_DEFAULT_TEXTFIELD"]}',
            style: TextStyle(
                color: MainColorPalettes.colorsThemeMultiple[10],
                fontSize: 38,
                fontWeight: FontWeight.w600,
                fontFamily: 'DMSans-Bold.ttf'),
          ),
        ),
        SizedBox(height: MediaQuery.of(context).size.height / 25),
        Padding(
          padding: EdgeInsets.symmetric(vertical: 2, horizontal: 16),
          child: TextFieldComponent(
            initialValue: context.read<LoginCubit>().email,
            methode: (data) async {
              setEmail(data);
            },
            text: "${MainTextPalettes.textFr["EMAIL_LABEL_DEFAULT_TEXTFIELD"]}",
            //isValid: snapshot.data["isValidEmail"],
            isNotValidRenderText: "${MainTextPalettes.textFr["ERROR_EMAIL"]}",
            hiddenText: false,
            isValid: isValidEmail(),
          ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(vertical: 2, horizontal: 16),
          child: TextFieldComponent(
            initialValue: context.read<LoginCubit>().password,
            methode: (data) async {
              setPassword(data);
            },
            text:
            "${MainTextPalettes.textFr["PASSWORD_LABEL_DEFAULT_TEXTFIELD"]}",
            //isValid: snapshot.data["isValidEmail"],
            isNotValidRenderText:
            "${MainTextPalettes.textFr["ERROR_PASSWORD"]}",
            hiddenText: true,
            isValid: isValidPassword(),
          ),
        ),
      ],
    );
  }
}
