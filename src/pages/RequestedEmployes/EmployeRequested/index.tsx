import React, {useContext} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';
import {styles} from './styles';
import {usePublishedWorks} from './hooks';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {EmployeRequestedProps} from './types';
import {Requested} from '../types';
import CardWork from '../../../components/2.Molecules/CardWork';
import LottieView from 'lottie-react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {spacings} from '../../../constants/spacings';

const EmployeRequested = ({navigation, route}: EmployeRequestedProps) => {
  const {theme} = useContext(ThemeContext);
  const {type} = route?.params;
  const {data, loading, refreshData} = usePublishedWorks({
    navigation,
    type,
  });
  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.backgroundColor}}>
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
          {data && data.docs.length > 0 ? (
            data?.docs.map((item: Requested, index: number) => (
              <CardWork
                style={{width: '100%', marginLeft: 0, marginBottom: 0}}
                key={index}
                item={item.works}
                onPress={() => null}
              />
            ))
          ) : !loading ? (
            <View
              style={{
                alignItems: 'center',
              }}>
              <LottieView
                source={require('../../../assets/lottie/anuncia.json')}
                resizeMode="contain"
                autoPlay
                loop
                style={styles.lottie}
              />
              <Text variant="titleMedium" theme={theme}>
                Aun no tienes una postulacion en este estado.
              </Text>
            </View>
          ) : (
            <View
              style={{
                marginVertical: spacings.s2,
              }}>
              <ActivityIndicator size={20} />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmployeRequested;
