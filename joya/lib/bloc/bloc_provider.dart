import 'package:flutter/cupertino.dart';
import 'bloc.dart';

class BlocProvider<T extends Bloc> extends StatefulWidget {
  //Bloc en question
  final T bloc;

  //Child va s'occuper ce bloc
  final Widget child;

  //Constructeur
  BlocProvider({required this.bloc, required this.child});

  //valeur du Type
  static Type _providerType<T>() => T;

  //Configuer le bloc
  static T? of<T extends Bloc>(BuildContext context) {
    // final type = _providerType<BlocProvider<T>>();
    final BlocProvider<T>? provider = context.findAncestorWidgetOfExactType<BlocProvider<T>>() ;
    // final BlocProvider<T> provider = context.ancestorWidgetOfExactType(type);
    return provider?.bloc;
  }

  @override
  State createState() => _BlocProviderState();
}

class _BlocProviderState extends State<BlocProvider> {
  @override
  Widget build(BuildContext context) {
    return widget.child;
  }

  @override
  void dispose() {
    widget.bloc.dispose();
    super.dispose();
  }
}