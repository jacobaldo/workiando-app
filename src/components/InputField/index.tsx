import React, {useContext} from 'react';
import {TextInput, Text, View, Platform, Pressable} from 'react-native';
import styles from './style';
import {Props} from './types';
import {colors} from '../../constants/colors';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Typography} from '../Typography';
import {Label} from '../1.Atoms/Label';
import {alphanumericFormat} from '../../utils/alphanumeric';
import {ThemeContext} from '../../provider/ThemeProvider';

const isIOS = Platform.OS === 'ios';

export const InputField = ({
  label = '',
  style = {},
  labelStyle = {},
  value = '',
  errorValue = '',
  errorValueStyle = {},
  onChange,
  testID = 'test-input',
  firstField = false,
  lastField = false,
  nextRef,
  currentRef,
  numericKeyboard = false,
  alphanumeric = false,
  onPress = () => {},
  isPassword = false,
  placeholder,
  onBlur,
  leftAdornment,
  rightAdornment,
  editable = true,
  isBlur = false,
  isError = false,
  maxLength,
  maxLengthText,
  containerTestID,
  styleWrapper,
  onLayout,
  showErrorWhileTyping = false,
  infoText,
  // infoTextContainerStyle,
  leftAdornmentStyleWrapper,
  // isNumberKeyboard = false,
  maxLengthOnlyText = '',
  disabled,
  rightAdornmentStyle,
  autoCapitalize = 'sentences',
  autoCorrect = true,
  keyboardType,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);
  const [blur, setBlur] = useState(isBlur);
  const [focus, setFocus] = useState(false);

  const getRightIcon = () => {
    if (rightAdornment) {
      return (
        <View style={{...styles.rightIcon, ...rightAdornmentStyle}}>
          {rightAdornment}
        </View>
      );
    }
    if (isPassword) {
      return (
        <Pressable
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
          style={styles.rightIcon}
          onPress={() => setShowPassword(!showPassword)}
          testID="input-eye-icon-id">
          {showPassword ? (
            <Icon name="eye" size={24} color={theme.textColor} />
          ) : (
            <Icon name="eye-off" size={24} color={theme.textColor} />
          )}
        </Pressable>
      );
    }
  };

  const handleOnPress = () => {
    setBlur(false);
    setFocus(true);
    //TODO: should be onFocus no onPress
    onPress();
  };

  const handleOnBlur = () => {
    setBlur(true);
    setFocus(false);
    onBlur && onBlur();
  };

  const handleOnChange = (_value: string) => {
    if (onChange) {
      if (alphanumeric) {
        onChange(alphanumericFormat(_value));
      } else {
        onChange(_value);
      }
    }
  };

  const getContainerBorderColor = () => {
    if (showErrorWhileTyping && errorValue) {
      return colors.primary.primary100;
    }
    if (blur && errorValue) {
      return theme.textColor;
    }
    if (focus && !blur && !disabled) {
      return colors.primary.primary100;
    }
    if (!editable) {
      return theme.neutral500;
    }
    return theme.textColor;
  };

  const getLabelColor = () => {
    if (showErrorWhileTyping && errorValue) {
      return theme.neutral400;
    }
    if (blur && errorValue) {
      return colors.neutral.neutral400;
    }
    if (!editable) {
      return theme.neutral500;
    }
    return theme.neutral400;
  };

  const isLabelFocused = () => {
    if (disabled && !value) {
      return false;
    }

    if (!!leftAdornment || focus || !!value) {
      return true;
    }

    return false;
  };

  // const shouldShowErrorValue = () => {
  //   if (typeof errorValue !== 'string') {
  //     return false;
  //   }
  //   if (blur && !!errorValue) {
  //     return true;
  //   }

  //   if (isError && !!errorValue) {
  //     return true;
  //   }

  //   return false;
  // };

  const getDefaultInputField = () => {
    return (
      <TextInput
        editable={editable}
        autoFocus={firstField}
        testID={testID}
        style={inputStyles}
        onChangeText={handleOnChange}
        value={value}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={isPassword && !showPassword}
        onTouchStart={handleOnPress}
        onFocus={handleOnPress}
        onBlur={handleOnBlur}
        // numberOfLines={1}
        // multiline={true}
        placeholder={placeholder}
        maxLength={maxLength}
        allowFontScaling={false}
        returnKeyType={numericKeyboard ? (isIOS ? 'done' : 'next') : 'next'}
        onSubmitEditing={
          !lastField ? () => nextRef?.current?.focus() : undefined
        }
        ref={currentRef}
        keyboardType={keyboardType ?? 'default'}
      />
    );
  };

  const getInputField = () => {
    return getDefaultInputField();
  };

  const leftAdornmentStyles = {
    ...styles.leftAdornment,
    ...leftAdornmentStyleWrapper,
    top: label !== '' ? (isIOS ? 5 : 7) : 4,
  };

  const inputStyles = {
    ...styles.input,
    marginLeft: 16,
    paddingLeft: leftAdornment ? 20 : 0,
    marginTop: label && !isIOS ? 8 : 10,
    justifyContent: 'center',
    color: !editable ? theme.neutral500 : theme.textColor,
    height: '100%',
    ...style,
    ...(disabled ? {color: theme.neutral500} : {}),
  };

  const wrapperStyles = {
    ...styles.wrapper,
    borderColor: getContainerBorderColor(),
    ...styleWrapper,
  };

  const labelStyles = {
    ...styles.label,
    ...labelStyle,
    color: labelStyle.color ?? getLabelColor(),
  };

  const errorStyles = {
    ...styles.errorTextContainer,
    ...errorValueStyle,
  };
  return (
    <>
      <View testID={containerTestID} style={wrapperStyles} onLayout={onLayout}>
        <View style={leftAdornmentStyles}>{leftAdornment}</View>
        {!!label && (
          <Label
            isFocus={isLabelFocused()}
            label={label}
            style={labelStyles}
            styleContainer={styles.labelContainer}
          />
        )}
        {getInputField()}
        {getRightIcon()}
      </View>
      <View style={errorStyles}>
        {/* {shouldShowErrorValue() && ( */}
        <Typography
          style={{
            ...styles.errorText,
            color: isError ? colors.error.error100 : theme.neutral400,
          }}
          variant={{type: 'caption'}}>
          {errorValue}
        </Typography>
        {/* )} */}
      </View>
      {/* {infoText && !errorValue && (
        <View style={{...styles.infoTextContainer, ...infoTextContainerStyle}}>
          <Text style={styles.infoText}>{infoText}</Text>
        </View>
      )} */}
      {maxLength &&
        !!maxLengthText &&
        value.length < maxLength &&
        !infoText &&
        !errorValue && (
          <View style={styles.infoTextContainer}>
            <View>
              <Text style={styles.infoText}>{maxLengthText}</Text>
            </View>
            <View>
              <Text style={styles.infoText}>
                {value.length}/{maxLength}
              </Text>
            </View>
          </View>
        )}
      {maxLength &&
        !!maxLengthText &&
        value.length === maxLength &&
        !infoText &&
        !errorValue && (
          <View style={styles.infoTextContainer}>
            <View>
              <Text style={styles.infoText}>
                Has llegado al límite de caracteres disponibles ({maxLength})
              </Text>
            </View>
          </View>
        )}
      {maxLengthOnlyText !== '' && (
        <View style={styles.maxLengthValue}>
          <View />
          <View>
            <Text
              style={{
                ...styles.maxLengthValueText,
                color: isError
                  ? colors.error.error100
                  : colors.neutral.neutral400,
              }}>
              {value.length}/{maxLengthOnlyText}
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
