import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './style';

const slides = [
  {id: '1', image: require('./../../assets/pagina1.png')},
  {id: '2', image: require('./../../assets/pagina2.png')},
  {id: '3', image: require('./../../assets/pagina3.png')},
  {id: '4', image: require('./../../assets/pagina4.png')},
  {id: '5', image: require('./../../assets/pagina5.png')},
];

const Onboarding = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  const handleNext = async () => {
    if (index < slides.length - 1) {
      setIndex(prev => prev + 1);
    } else {
      await AsyncStorage.setItem('onboardingCompleted', 'true');
      navigation.replace('Login');
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('onboardingCompleted', 'true');
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image source={slides[index].image} style={styles.fullImage} />
      <View style={styles.overlay}>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.skip}>Omitir</Text>
          </TouchableOpacity>
          <View style={styles.indicatorContainer}>
            {slides.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.indicator,
                  index === i && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.next}>
              {index === slides.length - 1 ? 'Empezar' : 'Siguiente'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
