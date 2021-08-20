import 'package:flutter/material.dart';
import 'package:easy_dynamic_theme/easy_dynamic_theme.dart';
import '/utils/theme_data.dart';

import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import '/models/navigation_item.dart';
// import 'screens/favourites_page.dart';
import 'screens/home_page.dart';
import 'screens/people_page.dart';
import '/provider/navigation_provider.dart';

void main() {
  runApp(
    EasyDynamicThemeWidget(
      child: MyApp(),
    ),
  );
}

class MyApp extends StatefulWidget {
  // This widget is the root of your application.
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) => ChangeNotifierProvider(
        create: (context) => NavigationProvider(),
        child: MaterialApp(
          title: 'Q',
          theme: lightThemeData,
          darkTheme: darkThemeData,
          debugShowCheckedModeBanner: false,
          themeMode: EasyDynamicTheme.of(context).themeMode,
          home: MainPage(),
        ),
      );
}

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  @override
  Widget build(BuildContext context) => buildPages();

  Widget buildPages() {
    final provider = Provider.of<NavigationProvider>(context);
    final navigationItem = provider.navigationItem;

    switch (navigationItem) {
      case NavigationItem.home:
        return HomePage();
      case NavigationItem.people:
        return PeoplePage();
      // case NavigationItem.favourites:
      //   return FavouritesPage();
      // case NavigationItem.workflow:
      //   return WorkflowPage();
      // case NavigationItem.updates:
      //   return UpdatesPage();
      // case NavigationItem.plugins:
      //   return PluginsPage();
      // case NavigationItem.notifications:
      //   return NotificationsPage();
    }
  }
}
