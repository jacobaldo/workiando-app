import {RESULTS, requestMultiple} from 'react-native-permissions';

export async function checkMultiplePermissions(permissions: any) {
  let isPermissionGranted = false;

  const statuses = await requestMultiple(permissions);
  for (var index in permissions) {
    if (statuses[permissions[index]] === RESULTS.GRANTED) {
      isPermissionGranted = true;
    } else {
      isPermissionGranted = false;
      break;
    }
  }
  return isPermissionGranted;
}
