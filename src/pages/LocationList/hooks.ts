import {useEffect, useState} from 'react';
import ToastController from '../../components/2.Molecules/ToastModal/ToastController';
import {LocationListProps} from './types';
import {useDispatch} from 'react-redux';
import {
  deleteAddressSelected,
  getListAddresses,
  saveAddressSelected,
  saveLocationUser,
} from '../../provider/AddressAsyncStore';
import {
  getAddress,
  getPosition,
  locationPermissions,
} from '../../utils/geolocation';
import {SaveInitAddress} from '../../redux/InitAddress/AddressAcction';

export const useLocationList = ({navigation}: LocationListProps) => {
  const [listAddresses, setListAddresses] = useState<any>([]);
  const [getLocation, setGetLocation] = useState(false);
  const dispatch = useDispatch();

  const getAddresses = async () => {
    const listAddressesLocal = await getListAddresses();
    setListAddresses(listAddressesLocal);
  };

  const getByCurrentPosition = async () => {
    const resLocation = await locationPermissions();
    if (resLocation === 'granted') {
      setGetLocation(true);
      getPosition(
        async position => {
          const address = await getAddress(position.coords);
          setGetLocation(false);

          if (address) {
            navigation.navigate('SelectLocation', {
              data: address,
              navigation: navigation,
            });
          }
        },
        error => {
          setGetLocation(false);

          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      ToastController.showModal(
        'Error en los permisos de ubicacion',
        {type: 'danger'},
        'top',
        true,
      );
    }
  };

  const confirmUserLocation = async (address: any, index: number) => {
    await saveLocationUser(address);
    await saveAddressSelected(index);
    dispatch(SaveInitAddress(address));
    navigation.goBack();
  };

  const deleteUserLocation = async (index: number) => {
    await deleteAddressSelected(index);
    getAddresses();
  };

  useEffect(() => {
    getAddresses();
  }, []);
  return {
    deleteUserLocation,
    confirmUserLocation,
    getByCurrentPosition,
    listAddresses,
    getLocation,
  };
};
