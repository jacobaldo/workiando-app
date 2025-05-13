import React, {useContext} from 'react';

import {Modal, Pressable, SafeAreaView, View} from 'react-native';
import {styles} from './style';
import {ThemeContext} from '../../../../../../provider/ThemeProvider';
import {HeaderBottomSheet} from '../../../../../../components/2.Molecules/HeaderBottomSheet';

import {EditSheetProps} from './types';
import {Button} from '../../../../../../components/Button';
import {InputField} from '../../../../../../components/InputField';
import {useEditSheet} from './hooks';
import {Typography} from '../../../../../../components/Typography';
import {Switch} from 'react-native';
import {Image} from 'react-native';

export const EditSheet = ({
  isOpen,
  setIsOpen,
  item,
  type,
  Refresh,
}: EditSheetProps) => {
  const {theme} = useContext(ThemeContext);
  const {formik, toggleSwitch, handleSelectImage, imageUri} = useEditSheet({
    item,
    setIsOpen,
    type,
    isOpen,
    Refresh,
  });
  const typeText = () => {
    switch (type) {
      case 'category':
        return 'Categoría';
      case 'typeEmploye':
        return 'Tipo de empleo';
      case 'membership':
        return 'Membresía';
      default:
        return 'Tipo desconocido';
    }
  };
  console.log('item', item);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setIsOpen(false)}>
      <View style={styles.container}>
        <Pressable onPress={() => setIsOpen(false)} style={styles.touchable} />
        <SafeAreaView
          style={{...styles.body, backgroundColor: theme.backgroundbottomShet}}>
          <HeaderBottomSheet
            title={`Editar ${item.name}`}
            setIsOpen={setIsOpen}
          />
          <View style={styles.register}>
            <InputField
              lastField
              label={`Ingrese ${typeText()}`}
              value={formik.values.name}
              onChange={formik.handleChange('name')}
              isError={!!formik.errors.name}
              errorValue={formik.errors.name}
            />
            {type === 'category' && (
              <View style={styles.containerImage}>
                {imageUri && (
                  <Image
                    source={{uri: imageUri}}
                    style={styles.image}
                    resizeMode="cover"
                  />
                )}
                <Button
                  style={{width: 170}}
                  type="primary"
                  btnText={`Elegir Imagen`}
                  onPress={handleSelectImage}
                />
              </View>
            )}
            {type === 'typeEmploye' && (
              <View style={styles.amount}>
                <Typography
                  variant={{type: 'bodyP3'}}>{`Pago calculable`}</Typography>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={
                    formik.values.calculableAmount ? '#f5dd4b' : '#f4f3f4'
                  }
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={formik.values.calculableAmount}
                />
              </View>
            )}
            <View style={styles.contButton}>
              <Button
                type="primary"
                btnText={'Actualizar'}
                onPress={formik.handleSubmit}
                disabled={!formik.isValid}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
