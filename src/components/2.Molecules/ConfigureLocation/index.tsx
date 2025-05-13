import React from 'react';
import {Pressable} from 'react-native';
import {Typography} from '../../Typography';
import {styles} from './style';

const ConfigureLocation = ({navigation}: any) => {
  const navigationSelectLocation = () => {
    navigation.navigate('SelectLocation');
  };
  return (
    <Pressable
      onPress={navigationSelectLocation}
      style={styles.selectUbication}>
      <Typography bold variant={{type: 'body2'}}>
        av progreso s/n
      </Typography>
    </Pressable>
  );
};
export default ConfigureLocation;
