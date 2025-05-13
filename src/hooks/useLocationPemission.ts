import {useState, useEffect, useCallback} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import {PERMISSIONS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import {checkMultiplePermissions} from './useRequestPemission';

export const useCurrentLocation = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const getCurrentPosition = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      },
      _ => {},
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const requestLocationPermission = useCallback(async () => {
    const permissions =
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
        : [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION];

    const isPermissionGranted = await checkMultiplePermissions(permissions);
    if (!isPermissionGranted) {
      Alert.alert(
        'Activar Permisos!',
        'Por Favor conceda los permisos de GPS',
        [
          {
            text: 'ir a permisos',
            onPress: () => {
              Linking.openSettings();
            },
          },
          {
            text: 'Cancelar',
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    } else {
      getCurrentPosition();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    latitude,
    longitude,
    setLongitude,
    setLatitude,
    requestLocationPermission,
  };
};
