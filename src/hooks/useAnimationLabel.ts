import {useRef} from 'react';
import {Animated, PixelRatio} from 'react-native';

type InitialValueType = {
  sliceUp: number;
  scaleDown: number;
  sliceLeft: number;
};

const useAnimationLabel = (
  duration: number = 100,
  initialValues: InitialValueType = {sliceLeft: 0, sliceUp: 0, scaleDown: 1},
) => {
  const sliceUp = useRef(new Animated.Value(initialValues.sliceUp)).current;
  const scaleDown = useRef(new Animated.Value(initialValues.scaleDown)).current;
  const sliceLeft = useRef(new Animated.Value(initialValues.sliceLeft)).current;

  const animationFocus = () => {
    Animated.parallel([
      Animated.timing(sliceUp, {
        toValue: -13,
        useNativeDriver: true,
        duration,
      }),
      Animated.timing(sliceLeft, {
        toValue: PixelRatio.getPixelSizeForLayoutSize(-5),
        useNativeDriver: true,
        duration,
      }),
      Animated.timing(scaleDown, {
        toValue: 0.8,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animationBlur = () => {
    Animated.parallel([
      Animated.timing(sliceUp, {
        toValue: 0,
        useNativeDriver: true,
        duration: 100,
      }),
      Animated.timing(sliceLeft, {
        toValue: 0,
        useNativeDriver: true,
        duration: 100,
      }),
      Animated.timing(scaleDown, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return {animationBlur, animationFocus, scaleDown, sliceUp, sliceLeft};
};

export default useAnimationLabel;
