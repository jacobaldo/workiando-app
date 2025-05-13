import React, {useContext} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import {analizingDirections} from '../../utils/others';
import {MyAppProps} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import {useLocationList} from './hooks';
import {ThemeContext} from '../../provider/ThemeProvider';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-paper';
import ToastController from '../../components/2.Molecules/ToastModal/ToastController';
import {API_KEY} from '../../services/api';

const {width} = Dimensions.get('window');
interface Props extends StackScreenProps<MyAppProps, 'LocationList'> {}
const LocationList = ({navigation}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {
    deleteUserLocation,
    confirmUserLocation,
    getByCurrentPosition,
    listAddresses,
    getLocation,
  } = useLocationList({navigation});

  const renderItem = (item: any) => {
    var address = item.item;
    const current = address.current;

    return (
      <View key={address.formatted_address} style={styles.item}>
        <View style={styles.iconItem}>
          <Icon
            name={current ? 'pin' : 'pin-outline'}
            color={
              current ? colors.primary.primary100 : colors.primary.primary60
            }
            size={26}
          />
        </View>
        <TouchableOpacity
          onPress={() => confirmUserLocation(address, item.index)}>
          <View style={{width: width - 155}}>
            <Text
              style={[
                styles.title,
                {
                  color: current
                    ? colors.primary.primary100
                    : colors.neutral.neutral400,
                },
              ]}>
              {address?.formatted_address}
            </Text>
            <Text
              style={[
                styles.subTitle,
                {
                  color: current
                    ? colors.primary.primary40
                    : colors.neutral.neutral400,
                },
              ]}>
              {address?.city} - {address?.country}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (current) {
              ToastController.showModal(
                'No se puede eliminar el seleccionado..',
                {type: 'info'},
                'top',
                true,
              );
            } else {
              deleteUserLocation(item.index);
            }
          }}>
          <View style={styles.deleteItem}>
            <Icon
              name={current ? 'delete-off' : 'delete'}
              color={
                current ? colors.primary.primary100 : colors.neutral.neutral400
              }
              size={26}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const itemSepartor = () => <View style={styles.separator} />;

  return (
    <View
      style={{
        ...styles.containerAdd,
        backgroundColor: theme.backgroundColor,
      }}>
      <GooglePlacesAutocomplete
        renderLeftButton={() => (
          <Icon name="map-marker" color={colors.primary.primary100} size={30} />
        )}
        placeholder="Ingresa una dirección"
        fetchDetails={true}
        onPress={async (data, details = null) => {
          const jsonAdress = await analizingDirections(details);
          const dataJson = {
            ...jsonAdress,
            latitude: details?.geometry?.location.lat,
            longitude: details?.geometry?.location.lng,
          };
          navigation.navigate('SelectLocation', {
            data: dataJson,
            navigation: navigation,
          });
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
      <TouchableOpacity
        style={styles.currentLocation}
        onPress={getByCurrentPosition}>
        <View
          style={[
            styles.cicleMap,
            //   {backgroundColor: isDark ? '#1b1b1b' : background},
          ]}>
          {getLocation ? (
            <ActivityIndicator
              animating={true}
              size={24}
              color={colors.primary.primary100}
            />
          ) : (
            <Icon
              name="navigation-variant"
              size={20}
              color={colors.primary.primary100}
            />
          )}
        </View>

        <Text style={styles.textUbicatios}>Ubicación Actual</Text>
      </TouchableOpacity>
      <FlatList
        data={listAddresses}
        renderItem={item => renderItem(item)}
        // keyExtractor={(address: any) => address?.index}
        ListEmptyComponent={
          <View>
            <LottieView
              source={require('../../assets/lottie/location.json')}
              resizeMode="contain"
              autoPlay
              loop
              style={styles.lottie}
            />
            <Text
              theme={theme}
              variant="bodyMedium"
              style={{textAlign: 'center'}}>
              Registra ubicacion donde desea encontrar trabajo
            </Text>
          </View>
        }
        ItemSeparatorComponent={itemSepartor}
      />
    </View>
  );
};

export default LocationList;
