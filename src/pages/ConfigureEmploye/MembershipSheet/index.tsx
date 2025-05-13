import React, {useContext, useState} from 'react';
import {Membership, Props} from './types';
import {Modal, Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './style';
import {
  ActivityIndicator,
  Button,
  Card,
  RadioButton,
  Text,
} from 'react-native-paper';
import {colors} from '../../../constants/colors';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {HeaderBottomSheet} from '../../../components/2.Molecules/HeaderBottomSheet';

import {numberWithCommas} from '../../../utils/currency/currency.utils';

export const MembershipSheet = ({
  isOpen,
  setIsOpen,
  handleSelectMembership,
  membership,
  loading,
  selected,
  textButton,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [select, setSelect] = useState<string>(selected._id);

  const findSelectMembership = () => {
    const selectedOption =
      membership && membership.find(item => item._id === select);
    if (selectedOption) {
      handleSelectMembership(selectedOption);
    }
  };

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
            title="Seleciona Membresia"
            setIsOpen={setIsOpen}
          />

          {loading ? (
            <ActivityIndicator color={colors.primary.primary100} />
          ) : (
            <View>
              <View style={{height: 400}}>
                <ScrollView>
                  <View style={styles.categoryContainer}>
                    <RadioButton.Group
                      onValueChange={newValue => setSelect(newValue)}
                      value={select}>
                      {membership &&
                        membership
                          .map((item: Membership, index: number) => (
                            <Card
                              key={index}
                              theme={theme}
                              elevation={5}
                              onPress={() => setSelect(item._id)}
                              style={{marginBottom: 8}}>
                              <Card.Content
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                }}>
                                <View>
                                  <Text
                                    style={{fontWeight: 'bold'}}
                                    variant="titleLarge"
                                    theme={theme}>
                                    {item.name}
                                  </Text>
                                  <View
                                    style={{
                                      flexDirection: 'row',
                                      alignItems: 'baseline',
                                    }}>
                                    <Text
                                      variant="titleLarge"
                                      style={{fontWeight: 'bold'}}
                                      theme={theme}>{`S/. ${numberWithCommas(
                                      item?.price,
                                    )}`}</Text>
                                    <Text
                                      variant="titleSmall"
                                      theme={
                                        theme
                                      }>{` /${item?.duration} dias`}</Text>
                                  </View>
                                  <Text
                                    style={{fontWeight: 'bold'}}
                                    variant="labelSmall"
                                    theme={theme}>
                                    {`Tu anuncio estara visible por ${item?.duration} dias para todos.`}
                                  </Text>
                                </View>
                                <RadioButton theme={theme} value={item._id} />
                              </Card.Content>
                            </Card>
                          ))
                          .reverse()}
                    </RadioButton.Group>
                  </View>
                </ScrollView>
              </View>
              <Button
                style={{margin: 16}}
                theme={theme}
                mode="contained"
                onPress={findSelectMembership}>
                {textButton}
              </Button>
            </View>
          )}
        </SafeAreaView>
      </View>
    </Modal>
  );
};
