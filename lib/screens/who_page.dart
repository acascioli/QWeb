import 'package:flutter/material.dart';
import 'package:q2/widgets/side_menu.dart';
import '../widgets/side_menu.dart';

class PeoplePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) => Scaffold(
        drawer: SideMenu(),
        appBar: AppBar(
          title: Text('Chi siamo'),
          centerTitle: true,
          backgroundColor: Colors.green,
        ),
      );
}
