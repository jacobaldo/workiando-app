import {View, Image} from 'react-native';
import React from 'react';
import {Typography} from '../../components/Typography';
import {Button} from '../../components/Button';
import styles from './styles';

const PublishedSucces = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require('../../assets/fondo.png')}
        style={styles.imageBackground}> */}
      <View style={styles.container1}>
        <Typography style={styles.text3} variant={{type: 'h4'}}>
          TU ANUNCIO FUE PUBLICADO CON EXITO
        </Typography>
        <View style={styles.modalView}>
          <View style={styles.warning}>
            <View style={styles.warning1}>
              <Typography style={styles.text1} variant={{type: 'body1'}}>
                SE REQUIERE
              </Typography>
              <Typography
                numberOfLines={2}
                style={styles.text1}
                variant={{type: 'h4'}}>
                MAESTRO PANADERO
              </Typography>
              <Typography style={styles.text1} variant={{type: 'h4'}}>
                s/1000 - s/1500
              </Typography>
            </View>

            <Typography style={styles.text5} variant={{type: 'bodyP1'}}>
              Lima, Lima Santa Anita
            </Typography>
          </View>
        </View>
        <View style={styles.cardCheckBox}>
          <Typography style={styles.text3} variant={{type: 'body1'}}>
            Reviza nuestro catalogo de chambero top..
          </Typography>
        </View>
        <Button
          type="primary"
          btnText={'VER AQUI'}
          style={styles.styleButton}
          // onPress={() => navigation.navigate('PublishedSucces')}
        />
      </View>
      <Image
        source={require('../../assets/banner.png')}
        style={styles.imageType}
      />
      {/* </ImageBackground> */}
    </View>
  );
};

export default PublishedSucces;
