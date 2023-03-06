import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/common/utils/navigation.dart';
import 'package:joya/common/utils/snackbar.dart';
import 'package:joya/pages/login/cubit/login_cubit.dart';
import 'package:joya/pages/login/widgets/action_buttons.dart';
import 'package:joya/pages/login/widgets/login_form_fields.dart';
import 'package:joya/pages/sensors/cubit/sensors_page.dart';
import 'package:joya/ui/LoadingPage.dart';

class LoginView extends StatefulWidget {
  const LoginView({
    Key? key,
  }) : super(key: key);

  @override
  _LoginViewState createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  late StreamSubscription _intentDataStreamSubscription;

  @override
  void initState() {
    super.initState();
    context.read<LoginCubit>().getCurrentUser();
  }

  @override
  void dispose() {
    _intentDataStreamSubscription.cancel();
    super.dispose();
  }

  void updateUI(LoginState state) {
    debugPrint(state.runtimeType.toString());
    if (state is LoginSuccess) {
      navigationPushByName(context, SensorsPage.pageName);
    } else if (state is LoginError) {
      showWarningSnackbar(context, state.message);
    }
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async => false,
      child: Scaffold(
      key: _scaffoldKey,
      body: BlocConsumer<LoginCubit, LoginState>(
        listener: (context, state) {
          updateUI(state);
        },
        builder: (context, state) {
          return state is LoginInitial || state is LoginSuccess
              ? LoadingPage()
              : Scaffold(
                  resizeToAvoidBottomInset: true,
                  body: SafeArea(
                    child: Padding(
                      padding: EdgeInsets.all(0),
                      child: SingleChildScrollView(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: LoginFormFields(
                                email: context.read<LoginCubit>().email,
                                password: context.read<LoginCubit>().password,
                                isValidEmail:
                                    context.read<LoginCubit>().isValidEmail,
                                isValidPassword:
                                    context.read<LoginCubit>().isValidPassword,
                                setEmail: context.read<LoginCubit>().setEmail,
                                setPassword:
                                    context.read<LoginCubit>().setPassword,
                              ),
                            ),
                            ActionButtonsLogin(
                              loginState: state,
                              submit: context.read<LoginCubit>().login,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                );
        },
      ),
      ),
    );
  }
}
