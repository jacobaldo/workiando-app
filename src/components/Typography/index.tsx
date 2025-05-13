import React, {useContext} from 'react';
import {Pressable} from 'react-native';
import styles, {stylesBase} from './style';
import {Props} from './types';
import {ThemeContext} from '../../provider/ThemeProvider';
import {Text} from 'react-native-paper';

export const Typography = ({
  children = '',
  style = {},
  variant = {type: 'default'},
  bold = false,
  numberOfLines = 0,
  onPress,
  allowFontScaling = false,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const typographyStyle = {
    ...stylesBase.base,
    ...styles[variant.type],
    ...(bold && styles.bold),
  };
  const typographyStyleText = {
    ...style,
  };
  return onPress ? (
    <Pressable onPress={onPress}>
      <Text
        theme={theme}
        style={{
          ...typographyStyle,
          color: theme.textColor,
          ...typographyStyleText,
        }}
        numberOfLines={numberOfLines}
        allowFontScaling={allowFontScaling}>
        {children}
      </Text>
    </Pressable>
  ) : (
    <Text
      theme={theme}
      allowFontScaling={allowFontScaling}
      style={{
        ...typographyStyle,
        color: theme.textColor,
        ...typographyStyleText,
      }}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
