import React, {useContext} from 'react';
import {MyAppProps} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SelectRecordType from '../SelectRecordType';
import ConfigureEmploye from '../ConfigureEmploye';
import TermsAndConditions from '../TermsAndConditions';
import PublishedSucces from '../PublishedSuccess';
import TypeEmployer from '../TypeEmployer';
import WorkDetail from '../WorkDetail';
import RegisteredWorks from './Drawer/Screens/ RegisteredWorks';
import AcceptedWorks from './Drawer/Screens/AcceptedJobs';
import MyPublishedWorks from '../MyPublishedWorks';
import DrawerNavigation from './Drawer/DrawerNavigation';
import {ThemeContext} from '../../provider/ThemeProvider';
import RequestedEmployes from '../RequestedEmployes';
import LocationList from '../LocationList';
import SelectLocation from '../SelectLocation';
import EditProfile from '../EditProfile';
import Profile from '../Profile';
import AdminUserAndWorks from './Drawer/Screens/AdminUsersAndWorks';
import CreateCategories from './Drawer/Screens/CreateCategories';
import ConfirmPayEmploye from '../ConfirmPayEmploye';
import SuscribeMembershipUser from '../SuscribeMembershipUser';
import JobsCategory from '../JobsCatagory';
import ProposalsReceived from '../ProposalsReceived';
import SelectPreferences from '../SelectPreferences';
import {useUser} from '../../provider/AuthProvider';

const Stack = createNativeStackNavigator<MyAppProps>();

const AuthRouter = () => {
  const {theme} = useContext(ThemeContext);
  const {
    authState: {user},
  } = useUser();

  return (
    <Stack.Navigator
      initialRouteName={
        user?.categoryIds && user?.categoryIds.length >= 3
          ? 'Home'
          : 'SelectPreferences'
      }
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: theme.backgroundColor, // Color de fondo del encabezado
        },
        headerTitleAlign: 'center', // Alinear el título al centro
        headerTintColor: theme.textColor, // Color del texto del encabezado
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SelectPreferences"
        component={SelectPreferences}
        initialParams={{type: 'create'}}
        options={({route}) => ({
          headerShown: route.params?.type === 'create' ? false : true,
          title: 'Selecciona tu Preferencia',
        })}
      />
      <Stack.Screen name="SelectRecordType" component={SelectRecordType} />
      <Stack.Screen
        name="ConfigureEmploye"
        component={ConfigureEmploye}
        options={{
          title: 'Registra tu anuncio',
        }}
      />
      <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Stack.Screen name="PublishedSucces" component={PublishedSucces} />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: 'Editar Perfil',
        }}
      />
      <Stack.Screen name="TypeEmployer" component={TypeEmployer} />
      <Stack.Screen
        name="SelectLocation"
        component={SelectLocation}
        options={{title: 'Elije la Dirección'}}
      />
      <Stack.Screen
        name="WorkDetail"
        component={WorkDetail}
        options={{
          title: 'Detalle del anuncio',
        }}
      />
      <Stack.Screen
        name="RegisteredWorks"
        component={RegisteredWorks}
        options={{
          title: 'Anuncios Registrados',
          // header: props => (
          //   <Appbar.Header>
          //     <Appbar.BackAction onPress={() => props.navigation.goBack()} />
          //     <Appbar.Content
          //       title="Anuncios Registrados"
          //       titleStyle={{fontSize: fontSizes.small}}
          //     />
          //     {/* <Appbar.Action icon="magnify" onPress={() => {}} />
          //     <Appbar.Action icon={'dots-horizontal'} onPress={() => {}} /> */}
          //   </Appbar.Header>
          // ),
        }}
      />
      <Stack.Screen
        name="ProposalsReceived"
        component={ProposalsReceived}
        options={() => ({
          title: 'Propuestas',
        })}
      />
      <Stack.Screen
        name="AcceptedWorks"
        component={AcceptedWorks}
        options={() => ({
          title: 'Anuncios Aceptados',
        })}
      />
      <Stack.Screen
        name="ConfirmPayEmploye"
        component={ConfirmPayEmploye}
        options={() => ({
          title: 'Selecciona Pago',
        })}
      />
      <Stack.Screen
        name="SuscribeMembershipUser"
        component={SuscribeMembershipUser}
        options={() => ({
          title: 'Selecciona tu Membresia',
        })}
      />
      <Stack.Screen
        name="AdminUserAndWorks"
        component={AdminUserAndWorks}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="RequestedEmployes"
        component={RequestedEmployes}
        options={{
          title: 'Mis Postulaciones',
        }}
      />
      <Stack.Screen
        name="MyPublishedWorks"
        component={MyPublishedWorks}
        options={{
          title: 'Mis Anuncios',
        }}
      />
      <Stack.Screen
        name="LocationList"
        component={LocationList}
        options={{
          title: 'Selecciona una ubicacion',
        }}
      />
      <Stack.Screen
        name="CreateCategories"
        component={CreateCategories}
        options={{
          title: 'Registrar',
        }}
      />
      <Stack.Screen
        name="JobsCategory"
        component={JobsCategory}
        options={({route}) => ({
          title: route.params?.nameCategory,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthRouter;
