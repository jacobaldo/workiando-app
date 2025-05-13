import React, {useContext} from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './styles';
import {ThemeContext} from '../../../provider/ThemeProvider';
import Icon from 'react-native-vector-icons/Feather';
import {Typography} from '../../Typography';
import {HeaderBottom} from './type';

export const HeaderBottomSheet = ({setIsOpen, title}: HeaderBottom) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View>
      <View style={styles.bottomHandle}>
        <Icon color={theme.textColor} name="minus" size={40} />
      </View>
      <View style={styles.header}>
        <Typography bold variant={{type: 'body3'}} style={styles.title}>
          {title}
        </Typography>
        <Pressable onPress={() => setIsOpen(false)}>
          <Icon color={theme.textColor} name="x" size={20} />
        </Pressable>
      </View>
    </View>
  );
};
