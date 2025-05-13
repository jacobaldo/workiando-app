// import React, {useEffect} from 'react';
import React, {useContext, useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './style';
import {Props} from './types';
import {Typography} from '../Typography';
import {removeSpecialCharacters} from '../../utils/removeSpecialCharacters';
import useAnimationLabel from '../../hooks/useAnimationLabel';
import {colors} from '../../constants/colors';
import {ThemeContext} from '../../provider/ThemeProvider';

export const Textarea = ({
  label = '',
  testID = 'test-textarea',
  placeholder,
  maxLength,
  value,
  onPress,
  onChange,
  onBlur,
  usedSpecialCharacters = true,
  variant = 'default',
  isRequired = false,
  autoFocus,
  requiredComment,
  styleContainer,
  rightAdornment,
  numberOfLines,
  scrollEnabled = false,
  multiline = true,
  ref,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [styleLabel, setStyleLabel] = useState<any>(styles.label);
  const {animationBlur, animationFocus} = useAnimationLabel();

  const height = {
    minHeight: variant === 'default' ? 80 : 'auto',
  };

  useEffect(() => {
    setStyleLabel(
      variant === 'default' || value ? styles.label : styles.autoHeightLabel,
    );
    if (value) {
      animationFocus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBlur = () => {
    if (!value) {
      animationBlur();
      setStyleLabel(
        variant === 'default' ? styles.label : styles.autoHeightLabel,
      );
    }
    onBlur?.();
  };

  const onFocus = () => {
    animationFocus();
    setStyleLabel(styles.label);
  };

  const handleChange = (text: string) => {
    // if (!usedSpecialCharacters) {
    //   text = removeSpecialCharacters(text);
    // }
    if (text.length <= maxLength) {
      onChange(text);
    }
  };

  return (
    <>
      <View
        style={{
          ...styles.wrapper,
          ...(isRequired && styles.wrapperIsRequired),
          ...styleContainer,
          borderColor: theme.textColor,
        }}
        testID={testID}>
        <View style={styles.header}>
          <Typography
            variant={{type: 'caption'}}
            style={{
              ...styleLabel,
              ...(isRequired && styles.labelIsRequired),
              color: theme.neutral400,
            }}>
            {label}
          </Typography>
          {!!rightAdornment && (
            <View style={styles.rightAdornment}>{rightAdornment}</View>
          )}
        </View>
        <TextInput
          style={[styles.textArea, height, {color: theme.textColor}]}
          ref={ref}
          hitSlop={{top: 6, bottom: 6, left: 6, right: 6}}
          testID={'textarea-input'}
          onChangeText={handleChange}
          value={value}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={onFocus}
          onPressIn={onPress}
          multiline={multiline}
          scrollEnabled={scrollEnabled}
          numberOfLines={numberOfLines}
          contextMenuHidden
          autoFocus={autoFocus}
          textAlignVertical="top"
          disableFullscreenUI={true}
        />
      </View>
      <View
        style={{
          ...styles.footerContainer,
          ...(isRequired && styles.footerContainerTwoElement),
        }}>
        {isRequired && (
          <Typography
            variant={{type: 'caption'}}
            style={styles.messageIsRequired}>
            {requiredComment}
          </Typography>
        )}
        <Text style={{...styles.charCounter, color: theme.neutral400}}>
          {value.length}/{maxLength}
        </Text>
      </View>
    </>
  );
};
