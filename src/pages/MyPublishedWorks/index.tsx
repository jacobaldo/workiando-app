import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";
import { MyAppProps } from "../App/types";
import PublishedAll from "./PublishedAll";

interface Props extends StackScreenProps<MyAppProps, "MyPublishedWorks"> {}
const MyPublishedWorks = ({}: Props) => {
  const Tab = createMaterialTopTabNavigator();
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {
          backgroundColor: theme.backgroundColor, // Color de fondo del encabezado
        }, // Alinear el título al centro
        tabBarInactiveTintColor: theme.colors.inverseSurface,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: theme.primary100, // Cambia 'blue' por el color deseado
          height: 2, // Controla el grosor de la línea
        },
      }}
    >
      <Tab.Screen
        name="PublishedActive"
        component={PublishedAll}
        options={{
          tabBarLabel: "Registrados",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="file-document-edit-outline"
              color={color}
              size={25}
            />
          ),
        }}
        initialParams={{ type: "created" }}
      />

      <Tab.Screen
        name="PublishedApproved"
        component={PublishedAll}
        options={{
          tabBarLabel: "Activos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-clock"
              color={color}
              size={25}
            />
          ),
        }}
        initialParams={{ type: "approved" }}
      />
      <Tab.Screen
        name="PublishedExpired"
        component={PublishedAll}
        options={{
          tabBarLabel: "Vencidos",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clock-remove"
              color={color}
              size={25}
            />
          ),
        }}
        initialParams={{ type: "expired" }}
      />
      <Tab.Screen
        name="PublishedCompleted"
        component={PublishedAll}
        options={{
          tabBarLabel: "Contratados",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="tag" color={color} size={25} />
          ),
        }}
        initialParams={{ type: "completed" }}
      />
      <Tab.Screen
        name="PublishedFinished"
        component={PublishedAll}
        options={{
          tabBarLabel: "Finalizados",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wallet-travel"
              color={color}
              size={20}
            />
          ),
        }}
        initialParams={{ type: "finished" }}
      />
    </Tab.Navigator>
  );
};

export default MyPublishedWorks;
