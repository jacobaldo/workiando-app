import {View, SafeAreaView, ScrollView, RefreshControl} from 'react-native';
import React, {useContext} from 'react';
import {MyAppProps} from '../App/types';
import {StackScreenProps} from '@react-navigation/stack';
import {useJobsCategory} from './hooks';
import CardWork from '../../components/2.Molecules/CardWork';
import {Work} from '../Search/types';
import LottieView from 'lottie-react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {styles} from './styles';
import {ThemeContext} from '../../provider/ThemeProvider';
import {spacings} from '../../constants/spacings';
interface Props extends StackScreenProps<MyAppProps, 'JobsCategory'> {}
const JobsCategory = ({navigation, route}: Props) => {
  const {idCategory, nameCategory} = route.params;
  const {theme} = useContext(ThemeContext);
  const {data, loading, refreshData} = useJobsCategory({
    navigation,
    idCategory,
    nameCategory,
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
                source={require('../../assets/lottie/noregister.json')}
                resizeMode="contain"
                autoPlay
                loop
                style={styles.lottie}
              />
              <Text variant="titleMedium" theme={theme}>
                Aun no tienes anuncio .
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

export default JobsCategory;
