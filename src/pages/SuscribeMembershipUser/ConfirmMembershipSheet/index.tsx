import React, {useContext} from 'react';
import {ConfirmProps} from './types';
import {styles} from './style';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {HeaderBottomSheet} from '../../../components/2.Molecules/HeaderBottomSheet';

import useConfirmMembershipSheet from './hooks';
import {Image, Modal, Pressable, SafeAreaView, View} from 'react-native';
import {Button, Card, Checkbox, RadioButton, Text} from 'react-native-paper';
import {spacings} from '../../../constants/spacings';

export const ConfirmMembershipSheet = ({
  isOpenFilter,
  setIsOpenFilter,
  membership,
  navigation,
}: ConfirmProps) => {
  const {
    sendWhatsAppMessage,
    loading,
    payMetod,
    setPayMetod,
    termCondition,
    setTermCondition,
    navigateTerm,
  } = useConfirmMembershipSheet({
    isOpenFilter,
    setIsOpenFilter,
    membership,
    navigation,
  });
  const {theme} = useContext(ThemeContext);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpenFilter}
      onRequestClose={() => setIsOpenFilter(false)}>
      <View style={styles.container}>
        <Pressable
          onPress={() => setIsOpenFilter(false)}
          style={styles.touchable}
        />

        <SafeAreaView
          style={{
            ...styles.body,
            backgroundColor: theme.backgroundbottomShet,
          }}>
          <HeaderBottomSheet
            title="Confirmar membresia"
            setIsOpen={setIsOpenFilter}
          />
          <View style={styles.filterContainer}>
            <View
              style={{
                marginHorizontal: spacings.s2,
                marginBottom: spacings.s2,
              }}>
              <Card theme={theme} style={{marginVertical: 16}}>
                <Card.Content>
                  <Text
                    theme={theme}
                    onPress={navigateTerm}
                    variant="labelSmall">
                    Al confirmar haz el pago del monto respectivo y envia el
                    mensaje al administrador por whatsapp para que apruebe tu
                    membresia
                  </Text>
                </Card.Content>
              </Card>
              <RadioButton.Group
                onValueChange={newValue => setPayMetod(newValue)}
                value={payMetod}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton theme={theme} value="yape" />
                  <Image
                    source={require('../../../assets/yape.png')}
                    style={{
                      width: 30,
                      height: 30,
                      marginHorizontal: spacings.s1m,
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton disabled theme={theme} value="efectivo" />
                  <Text theme={theme} variant="titleSmall">
                    Efectivo
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <RadioButton disabled theme={theme} value="izipay" />
                  <Text theme={theme} variant="titleSmall">
                    Izipay
                  </Text>
                </View>
              </RadioButton.Group>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: spacings.s2,
                }}>
                <Checkbox
                  theme={theme}
                  status={termCondition ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setTermCondition(!termCondition);
                  }}
                />
                <Text
                  theme={theme}
                  onPress={navigateTerm}
                  variant="labelSmall"
                  style={{textDecorationLine: 'underline'}}>
                  Acepto los terminos y condiciones
                </Text>
              </View>
            </View>

            <Button
              theme={theme}
              disabled={loading || !termCondition}
              mode="contained"
              onPress={sendWhatsAppMessage}>
              Confirmar y enviar
            </Button>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
