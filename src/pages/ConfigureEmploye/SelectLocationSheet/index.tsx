import React, {useContext} from 'react';
import {Modal, Pressable, SafeAreaView, View} from 'react-native';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {HeaderBottomSheet} from '../../../components/2.Molecules/HeaderBottomSheet';
import {Button} from '../../../components/Button';
import MapView, {Marker} from 'react-native-maps';
import {styles} from './style';
import {analizingDirections} from '../../../utils/others';
import {colors} from '../../../constants/colors';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {API_KEY} from '../../../services/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelectLocationSheet} from './hooks';
import {Text} from 'react-native-paper';

export const SelectLocationSheet = ({
  isOpen,
  setIsOpen,
  address,
  setAddress,
}: any) => {
  const {theme} = useContext(ThemeContext);
  const {newCoords, regionAddress, setRegionAddress} = useSelectLocationSheet({
    isOpen,
    setIsOpen,
    address,
    setAddress,
  });

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setIsOpen(false)}>
      <View style={styles.container}>
        <Pressable onPress={() => setIsOpen(false)} style={styles.touchable} />
        <SafeAreaView
          style={{...styles.body, backgroundColor: theme.backgroundbottomShet}}>
          <HeaderBottomSheet
            title="Seleciona ubicacion del anuncio"
            setIsOpen={setIsOpen}
          />
          <View style={{alignItems: 'center', padding: 16}}>
            <GooglePlacesAutocomplete
              renderLeftButton={() => (
                <Icon
                  name="map-marker"
                  color={colors.primary.primary100}
                  size={30}
                />
              )}
              placeholder={'Ingresa una dirección'}
              fetchDetails={true}
              onPress={async (data, details = null) => {
                const jsonAdress = await analizingDirections(details);
                const dataJson = {
                  ...jsonAdress,
                  latitude: details?.geometry?.location.lat,
                  longitude: details?.geometry?.location.lng,
                  latitudeDelta: 0.01, // Ajustar basado en el radio
                  longitudeDelta: 0.01,
                };

                setRegionAddress(dataJson);
              }}
              query={{
                key: API_KEY,
                language: 'es',
              }}
              enablePoweredByContainer={false}
              suppressDefaultStyles={true}
              filterReverseGeocodingByTypes={[
                'locality',
                'administrative_area_level_3',
              ]}
              predefinedPlacesAlwaysVisible={true}
              numberOfLines={2}
              styles={{
                textInputContainer: {
                  borderRadius: 20,
                  paddingHorizontal: 7.5,
                  flexDirection: 'row',
                  alignItems: 'center',
                },
                textInput: {
                  height: 55,
                  color: theme.textColor,
                  fontSize: 15,
                  fontFamily: 'Poppins-SemiBold',
                  flex: 1,
                },
                container: {
                  backgroundColor: theme.backgroundColor,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: theme.neutral300,
                  overflow: 'hidden',
                  width: '100%',
                },
                predefinedPlacesDescription: {
                  color: colors.neutral.neutral300,
                },
                separator: {
                  height: 1,
                  backgroundColor: theme.neutral300,
                },
                row: {
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: theme.backgroundColor,
                  padding: 13,
                  height: 50,
                },
                description: {
                  fontFamily: 'Poppins-Light',
                  fontWeight: 'bold',
                  color: theme.textColor,
                },
              }}
            />
          </View>

          <View style={styles.flex1}>
            {regionAddress && (
              <MapView
                style={styles.flex1}
                initialRegion={regionAddress}
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
                  //   setNewLocation(regionChange);
                }}
                // onRegionChange={e => {
                //   setNewLocation(e);
                // }}
              >
                <Marker draggable coordinate={regionAddress} />
              </MapView>
            )}
          </View>
          <Text style={{padding: 8}} theme={theme} variant="titleMedium">
            {address?.street}
          </Text>
          <View
            style={{
              ...styles.containerInput,
              backgroundColor: theme.backgroundColor,
            }}>
            <Button
              type="primary"
              btnText={'Confirmar Ubicacion'}
              onPress={() => setIsOpen(false)}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
