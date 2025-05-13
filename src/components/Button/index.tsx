import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {colors} from '../../constants/colors';
import {
  buttonStyles,
  disabledButtonStyles,
  disabledTextStyles,
  textStyles,
} from './style';

import {Props} from './types';

export const Button = ({
  btnText,
  textStyle = {},
  style = {},
  onPress,
  disabled = false,
  type = 'default',
  loading,
  iconLeft,
}: Props) => {
  const handleOnPress = () => {
    if (!loading) {
      onPress && onPress();
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleOnPress}
      disabled={disabled || loading}
      style={{
        ...buttonStyles.wrapper,
        ...buttonStyles[type],
        ...(disabled && disabledButtonStyles[type]),
        ...style,
      }}>
      {iconLeft}
      {loading ? (
        <ActivityIndicator size={'small'} color={colors.white} />
      ) : (
        <Text
          style={{
            ...textStyles.text,
            ...textStyles[type],
            ...(disabled && disabledTextStyles[type]),
            ...textStyle,
          }}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};
