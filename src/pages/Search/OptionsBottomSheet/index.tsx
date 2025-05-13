import React, {useContext} from 'react';
import {Props} from './types';
import {Modal, Pressable, SafeAreaView, View} from 'react-native';
import {styles} from './style';
import {Button} from '../../../components/Button';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {HeaderBottomSheet} from '../../../components/2.Molecules/HeaderBottomSheet';

export const OptionBottomSheet = ({
  isOpen,
  setIsOpen,
  handleSelectUser,
}: Props) => {
  const {theme} = useContext(ThemeContext);
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
          <HeaderBottomSheet title="¿QUÉ DESEAS?" setIsOpen={setIsOpen} />

          <View style={styles.btnOption}>
            <Button
              style={styles.buttomStyle}
              btnText={'BUSCAR CHAMBA'}
              type="primary"
              onPress={() => handleSelectUser(true)}
            />
            <Button
              style={styles.buttomStyle}
              btnText={'OFRECER CHAMBA'}
              type="secondary"
              onPress={() => handleSelectUser(false)}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
