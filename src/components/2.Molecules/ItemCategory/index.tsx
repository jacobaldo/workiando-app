import React from 'react';
import {Pressable} from 'react-native';
import {ItemCategoryProps} from './types';
import {Typography} from '../../Typography';
import {colors} from '../../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from './styles';

const ItemCategory = ({item, filter, onPress}: ItemCategoryProps) => {
  const select = filter && filter.some((data: any) => data === item._id);

  return (
    <Pressable
      onPress={() => onPress(item._id)}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.filterCard,
        borderColor: colors.primary.primary100,
        backgroundColor: select ? colors.primary.primary100 : 'transparent',
      }}>
      <Typography
        bold
        style={{color: select ? colors.white : colors.primary.primary100}}
        variant={{type: 'caption'}}>
        {item.name}
      </Typography>
      {select && <Icon name="x" color={colors.white} size={15} />}
    </Pressable>
  );
};
export default ItemCategory;
