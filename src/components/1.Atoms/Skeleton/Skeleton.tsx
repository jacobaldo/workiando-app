import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Animated, Easing} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../constants/colors';
import {styles} from './style';

interface Props {
  height: number | string;
  width?: number | string;
  borderRadius?: number;
}

const Skeleton = ({height, width = '100%', borderRadius = 0}: Props) => {
  const MyAnimated = Animated.createAnimatedComponent(LinearGradient);
  const animatedValue = new Animated.Value(0);
  const myStyles = styles({
    height,
    width,
    borderRadius,
    backgroundColor: colors.neutral.neutral50,
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  });
  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-400, 400],
    extrapolate: 'clamp',
  });

  return (
    <View style={myStyles.container}>
      <MyAnimated
        colors={[
          colors.neutral.neutral50,
          colors.white,
          colors.white,
          colors.neutral.neutral50,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[
          myStyles.animatedbones,
          {transform: [{translateX: translateX}]},
        ]}
      />
    </View>
  );
};

export default Skeleton;
