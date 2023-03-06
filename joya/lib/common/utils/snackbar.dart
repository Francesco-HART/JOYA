import 'package:flutter/material.dart';

import '../../styles/MainColorPalettes.dart';

void showSuccessSnackbar(context, String message) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      backgroundColor: MainColorPalettes.colorsThemeMultiple[10],
      content: Text(
        message,
        style: const TextStyle(color: Colors.white),
      ),
    ),
  );
}

void showErrorSnackbar(context, String message) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      backgroundColor: Colors.red,
      content: Text(
        message,
        style: const TextStyle(color: Colors.white),
      ),
      duration: const Duration(milliseconds: 1500),
    ),
  );
}

void showWarningSnackbar(context, String message) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      backgroundColor: Colors.orange,
      content: Text(
        message,
        style: const TextStyle(color: Colors.white),
      ),
    ),
  );
}
