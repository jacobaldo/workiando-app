import {useEffect, useState} from 'react';
import {SelectLocationProps} from './types';
import {getAddress} from '../../utils/geolocation';
import {
  saveListAddresses,
  saveLocationUser,
} from '../../provider/AddressAsyncStore';
import {SaveInitAddress} from '../../redux/InitAddress/AddressAcction';
import {useDispatch} from 'react-redux';

const useSelectLocation = ({navigation, data}: SelectLocationProps) => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(data);
  const [newLocation, setNewLocation] = useState(data);
  const [textAddress, setTextAddress] = useState('');
  const [textCountry, setTextCountry] = useState('');
  const [reference, setReference] = useState('');
  const [radius, setRadius] = useState(10000);
  const dispatch = useDispatch();
  const [regionAddress, setRegionAddress] = useState({
    latitude: data?.latitude || 37.78825,
    longitude: data?.longitude || -122.4324,
    latitudeDelta: (radius / 111320) * 2.2, // Ajustar basado en el radio
    longitudeDelta: (radius / 111320) * 2.2,
  });
  useEffect(() => {
    setRegionAddress({
      ...regionAddress,
      latitudeDelta: (radius / 111320) * 2.2, // Ajustar basado en el radio
      longitudeDelta: (radius / 111320) * 2.2,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radius]);
  // const regionAddress: Region = {
  //   latitude: data?.latitude,
  //   longitude: data?.longitude,
  //   // latitudeDelta: 0.03,
  //   // longitudeDelta: 0.03,
  //   latitudeDelta: radius / 111320, // Aproximadamente 111,320 metros por grado de latitud
  //   longitudeDelta:
  //     radius / (111320 * Math.cos(newLocation.latitude * (Math.PI / 180))),
  // };
  useEffect(() => {
    const {home, street, city, region} = address;
    //const aux1 = (home && street) ? street + " " + home + ", " + city : (!!street) ? street + ", " + city : city;
    const aux1 = home && street ? street + ' ' + home : street ? street : city;
    setTextAddress(aux1);
    setTextCountry(city + ', ' + region /* + ", " + country */);
  }, [address]);

  async function newCoords(dataCoord: any) {
    const dataCoords = dataCoord.coordinate;
    const newAddress = await getAddress(dataCoords);
    newAddress && setAddress(newAddress);
  }
  async function confirmDir() {
    setLoading(true);
    let currentLocation = JSON.parse(JSON.stringify(address));
    currentLocation.reference = reference;
    const body = {...currentLocation, radio: radius / 1000};
    await saveListAddresses(body, true);
    dispatch(SaveInitAddress(body));
    await saveLocationUser(body);
    setLoading(false);
    navigation.reset;
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  return {
    confirmDir,
    newCoords,
    regionAddress,
    setNewLocation,
    loading,
    newLocation,
    textAddress,
    textCountry,
    setReference,
    setAddress,
    radius,
    setRadius,
    setRegionAddress,
  };
};
export default useSelectLocation;
