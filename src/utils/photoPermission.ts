import {Alert, PermissionsAndroid, Platform} from 'react-native';

export const requestGalleryPermissions = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      const permissions = [PermissionsAndroid.PERMISSIONS.CAMERA];

      if (Platform.Version < 33) {
        permissions.push(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
      } else {
        permissions.push(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES);
      }

      const granted = await PermissionsAndroid.requestMultiple(permissions);
      console.log('Permisos concedidos:', granted);

      const allGranted = Object.values(granted).every(
        p => p === PermissionsAndroid.RESULTS.GRANTED,
      );

      if (!allGranted) {
        Alert.alert(
          'Permisos requeridos',
          'Se requieren permisos para acceder a la galería.',
        );
      }

      return allGranted;
    } catch (error) {
      console.warn('Error al solicitar permisos:', error);
      return false;
    }
  }

  return true;
};
