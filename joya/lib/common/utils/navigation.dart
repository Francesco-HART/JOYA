import 'package:flutter/cupertino.dart';
import 'package:joya/common/variables.dart';
import 'package:url_launcher/url_launcher.dart';
//import 'package:url_launcher/url_launcher.dart';

void navigationPop(BuildContext context) {
  Navigator.pop(context);
}

void navigationPushByName(BuildContext context, String pathName) {
  Navigator.pushNamed(context, pathName);
}

void navigationPushByNameAndRemoveUntil(BuildContext context, String pathName) {
  Navigator.of(context)
      .pushNamedAndRemoveUntil(pathName, (Route<dynamic> route) => false);
}

void redirectToWebPage(String path) async {
  if (!await launchUrl(
    Uri(scheme: 'https', host: JOYA_HOST, path: path),
    mode: LaunchMode.externalApplication,
  )) {
    throw 'Could not launch $path';
  }
}
