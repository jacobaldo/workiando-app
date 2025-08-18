import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { colors } from "../../../constants/colors";
import { ThemeContext } from "../../../provider/ThemeProvider";
import { HomeTabNavigator } from "../HomeTabNavigator";
import DrawerContent from "./Content/DrawerContent";
import HeaderDrawer from "./Header/HeaderDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      drawerContent={(pr) => <DrawerContent {...pr} />}
      screenOptions={{
        headerTitleAlign: "center",
        headerTitle: HeaderDrawer,
        headerTintColor: theme.textColor,
        // headerRight: MenuDrawer,
        headerStyle: {
          backgroundColor: theme.backgroundColor,
        },
        drawerLabelStyle: {
          marginLeft: 0,
          fontWeight: "bold",
          color: theme.backgroundColor,
        },
        drawerActiveBackgroundColor: colors.primary.primary100,
      }}
    >
      <Drawer.Screen name="HomeApp" component={HomeTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
