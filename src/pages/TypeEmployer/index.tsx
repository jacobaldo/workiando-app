import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {TypeEmployerProps} from './types';
import {Typography} from '../../components/Typography';
import {styles} from './styles';
const TypeEmployer = ({navigation}: TypeEmployerProps) => {
  console.log('log', navigation);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground
        source={require('../../assets/fondo.png')}
        style={styles.imageBackground}> */}
      <View style={styles.container1}>
        <View style={styles.headerContainer}>
          <Typography style={styles.titleFija}>
            {' '}
            POR QUE SER UN CHAMBERO TOP?{' '}
          </Typography>
        </View>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.headerImage}
        />
        {/* <Image
          source={require('../../assets/JOB2.png')}
          style={styles.jobImage}
        /> */}
        <Typography style={styles.text1} variant={{type: 'h5'}}>
          TEXTO DE VENTA
        </Typography>
      </View>
    </SafeAreaView>
  );
};

export default TypeEmployer;
