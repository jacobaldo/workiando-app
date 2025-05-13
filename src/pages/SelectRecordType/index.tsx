import {Image, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {SelectRecordTypeProps} from './types';
import {Typography} from '../../components/Typography';

const SelectRecordType = ({}: SelectRecordTypeProps) => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../assets/fondo.png')}
        style={styles.imageBackground}> */}
      <View style={styles.container1}>
        <Typography style={styles.text1} variant={{type: 'h4'}}>
          ¿ COMO FUNCIONA ?
        </Typography>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.headerImage}
        />
        {/* <Image
          source={require('../../assets/JOB2.png')}
          style={styles.jobImage}
        /> */}
        <Typography style={styles.text1} variant={{type: 'h5'}}>
          TUTORIAL POR PASOS
        </Typography>
      </View>
    </View>
  );
};

export default SelectRecordType;
