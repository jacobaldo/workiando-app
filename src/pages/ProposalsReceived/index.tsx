import React, {useContext} from 'react';
import {RefreshControl, SafeAreaView, ScrollView, View} from 'react-native';

import {styles} from './styles';
import {useProposalsReceived} from './hooks';
import {ThemeContext} from '../../provider/ThemeProvider';
import {ProposalsReceivedProps} from './types';
import {Work} from '../Search/types';
import {Typography} from '../../components/Typography';
import UserProposals from '../../components/2.Molecules/UserProposals';
import {Requested} from '../RequestedEmployes/types';
import CardWork from '../../components/2.Molecules/CardWork';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-paper';

const ProposalsReceived = ({navigation}: ProposalsReceivedProps) => {
  const {theme} = useContext(ThemeContext);
  const {
    data,
    loading,
    refreshData,
    setSelectUser,
    setSelectWork,
    dataProposals,
    selectWork,
  } = useProposalsReceived({
    navigation,
  });

  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      {data && data.docs.length > 0 ? (
        <View style={{flex: 1}}>
          <View style={styles.paddingH}>
            <Typography variant={{type: 'body3'}}>MIS ANUNCIOS</Typography>
          </View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={() => {
                    refreshData();
                    setSelectWork(undefined);
                  }}
                />
              }
              style={styles.body}>
              {data?.docs.map((item: Work, index: number) => (
                <CardWork
                  selected={selectWork}
                  key={index}
                  item={item}
                  onPress={setSelectWork}
                />
              ))}
            </ScrollView>
          </View>
          <Typography style={styles.paddingH} variant={{type: 'body3'}}>
            Postulantes
          </Typography>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.scrollVertical}>
            <View style={styles.paddingH}>
              {dataProposals &&
                (dataProposals?.docs.length > 0 ? (
                  dataProposals?.docs.map((item: Requested, index: number) => (
                    <UserProposals
                      key={index}
                      item={item}
                      onPress={setSelectUser}
                    />
                  ))
                ) : (
                  <View
                    style={{
                      alignItems: 'center',
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <LottieView
                      source={require('../../assets/lottie/noregister.json')}
                      resizeMode="contain"
                      autoPlay
                      loop
                      style={styles.lottieuser}
                    />
                    <Text variant="titleMedium" theme={theme}>
                      Aun no hay postulantes para tu anuncio.
                    </Text>
                  </View>
                ))}
            </View>
          </ScrollView>
        </View>
      ) : (
        <View
          style={{
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../../assets/lottie/anuncia.json')}
            resizeMode="contain"
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text variant="titleMedium" theme={theme}>
            Aun no tienes anuncios registrados.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProposalsReceived;
