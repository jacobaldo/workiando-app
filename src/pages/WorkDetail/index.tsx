import React, {useContext} from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import {Typography} from '../../components/Typography';
import {styles} from './styles';
import {colors} from '../../constants/colors';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from '../../components/Button';
import {StackScreenProps} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {useWorkDetail} from './hooks';
import {numberWithCommas} from '../../utils/currency/currency.utils';
import {ThemeContext} from '../../provider/ThemeProvider';
import {hideEmail, hideAddress, hidePhoneNumber} from '../../utils/hide';
import {Linking} from 'react-native';
interface Props extends StackScreenProps<MyAppProps, 'WorkDetail'> {}
const WorkDetail = ({navigation, route}: Props) => {
  const {body} = route.params;
  const {theme} = useContext(ThemeContext);

  const {
    user,
    loading,
    refreshData,
    onPressApply,
    existingRequest,
    myWork,
    status,
  } = useWorkDetail({
    navigation,
    body,
  });

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => refreshData()}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.body}>
        <View style={styles.containerDetails}>
          <Typography
            style={{...styles.title, color: colors.quaternary.quaternary100}}>
            {body.title}
          </Typography>
          {existingRequest?.hasRequested && (
            <Typography
              variant={{type: 'caption'}}
              style={styles.existingRequest}>
              Solicitado
            </Typography>
          )}
        </View>
        <View style={styles.cardUser}>
          <View style={styles.containerLogo}>
            <Image
              resizeMode="contain"
              style={styles.imgPerfil}
              source={require('./../../assets/banner.png')}
            />
            <Rating
              imageSize={10}
              ratingCount={5}
              tintColor={theme.backgroundColor}
            />
          </View>
          <View style={styles.containerProfile}>
            <View style={styles.rowProfile}>
              <Icon
                name="user"
                size={15}
                color={colors.primary.primary100}
                style={styles.iconStyle}
              />
              <Typography
                variant={{
                  type: 'bodyP3',
                }}>{`${user?.name} ${user?.lastname}`}</Typography>
            </View>

            <View style={styles.rowProfile}>
              <Icon
                name="map-pin"
                size={15}
                color={colors.primary.primary100}
                style={styles.iconStyle}
              />
              <Typography
                variant={{
                  type: 'bodyP3',
                }}>
                {status === 'active'
                  ? body?.location?.address
                  : hideAddress(body?.location?.address)}
              </Typography>
            </View>
          </View>
        </View>

        <Typography style={styles.titleSection} variant={{type: 'bodyP2'}}>
          Informacion del empleo:
        </Typography>

        <View>
          <View style={styles.rowDescription}>
            <Icon
              name="dollar-sign"
              size={15}
              color={colors.secondary.secondary100}
              style={styles.iconStyle}
            />
            <Typography
              variant={{
                type: 'bodyP3',
              }}>
              Sueldo:
            </Typography>
          </View>
          <View
            style={{
              ...styles.cardInfomation,
              backgroundColor: theme.neutral50,
            }}>
            <Typography bold>{`S/ ${numberWithCommas(body.price)}`}</Typography>
          </View>

          <View style={styles.rowDescription}>
            <Icon
              name="dollar-sign"
              size={15}
              color={colors.secondary.secondary100}
              style={styles.iconStyle}
            />
            <Typography
              variant={{
                type: 'bodyP3',
              }}>
              Tipo de empleo:
            </Typography>
          </View>
          <View
            style={{
              ...styles.cardInfomation,
              backgroundColor: theme.neutral50,
            }}>
            <Typography bold>{body?.typeEmployeData?.name}</Typography>
          </View>
        </View>

        <Typography style={styles.titleSection} variant={{type: 'bodyP2'}}>
          Ubicación:
        </Typography>
        <View style={styles.rowDescription}>
          <Icon
            name="map-pin"
            size={15}
            color={colors.primary.primary100}
            style={styles.iconStyle}
          />
          <Typography
            variant={{
              type: 'bodyP3',
            }}>
            {status === 'active'
              ? body?.location?.address
              : hideAddress(body?.location?.address)}
          </Typography>
        </View>
        <Typography style={styles.titleSection} variant={{type: 'bodyP2'}}>
          Contacto:
        </Typography>
        <View style={styles.rowDescription}>
          <Icon
            name="phone"
            size={15}
            color={colors.secondary.secondary100}
            style={styles.iconStyle}
          />
          <View style={styles.rowDescription}>
            <Typography
              variant={{
                type: 'bodyP3',
              }}>
              {`+${user?.codeNumber ?? ''} ${
                status === 'active'
                  ? user?.number
                  : hidePhoneNumber(user?.number)
              }`}
            </Typography>
            <TouchableOpacity
              onPress={() => {
                if (status === 'active') {
                  Linking.openURL(`tel:${user?.number}`);
                }
              }}>
              <Typography
                style={styles.colorTexx}
                variant={{
                  type: 'bodyP3',
                }}>
                {status === 'active' && ' llamar'}
              </Typography>
            </TouchableOpacity>
          </View>
          {/* <Typography
            variant={{
              type: 'bodyP3',
            }}>
            {`+${user?.codeNumber ?? ''} ${
              status === 'active' ? user?.number : hidePhoneNumber(user?.number)
            }`}
          </Typography> */}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (status === 'active' && user?.email) {
              Linking.openURL(`mailto:${user.email}`);
            }
          }}
          style={styles.rowDescription}>
          <Icon
            name="mail"
            size={15}
            color={colors.secondary.secondary100}
            style={styles.iconStyle}
          />
          <Typography
            style={{
              color:
                status === 'active' ? colors.primary.primary100 : colors.black,
              textDecorationLine: status === 'active' ? 'underline' : 'none',
            }}
            variant={{
              type: 'bodyP3',
            }}>
            {`${status === 'active' ? user?.email : hideEmail(user?.email)}`}
          </Typography>
        </TouchableOpacity>
        <Typography style={styles.titleSection} variant={{type: 'bodyP2'}}>
          Descripción:
        </Typography>
        <Typography
          bold
          variant={{type: 'h6'}}
          style={{
            ...styles.description,
            color: colors.quaternary.quaternary100,
          }}>
          {body.title}:
        </Typography>
        <Typography
          bold
          variant={{type: 'bodyP2'}}
          style={{
            ...styles.description,
            color: colors.quaternary.quaternary100,
          }}>
          {body.description}
        </Typography>
      </ScrollView>
      {!myWork() && !existingRequest?.hasRequested && (
        <View style={styles.bottom}>
          <Button
            style={styles.btnStyle}
            btnText="Solicitar"
            type="primary"
            disabled={false}
            loading={false}
            onPress={onPressApply}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default WorkDetail;
