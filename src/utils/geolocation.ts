import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {analizingDirections} from './others';

export const locationPermissions = async () => {
  if (Platform.OS === 'ios') {
    return Geolocation.requestAuthorization('whenInUse')
      .then(status => {
        return status;
      })
      .catch(error => {
        console.error('Error al solicitar permisos de ubicación:', error);
      });
  }

  if (Platform.OS === 'android') {
    const res = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return res;
  }
};
export const getPosition = Geolocation.getCurrentPosition;

export const getAddress = async ({latitude, longitude}: any) => {
  try {
    const json = await Geocoder.from(latitude, longitude); // TO-REVIEW: disabled temporarily
    let addressComponent = json; // TO-REVIEW: disabled temporarily
    const result1 = addressComponent.results[0]; // TO-REVIEW: disabled temporarily
    const result2 = addressComponent.results[1]; // TO-REVIEW: disabled temporarily
    const result3 = addressComponent.results[2]; // TO-REVIEW: disabled temporarily

    let address1 = analizingDirections(result1); // TO-REVIEW: disabled temporarily
    let address2 = analizingDirections(result2); // TO-REVIEW: disabled temporarily
    let address3 = analizingDirections(result3); // TO-REVIEW: disabled temporarily
    let addressFinal = {}; // TO-REVIEW: disabled temporarily
    if (!!address1.city && !!address1.street) {
      addressFinal = address1;
    } else if (!!address2.city && !!address2.street) {
      addressFinal = address2;
    } else if (!!address3.city && !!address3.street) {
      addressFinal = address3;
    } else if (address1.city) {
      addressFinal = address1;
    } else if (address2.city) {
      addressFinal = address2;
    } else if (address3.city) {
      addressFinal = address3;
    } else {
      addressFinal = address1;
    }
    return {
      ...addressFinal, // TO-REVIEW: disabled temporarily
      latitude,
      longitude,
    };
  } catch (error) {
    console.warn(error);
    return {
      home: '',
      street: 'Av Victor A. Belaunde',
      city: 'San Isidro',
      region: 'Lima',
      country: 'Peru',
      country_code: 'PE',
      postal_code: '51',
      formatted_address: 'Av Victor A. Belaunde, San Isidro, Lima, Peru',
      latitude: -12.096388,
      longitude: -77.035987,
    };
  }
};
