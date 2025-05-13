import React, {useContext} from 'react';

// import {StackScreenProps} from '@react-navigation/stack';
// import {MyAppProps} from '../App/types';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ThemeContext} from '../../provider/ThemeProvider';
import EmployeRequested from './EmployeRequested';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerScreenProps} from '@react-navigation/drawer';

// interface Props extends StackScreenProps<MyAppProps, 'RequestedEmployes'> {}
interface Props extends DrawerScreenProps<any, 'RequestedEmployes'> {}
const RequestedEmployes = ({}: Props) => {
  const Tab = createMaterialTopTabNavigator();
  const {theme} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.backgroundColor, // Color de fondo del encabezado
        }, // Alinear el título al centro
        tabBarInactiveTintColor: theme.colors.inverseSurface,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarIndicatorStyle: {
          backgroundColor: theme.primary100, // Cambia 'blue' por el color deseado
          height: 2, // Controla el grosor de la línea
        },
      }}>
      <Tab.Screen
        name="EmployeRequested"
        component={EmployeRequested}
        options={{
          tabBarLabel: 'Solicitado',
          tabBarIcon: ({color}) => (
            <Icons name="wallet-travel" color={color} size={20} />
          ),
        }}
        initialParams={{type: 'requested'}}
      />
      <Tab.Screen
        name="EmployeAcepted"
        component={EmployeRequested}
        options={{
          tabBarLabel: 'Aceptado',
          tabBarIcon: ({color}) => (
            <Icons name="wallet-travel" color={color} size={20} />
          ),
        }}
        initialParams={{type: 'accepted'}}
      />
      <Tab.Screen
        name="EmployeRejected"
        component={EmployeRequested}
        options={{
          tabBarLabel: 'Rechazado',
          tabBarIcon: ({color}) => (
            <Icons name="wallet-travel" color={color} size={20} />
          ),
        }}
        initialParams={{type: 'rejected'}}
      />
      {/* <Tab.Screen
        name="EmployeAcepted"
        component={EmployeAcepted}
        options={{tabBarLabel: 'Aceptado'}}
      />

      <Tab.Screen
        name="EmployeRejected"
        component={EmployeRejected}
        options={{tabBarLabel: 'Rechazado'}}
      /> */}
    </Tab.Navigator>
  );
};

export default RequestedEmployes;
