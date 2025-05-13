import React, {useContext} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import MapView, {Circle, Marker} from 'react-native-maps';
import {MyAppProps} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from '../../components/Button';
import {ThemeContext} from '../../provider/ThemeProvider';
import {InputField} from '../../components/InputField';
import useSelectLocation from './hooks';
import {Text} from 'react-native-paper';
import Slider from '@react-native-community/slider';
interface Props extends StackScreenProps<MyAppProps, 'SelectLocation'> {}
const SelectLocation = ({navigation, route}: Props) => {
  const {data} = route.params;
  const {theme} = useContext(ThemeContext);
  const {
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
  } = useSelectLocation({data, navigation});

  return (
    <View style={styles.flex1}>
      {data && (
        <MapView
          style={styles.flex1}
          // initialRegion={regionAddress}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          region={regionAddress}
          toolbarEnabled={false}
          onRegionChangeComplete={(regionChange: any) => {
            newCoords({
              coordinate: {
                longitude: regionChange.longitude,
                latitude: regionChange.latitude,
              },
            });
            setRegionAddress(regionChange);
            setNewLocation(regionChange);
          }}
          onRegionChange={e => {
            setNewLocation(e);
          }}>
          <Marker
            coordinate={newLocation}
            // onDragEnd={e => newCoords(e.nativeEvent, true)}
          >
            {/* <Image
              source={require('../../../../assets/marker-keola.png')}
              style={{height: 70, width: 70}}
              resizeMode="contain"
            /> */}
          </Marker>
          <Circle
            center={newLocation}
            radius={radius}
            strokeColor="rgba(0, 112, 255, 0.5)"
            fillColor="rgba(0, 112, 255, 0.2)"
          />
        </MapView>
      )}
      <View
        style={{
          ...styles.containerInput,
          backgroundColor: theme.backgroundColor,
        }}>
        <View style={styles.container_input}>
          <InputField value={textAddress} editable={false} label="Dirección" />
        </View>

        <View style={styles.container_input}>
          <InputField
            value={textCountry}
            onChange={e => setAddress(e)}
            editable={false}
            label="Ciudad"
          />
        </View>

        <View style={styles.container_input}>
          <InputField
            value={textCountry}
            onChange={e => setReference(e)}
            label="Casa/Apto (Referencias)"
            placeholder="Escribe el número de la casa o apartamento"
          />
        </View>

        <View style={styles.kmstyle}>
          <Slider
            style={{width: '90%', height: 50}}
            minimumValue={1000}
            maximumValue={50000}
            step={1000}
            value={radius}
            onValueChange={value => setRadius(value)}
            minimumTrackTintColor={theme.primary100}
            maximumTrackTintColor={theme.textColor}
            thumbTintColor={theme.primary100}
          />
          <Text theme={theme}>{radius / 1000} Km</Text>
        </View>

        <Button
          type="primary"
          btnText={loading ? 'VERIFICANDO...' : 'Confirmar Ubicacion'}
          onPress={confirmDir}
          loading={loading}
        />
      </View>
    </View>
  );
};
export default SelectLocation;
