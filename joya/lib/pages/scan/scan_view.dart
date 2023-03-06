import 'dart:developer';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:joya/common/utils/navigation.dart';
import 'package:joya/pages/scan/cubit/scan_cubit.dart';
import 'package:qr_code_scanner/qr_code_scanner.dart';

import '../../common/utils/snackbar.dart';
import '../../component/ButtonComponent.dart';
import '../../component/TextFieldComponent.dart';
import '../../data/enum/EnumerateCategoriesButton.dart';
import '../../styles/MainColorPalettes.dart';
import '../../styles/MainTextFieldPalettes.dart';
import '../../styles/MainTextPalettes.dart';
import '../sensors/cubit/sensors_page.dart';

class QrCodeScan extends StatefulWidget {
  const QrCodeScan({Key? key}) : super(key: key);

  @override
  _QrCodeScanState createState() => _QrCodeScanState();
}

class _QrCodeScanState extends State<QrCodeScan> with WidgetsBindingObserver {
  @override
  void reassemble() {
    super.reassemble();
    if (Platform.isAndroid) {
      context.read<ScanCubit>().controller!.pauseCamera();
    }
    context.read<ScanCubit>().controller!.resumeCamera();
  }

  updateUI(ScanState state) async {
    if (state is ScanSuccessScanQRCode) {
      context.read<ScanCubit>().fetchIfSensorExist(state.result);
    } else if (state is ScanError) {
      showWarningSnackbar(context, state.message);
    } else if (state is ScanSuccessSubmit) {
      context.read<ScanCubit>().disposeController();
      navigationPushByName(context, SensorsPage.pageName);
    } else if (state is ScanSuccessScanQRCodeAndVerifySensor) {}
  }

  @override
  void initState() {
    context.read<ScanCubit>().fetchPlants();
    super.initState();
    WidgetsBinding.instance?.addObserver(this);
  }

  void _onPermissionSet(BuildContext context, QRViewController ctrl, bool p) {
    log('${DateTime.now().toIso8601String()}_onPermissionSet $p');
    if (!p) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
            content:
                Text("Autorisez l’application à utiliser l'appareil photo")),
      );
    }
  }

  @override
  Widget build(BuildContext context) =>
      BlocConsumer<ScanCubit, ScanState>(listener: (context, state) {
        updateUI(state);
      }, builder: (context, state) {
        return SafeArea(
          child: Scaffold(
            body: Stack(
              alignment: Alignment.center,
              children: context.read<ScanCubit>().serialNumber.length > 0
                  ? <Widget>[buildForm(context, state)]
                  : <Widget>[
                      buildQrView(context, state),
                      Positioned(bottom: 15, child: buildResult())
                    ],
            ),
          ),
        );
      });

  Widget buildForm(BuildContext context, ScanState state) => Column(children: [
        Padding(
          padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          child: TextFieldComponent(
            // initialValue: context.read<ScanCubit>().name,
            methode: (data) async {
              setState(() {
                context.read<ScanCubit>().setName(data);
              });
            },
            text: context.read<ScanCubit>().name != ""
                ? context.read<ScanCubit>().name
                : "${MainTextPalettes.textFr["NAME_PLANT"]}",
            //isValid: snapshot.data["isValidEmail"],
            isNotValidRenderText: "",
            hiddenText: false,
            isValid: context.read<ScanCubit>().isValidPlantName(),
          ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          child: TextFieldComponent(
            // initialValue: context.read<ScanCubit>().location,
            methode: (data) async {
              context.read<ScanCubit>().setLocation(data);
            },
            text: context.read<ScanCubit>().location != ""
                ? context.read<ScanCubit>().location
                : "${MainTextPalettes.textFr["LOCALISATION_PLANT"]}",
            //isValid: snapshot.data["isValidEmail"],
            isNotValidRenderText: "",
            hiddenText: false,
            isValid: true,
          ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          child: context.read<ScanCubit>().plants.length >= 1
              ? Container(
            height: 60,
            decoration: BoxDecoration(
              border: Border.all(width: 1.0,
                  color: Colors.grey),
borderRadius: BorderRadius.all(Radius.circular(
    MainTextFieldPalettes.simpleTextfield["RADIUS"]))),
                child: DropdownButton<String>(
                    value: context.read<ScanCubit>().plantID,
                    isExpanded: true,
                    underline: Container(),
                    borderRadius: BorderRadius.all(Radius.circular(
                        MainTextFieldPalettes.simpleTextfield["RADIUS"])),
                    onChanged: (String? newValue) {
                      setState(() {
                        context
                            .read<ScanCubit>()
                            .setPlantID(newValue != null ? newValue : "");
                      });
                    },
                    items: [
                        DropdownMenuItem(
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 12.0),
                            child: Text(
                              "Sélectionner le type de la plante",
                              style: TextStyle(
                                fontWeight: FontWeight.normal,
                                decoration: TextDecoration.none,
                                fontFamily: 'DMSans-Regular',
                                fontSize: MediaQuery.of(context).size.width / 20,
                                color: MainColorPalettes.colorsThemeMultiple[20]!,
                              ),),
                          ),
                          value: "",
                        ),
                        ...context.read<ScanCubit>().getPlantItemsDropDown()
                      ]),
              )
              : const CircularProgressIndicator(
                  strokeWidth: 1.5,
                ),
        ),
        Padding(
          padding: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
          child: state is ScanLoadingSubmit
              ? const CircularProgressIndicator(
                  strokeWidth: 1.5,
                )
              : ButtonComponent(
                  text: MainTextPalettes.textFr["VALIDER"],
                  enumerateCategoriesButton:
                      EnumerateCategoriesButton.typeButtonTextOnly,
                  isIOSPlatform: false,
                  methode: () async {
                    context.read<ScanCubit>().submit();
                  },
                  colorBorder: MainColorPalettes.colorsThemeMultiple[10]!,
                  backgroundColorButton:
                      MainColorPalettes.colorsThemeMultiple[10]!,
                ),
        )
      ]);

  Widget buildQrView(BuildContext context, ScanState state) =>
      state is ScanLoading
          ? Container(
              color: Colors.black,
            )
          : QRView(
              onPermissionSet: (ctrl, p) => _onPermissionSet(context, ctrl, p),
              key: context.read<ScanCubit>().qrKey,
              onQRViewCreated: context.read<ScanCubit>().onScanQRCode,
              overlay: QrScannerOverlayShape(
                borderColor: Theme.of(context).highlightColor,
                borderRadius: 10,
                borderLength: 20,
                borderWidth: 10,
                cutOutSize: MediaQuery.of(context).size.width * 0.8,
              ),
            );

  Widget buildResult() => Container(
        padding: EdgeInsets.all(12),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8), color: Colors.white24),
        child: Center(
          child: Text(context.read<ScanCubit>().serialNumber.length > 0
              ? context.read<ScanCubit>().serialNumber
              : '${MainTextPalettes.textFr["SCAN_QRCODE"]}'),
        ),
      );

  @override
  void dispose() {
    super.dispose();
  }
}
