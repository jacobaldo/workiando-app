import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {Typography} from '../../../../../../components/Typography';
import {EditProps} from './types';
import Icon from 'react-native-vector-icons/Feather';
import {ThemeContext} from '../../../../../../provider/ThemeProvider';
import {colors} from '../../../../../../constants/colors';
const EditItem = ({item, onPress}: EditProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.itemContainer,
        backgroundColor: theme.neutral50,
      }}>
      <Typography>{item?.name}</Typography>
      <TouchableOpacity onPress={() => onPress(item)}>
        <Icon name="edit-2" size={20} color={colors.primary.primary100} />
      </TouchableOpacity>
    </View>
  );
};

export default EditItem;
