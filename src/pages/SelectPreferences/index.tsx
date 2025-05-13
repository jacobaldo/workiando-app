import React, {useContext} from 'react';
import {ActivityIndicator, SafeAreaView, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {MyAppProps} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelectProps} from './hooks';
import {ThemeContext} from '../../provider/ThemeProvider';
import {styles} from './styles';
import ItemCategory from '../../components/2.Molecules/ItemCategory';
import {Button} from '../../components/Button';
import Gradient from '../../components/LinearGradient';
interface Props extends StackScreenProps<MyAppProps, 'SelectPreferences'> {}
const SelectPreferences = ({navigation, route}: Props) => {
  const {type} = route?.params;
  const {theme} = useContext(ThemeContext);
  const {
    data,
    loading,
    handleFilterCategory,
    filterCategories,
    handleAddPreferences,
    loadingPut,
  } = useSelectProps({navigation});

  return (
    <Gradient>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}>
            <View style={styles.containerBack}>
              {/* {type === 'create' && ( */}
              <Text theme={theme} variant="titleLarge">
                Selecciona tus Preferencias de búqueda, mínimo 3 y máximo 6.
              </Text>
              {/* )} */}
            </View>

            <View style={styles.listFilter}>
              {loading && <ActivityIndicator size={20} />}
              {data &&
                data.map((item, index) => (
                  <ItemCategory
                    key={index}
                    onPress={handleFilterCategory}
                    item={item}
                    filter={filterCategories}
                  />
                ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.registerContent}>
          <Button
            type="primary"
            btnText={
              type === 'update'
                ? 'Actualizar Preferencias'
                : 'Registrar preferencias'
            }
            onPress={handleAddPreferences}
            disabled={loadingPut || filterCategories.length < 3}
            loading={loadingPut}
          />
        </View>
      </SafeAreaView>
    </Gradient>
  );
};
export default SelectPreferences;
