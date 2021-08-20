import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../provider/navigation_provider.dart';
import '../models/navigation_item.dart';

class SideMenu extends StatelessWidget {
  const SideMenu({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          DrawerHeader(
            child: Image.asset("assets/images/logo.png"),
          ),
          DrawerListTile(
            title: "Home",
            svgSrc: "assets/icons/menu_dashbord.svg",
            press: () {
              selectItem(
                context,
                NavigationItem.home,
              );
            },
          ),
          // DrawerListTile(
          //   title: "Chi siamo",
          //   svgSrc: "assets/icons/menu_tran.svg",
          //   press: () {
          //     selectItem(
          //       context,
          //       NavigationItem.people,
          //     );
          //   },
          // ),
          DrawerListTile(
            title: "Obiettivi",
            svgSrc: "assets/icons/menu_task.svg",
            press: () {},
          ),
          DrawerListTile(
            title: "Metodo",
            svgSrc: "assets/icons/menu_doc.svg",
            press: () {},
          ),
          DrawerListTile(
            title: "Personale",
            svgSrc: "assets/icons/menu_store.svg",
            press: () {
              selectItem(
                context,
                NavigationItem.people,
              );
            },
          ),
          DrawerListTile(
            title: "Servizi",
            svgSrc: "assets/icons/menu_notification.svg",
            press: () {},
          ),
          DrawerListTile(
            title: "Contatti",
            svgSrc: "assets/icons/menu_profile.svg",
            press: () {},
          ),
          // DrawerListTile(
          //   title: "Settings",
          //   svgSrc: "assets/icons/menu_setting.svg",
          //   press: () {},
          // ),
        ],
      ),
    );
  }
}

class DrawerListTile extends StatelessWidget {
  const DrawerListTile({
    Key? key,
    // For selecting those three line once press "Command+D"
    required this.title,
    required this.svgSrc,
    required this.press,
  }) : super(key: key);

  final String title, svgSrc;
  final VoidCallback press;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      onTap: press,
      horizontalTitleGap: 0.0,
      leading: SvgPicture.asset(
        svgSrc,
        color: Theme.of(context).iconTheme.color,
        height: 16,
      ),
      title: Text(
        title,
        style: TextStyle(
          color: Theme.of(context).iconTheme.color,
        ),
      ),
    );
  }
}

void selectItem(BuildContext context, NavigationItem item) {
  final provider = Provider.of<NavigationProvider>(context, listen: false);
  provider.setNavigationItem(item);
}
