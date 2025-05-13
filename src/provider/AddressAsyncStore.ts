import AsyncStorage from '@react-native-async-storage/async-storage';
import {getStreetHomeCity} from '../utils/others';

export const getListAddresses = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@listAddresses');
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    //console.log(e);
  }
};
export const getLocationUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@locationUser');
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    //console.log(e);
  }
};
export const saveAddressSelected = async (indexSelected: number) => {
  try {
    let listAddresses = await getListAddresses();

    listAddresses = listAddresses.map((e: any, index: number) => ({
      ...e,
      current: index === indexSelected,
    }));

    const jsonValue = JSON.stringify(listAddresses);
    await AsyncStorage.setItem('@listAddresses', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
export const saveLocationUser = async (value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@locationUser', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
export const deleteAddressSelected = async (indexSelected: number) => {
  try {
    let listAddresses = await getListAddresses();

    listAddresses.splice(indexSelected, 1);

    const jsonValue = JSON.stringify(listAddresses);
    await AsyncStorage.setItem('@listAddresses', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
//Directions list
export const saveListAddresses = async (value: any, current?: boolean) => {
  try {
    let currentLocation = JSON.parse(JSON.stringify(value));
    currentLocation.current = current;
    let listAddresses = await getListAddresses();
    const isAddressExist = listAddresses.find(
      (e: any) => getStreetHomeCity(e) === getStreetHomeCity(currentLocation),
    );

    if (!isAddressExist) {
      listAddresses = listAddresses.map((e: any) => ({
        ...e,
        current: false,
      }));

      const newListAddresses = [...listAddresses, currentLocation];
      const jsonValue = JSON.stringify(newListAddresses);
      await AsyncStorage.setItem('@listAddresses', jsonValue);
    }
  } catch (e) {
    console.log(e);
  }
};
