import 'package:flutter/material.dart';

class ImageDetailView extends StatelessWidget {
  const ImageDetailView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height / 2,
      decoration: BoxDecoration(
        color: Color.fromRGBO(35, 162, 92, 1),
        borderRadius: BorderRadius.only(
            bottomLeft: Radius.circular(50),
            bottomRight: Radius.circular(50)),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 5,
            blurRadius: 7,
            offset:
            Offset(0, 3), // changes position of shadow
          ),
        ],
        image: DecorationImage(
          image: NetworkImage(
              "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"),
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}
