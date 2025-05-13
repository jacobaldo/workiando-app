import {useState} from 'react';
import {getAddress} from '../../../utils/geolocation';

export const useSelectLocationSheet = ({address, setAddress}: any) => {
  const [regionAddress, setRegionAddress] = useState({
    latitude: address?.latitude ?? 37.78825,
    longitude: address?.longitude ?? -122.4324,
    latitudeDelta: 0.01, // Ajustar basado en el radio
    longitudeDelta: 0.01,
  });

  async function newCoords(dataCoord: any) {
    const dataCoords = dataCoord.coordinate;
    const newAddress = await getAddress(dataCoords);
    newAddress && setAddress(newAddress);
  }
  return {newCoords, address, regionAddress, setRegionAddress};
};
