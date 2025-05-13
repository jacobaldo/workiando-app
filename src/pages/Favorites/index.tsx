import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useFavorites} from './hooks';
import {StackScreenProps} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import CardWork from '../../components/2.Molecules/CardWork';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {ThemeContext} from '../../provider/ThemeProvider';
import {Work} from '../Search/types';
interface Props extends StackScreenProps<MyAppProps, 'Favorities'> {}
const Favorities = ({navigation}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {favorites, handleToggleFavorite, onPressNavigateEmployer} =
    useFavorites({navigation});
  return (
    <SafeAreaView
      style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.containerList}>
          {favorites && favorites.length > 0 ? (
            favorites.map((item: Work, index: number) => {
              const isFavorite = favorites.some(
                (fav: Work) => fav._id === item._id,
              );
              return (
                <CardWork
                  style={styles.cardContainer}
                  key={index}
                  item={item}
                  onPress={onPressNavigateEmployer}
                  handleToggleFavorite={handleToggleFavorite}
                  isFavorite={isFavorite}
                />
              );
            })
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
                Aun no tienes agregado a favoritos.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorities;
