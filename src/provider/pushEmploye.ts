import AsyncStorage from '@react-native-async-storage/async-storage';
import {bodyCreate} from '../pages/ConfigureEmploye/types';

export const getPushEmploye = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@pushEmploye');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    //console.log(e);
  }
};
export const setPushEmploye = async (value: bodyCreate) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@pushEmploye', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
export const removePushEmploye = async () => {
  try {
    await AsyncStorage.removeItem('@pushEmploye');
  } catch (e) {
    console.log(e);
  }
};
