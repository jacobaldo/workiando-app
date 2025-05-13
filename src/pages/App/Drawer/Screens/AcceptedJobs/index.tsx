import React from 'react';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {useAcceptedWorks} from './hooks';
import {Typography} from '../../../../../components/Typography';
import {MyAppProps} from '../../../types';
interface Props extends StackScreenProps<MyAppProps, 'AcceptedWorks'> {}
const AcceptedWorks = ({navigation}: Props) => {
  const {data, loading, refreshData} = useAcceptedWorks({
    navigation,
  });
  console.log('dataaa', data);

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
        <View>
          <Typography>holaaa</Typography>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AcceptedWorks;
