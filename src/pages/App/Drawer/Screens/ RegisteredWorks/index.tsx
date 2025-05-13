import React from 'react';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {useRegisteredWorks} from './hooks';
import {MyAppProps} from '../../../types';
import {Work} from '../../../../Search/types';
import CardWorkList from '../../../../../components/2.Molecules/CardWorkList';
interface Props extends StackScreenProps<MyAppProps, 'RegisteredWorks'> {}
const RegisteredWorks = ({navigation}: Props) => {
  const {data, loading, refreshData, onPressAcept, loadingPut} =
    useRegisteredWorks({
      navigation,
    });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => refreshData()}
          />
        }
        showsVerticalScrollIndicator={false}
        style={styles.body}>
        <View style={styles.containerList}>
          {data?.docs.map((item: Work) => (
            <CardWorkList
              item={item}
              onPress={onPressAcept}
              loading={loadingPut}
              textButtom="Aceptar"
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisteredWorks;
