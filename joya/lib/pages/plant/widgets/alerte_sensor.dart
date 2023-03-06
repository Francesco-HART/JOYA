import 'package:flutter/material.dart';

class AlertSensors extends StatelessWidget {
  final Function resetSensors;

  const AlertSensors({Key? key, required this.resetSensors}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    void onPress() async {
      await this.resetSensors(context);
      Navigator.pop(context, 'Cancel');
    }

    return Center(
      child: TextButton(
        onPressed: () => showDialog<String>(
          context: context,
          builder: (BuildContext context) => AlertDialog(
            title: const Text('Voulez-vous supprimer votre capteur ?'),
            content: const Text('Attention vos données seront perdu'),
            actions: <Widget>[
              TextButton(
                onPressed: () => Navigator.pop(context, 'Cancel'),
                child: const Text('Annuler'),
              ),
              TextButton(
                onPressed: () async => {onPress()},
                child: const Text('Confirmer'),
              ),
            ],
          ),
        ),
        child: const Text('Suppression du capteur'),
      ),
    );
  }
}
