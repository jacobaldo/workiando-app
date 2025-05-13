// import React, {useContext} from 'react';
// import {MyAppProps} from './types';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from '../Login';
// import Register from '../Register';
// import {ThemeContext} from '../../provider/ThemeProvider';

// const Stack = createNativeStackNavigator<MyAppProps>();

// const CommonRouter = () => {
//   const {theme} = useContext(ThemeContext);
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         // headerShown: false,
//         headerStyle: {
//           backgroundColor: theme.backgroundColor,
//         },
//         headerTitleAlign: 'center',
//         headerTintColor: theme.textColor,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//       initialRouteName={'Login'}>
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{header: () => null}}
//       />
//       <Stack.Screen
//         name="Register"
//         component={Register}
//         options={{
//           title: 'LLENA TUS DATOS',
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default CommonRouter;

import React, {useEffect, useState, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../Login';
import Register from '../Register';
import {ThemeContext} from '../../provider/ThemeProvider';
import {MyAppProps} from './types';
import Onboarding from '../Onboarding';

const Stack = createNativeStackNavigator<MyAppProps>();

const CommonRouter = () => {
  const {theme} = useContext(ThemeContext);
  const [initialRoute, setInitialRoute] = useState<MyAppProps | null>(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await AsyncStorage.getItem('onboardingCompleted');
      setInitialRoute(completed === 'true' ? 'Login' : 'Onboarding');
    };
    checkOnboarding();
  }, []);

  if (!initialRoute) return null; // o un splash loader

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: theme.backgroundColor},
        headerTitleAlign: 'center',
        headerTintColor: theme.textColor,
        headerTitleStyle: {fontWeight: 'bold'},
      }}
      initialRouteName={initialRoute}>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{header: () => null}}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{title: 'LLENA TUS DATOS'}}
      />
    </Stack.Navigator>
  );
};

export default CommonRouter;
