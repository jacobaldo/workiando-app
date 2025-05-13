import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";

import Icon from "react-native-vector-icons/Feather";
import { colors } from "../../constants/colors";
import { ThemeContext } from "../../provider/ThemeProvider";
import Favorities from "../Favorites";
import Profile from "../Profile";
import RequestedEmployes from "../RequestedEmployes";
import Search from "../Search";
import { createStyles } from "./styles";

const Tab = createBottomTabNavigator();

export const HomeTabNavigator = ({ navigation }: any) => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        // paddingBottom: 56,
        backgroundColor: theme.backgroundColor,
      }}
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: { ...styles.tabContainer },
        tabBarLabelStyle: { ...styles.text },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.neutral.neutral200,
      })}
    >
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: "Buscar",

          tabBarIcon: ({ focused }) => (
            <Icon
              name="search"
              size={25}
              color={focused ? colors.white : colors.neutral.neutral200}
            />
          ),
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="RequestedEmployes"
        component={RequestedEmployes}
        options={{
          title: "Postulaciones",

          tabBarIcon: ({ focused }) => (
            <Icon
              name="check-circle"
              size={25}
              color={focused ? colors.white : colors.neutral.neutral200}
            />
          ),

          // header: () => null,
        }}
      />
      <Tab.Screen
        name="Favorities"
        component={Favorities}
        options={{
          title: "Favoritos",

          tabBarIcon: ({ focused }) => (
            <Icon
              name="heart"
              size={25}
              color={focused ? colors.white : colors.neutral.neutral200}
            />
          ),

          // header: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ userData: null, navigation: navigation }}
        options={{
          title: "Perfil",
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <Icon
              name="user"
              size={25}
              color={focused ? colors.white : colors.neutral.neutral200}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
