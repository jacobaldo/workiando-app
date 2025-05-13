import React, {useEffect} from 'react';
import {Animated} from 'react-native';
import {fontSizes} from '../../../constants/fontSizes';
import useAnimationLabel from '../../../hooks/useAnimationLabel';
import {styles} from './style';
import {Props} from './type';

export const Label = ({label, style, styleContainer, isFocus}: Props) => {
  const {sliceUp, animationFocus, animationBlur} = useAnimationLabel();

  useEffect(() => {
    if (isFocus) {
      animationFocus();
    } else {
      animationBlur();
    }
  }, [animationBlur, animationFocus, isFocus]);

  return (
    <Animated.View
      style={{
        transform: [{translateY: sliceUp}],
        ...styles.labelContainer,
        ...styleContainer,
      }}>
      <Animated.Text
        allowFontScaling={false}
        style={{
          ...styles.label,
          // color: isFocus ? colors.neutral.neutral600 : colors.grey400,
          fontSize: isFocus ? fontSizes.vmsmall : fontSizes.small,
          ...style,
        }}>
        {label}
      </Animated.Text>
    </Animated.View>
  );
};
