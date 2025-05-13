import React, {useContext} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './styles';
import {usePublishedAll} from './hooks';
import {ThemeContext} from '../../../provider/ThemeProvider';
import {Work} from '../../Search/types';
import {PublishedExpiredProps} from './types';
import CardWork from '../../../components/2.Molecules/CardWork';
import {ActivityIndicator, Text} from 'react-native-paper';
import {spacings} from '../../../constants/spacings';
import LottieView from 'lottie-react-native';
const Histories = ({navigation, route}: PublishedExpiredProps) => {
  const {theme} = useContext(ThemeContext);
  const {type} = route?.params;
  const {data, loading, refreshData} = usePublishedAll({
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
          {/* {data?.docs.map((item: Work, index: number) => (
            <CardWork
              key={index}
              style={{marginLeft: 0, width: '100%'}}
              item={item}
              onPress={() => null}
            />
          ))} */}
          {data && data.docs.length > 0 ? (
            data?.docs.map((item: Work, index: number) => (
              <CardWork
                style={{width: '100%', marginLeft: 0, marginBottom: 0}}
                key={index}
                item={item}
                onPress={() => null}
              />
            ))
          ) : !loading ? (
            <View
              style={{
                alignItems: 'center',
              }}>
              <LottieView
                source={require('../../../assets/lottie/noregister.json')}
                resizeMode="contain"
                autoPlay
                loop
                style={styles.lottie}
              />
              <Text variant="titleMedium" theme={theme}>
                Ups! Aun no tienes{' '}
                {type === 'califications' ? 'Calificaciones' : 'Experiencia'}.
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

export default Histories;
