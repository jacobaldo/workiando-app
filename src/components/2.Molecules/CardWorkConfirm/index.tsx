import React from 'react';
import {View} from 'react-native';
import {Props} from './type';
import {styles} from './style';
import {numberWithCommas} from '../../../utils/currency/currency.utils';
import {dateFormatConcat} from '../../../utils/formatDate.util';
import {Avatar, Card, IconButton, Text} from 'react-native-paper';
import {useTheme} from '../../../provider/ThemeProvider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardWorkConfirm = ({onPress, item, style}: Props) => {
  const {theme} = useTheme();
  return (
    <Card
      theme={theme}
      style={[styles.cardStyle, style]}
      elevation={5}
      onPress={() => onPress(item)}>
      <Card.Title
        theme={theme}
        title={item?.position}
        subtitle={item?.description}
        titleStyle={{color: theme.colors.onBackground}}
        subtitleStyle={{color: theme.colors.onBackground}}
        left={props => (
          <Avatar.Image size={40} source={{uri: 'https://i.pravatar.cc/300'}} />
        )}
        right={props => (
          <IconButton {...props} icon="bookmark" onPress={() => {}} />
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
            {item?.formatted_address}
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
            {dateFormatConcat(new Date().toString())}
          </Text>
        </View>

        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          <Text
            style={{...styles.items, backgroundColor: theme.neutral300}}
            theme={theme}
            variant="labelSmall">
            {item?.typeEmploye}
          </Text>
          <Text
            style={{
              ...styles.items,
              backgroundColor: theme.neutral300,
              color: theme.colors.tertiary,
            }}
            theme={theme}
            variant="labelSmall">
            Presencial
          </Text>
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
            {`${item?.quantity} ${item?.quantity > 1 ? 'Vacantes' : 'Vacante'}`}
          </Text>
          <Text style={{color: theme.colors.primary}} variant="titleMedium">
            {Number(item?.salary) != 0 &&
              `S/ ${numberWithCommas(item?.salary)}/mes`}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};
export default CardWorkConfirm;
