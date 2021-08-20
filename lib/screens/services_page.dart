import 'package:flutter/material.dart';
import 'package:q2/widgets/side_menu.dart';
import '../widgets/side_menu.dart';

class PeoplePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
        drawer: SideMenu(),
        appBar: AppBar(
          title: Text('Servizi'),
          centerTitle: true,
          backgroundColor: Colors.green,
        ),
      );
}
