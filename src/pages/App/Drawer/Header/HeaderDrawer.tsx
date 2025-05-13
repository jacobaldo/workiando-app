import React from 'react';
import {Image} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

const HeaderDrawer = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Image
        resizeMode="contain"
        source={require('../../../../assets/banner.png')}
        style={styles.headerImage}
      />
    </SafeAreaView>
  );
};

export default HeaderDrawer;
