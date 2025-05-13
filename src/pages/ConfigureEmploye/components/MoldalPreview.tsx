import {View} from 'react-native';
import React from 'react';
import {Button} from '../../../components/Button';
import {Typography} from '../../../components/Typography';
import {ModalConfigureProps} from '../types';
import {useTheme} from '../../../provider/ThemeProvider';
import {createStyles} from '../styles';

const MoldalPreview = ({onPress, body}: ModalConfigureProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
  const renderTimes = (value: any) => {
    if (value === 'Chamba Fija') {
      return (
        <Typography style={styles.text5} variant={{type: 'bodyP1'}}>
          {'Horario \n' + body?.timeInitial} AM - {body?.timeFinal} PM
        </Typography>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.centeredView}>
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
              {body?.position}
            </Typography>
            <Typography style={styles.text1} variant={{type: 'h4'}}>
              S/ {body?.salary}
            </Typography>
            {renderTimes(body?.categorySelect)}
          </View>

          <Typography style={styles.text5} variant={{type: 'bodyP1'}}>
            {body?.address}
          </Typography>
        </View>
      </View>
      <View style={styles.ButtonModal}>
        <Button
          type="primary"
          btnText={'PUBLICAR'}
          style={styles.styleButtonModal}
          textStyle={styles.text1}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default MoldalPreview;
