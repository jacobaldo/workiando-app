import React, {useContext} from 'react';
import {Props} from './types';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import {Typography} from '../../../components/Typography';
import {ActivityIndicator} from 'react-native-paper';
import {colors} from '../../../constants/colors';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {HeaderBottomSheet} from '../../../components/2.Molecules/HeaderBottomSheet';

export const TypeEmployeSheet = ({
  isOpen,
  setIsOpen,
  handleSelectEmploye,
  employes,
  loading,
  selected,
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
          <HeaderBottomSheet
            title="Seleciona tipo de empleo"
            setIsOpen={setIsOpen}
          />

          {loading ? (
            <ActivityIndicator color={colors.primary.primary100} />
          ) : (
            <ScrollView>
              <View style={styles.categoryContainer}>
                {employes &&
                  employes.map((item: any, index: number) => (
                    <TouchableOpacity
                      key={index}
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        ...styles.listCategory,
                        borderColor: theme.textColor,
                        backgroundColor:
                          selected === item._id
                            ? colors.primary.primary100
                            : 'transparent',
                      }}
                      onPress={() => handleSelectEmploye(item)}>
                      <Typography variant={{type: 'subtitleS2'}}>
                        {item?.name}
                      </Typography>
                    </TouchableOpacity>
                  ))}
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </View>
    </Modal>
  );
};
