import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Props} from './type';
import {styles} from './style';
import {numberWithCommas} from '../../../utils/currency/currency.utils';
import {dateFormatConcat} from '../../../utils/formatDate.util';
import {Avatar, Card, IconButton, Text} from 'react-native-paper';
import {useTheme} from '../../../provider/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {JobStatus} from '../../../utils/jobStatus';
import {hideAddress} from '../../../utils/hide';
import {colors} from '../../../constants/colors';

const CardWork = ({
  onPress,
  item,
  style,
  selected,
  isFavorite,
  handleToggleFavorite,
}: Props) => {
  const {theme} = useTheme();
  return (
    <Card
      theme={theme}
      style={{...styles.cardStyle, ...style}}
      elevation={5}
      mode={selected?._id === item._id ? 'outlined' : 'elevated'}
      onPress={() => onPress(item)}>
      <Card.Title
        theme={theme}
        title={item?.title}
        subtitle={item?.description}
        titleStyle={{color: theme.colors.onBackground}}
        subtitleStyle={{color: theme.colors.onBackground}}
        left={(props: any) => (
          <Avatar.Image
            theme={theme}
            {...props}
            size={40}
            source={require('../../../assets/banner.png')}
          />
        )}
        right={props => (
          <IconButton
            theme={theme}
            {...props}
            icon="bookmark"
            iconColor={
              isFavorite ? colors.primary.primary100 : colors.neutral.neutral200
            }
            onPress={() => {
              handleToggleFavorite(item);
            }}
          />
        )}
      />
      <Card.Content>
        <View style={{flexDirection: 'row'}}>
          <Icon
            name="map-marker-radius"
            size={20}
            color={theme.colors.primary}
          />
          <Text
            variant="labelSmall"
            numberOfLines={1}
            style={styles.colorText}
            theme={theme}>
            {hideAddress(item?.location?.address)}
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 8}}>
          <Icon
            color={theme.colors.secondary}
            name="clipboard-text-clock-outline"
            size={16}
          />
          <Text
            variant="labelSmall"
            numberOfLines={1}
            style={styles.colorText}
            theme={theme}>
            {dateFormatConcat(item?.createdAt.toString())}
          </Text>
        </View>

        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <View
            style={{
              ...styles.items,
              backgroundColor: theme.neutral50,
            }}>
            <Text theme={theme} variant="labelSmall">
              {item?.typeEmployeData?.name ?? JobStatus(item?.status)}
            </Text>
          </View>
          <View
            style={{
              ...styles.items,
              backgroundColor: theme.neutral50,
            }}>
            <Text
              style={{
                color: theme.colors.tertiary,
              }}
              theme={theme}
              variant="labelSmall">
              Presencial
            </Text>
          </View>
        </View>
        <View style={styles.bottomCard}>
          <Text
            theme={theme}
            style={{
              ...styles.items,
              // backgroundColor: theme.neutral300,
              color: theme.colors.secondary,
            }}
            variant="labelSmall">
            {`${item?.quantity ?? 1} ${
              item?.quantity > 1 ? 'Vacantes' : 'Vacante'
            }`}
          </Text>
          <Text style={{color: theme.colors.primary}} variant="titleMedium">
            {item?.price !== 0 && `S/ ${numberWithCommas(item?.price)}/mes`}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};
export default CardWork;
