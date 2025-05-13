import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

export const buttonStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 20,
    padding: 12,
  },
  primary: {
    backgroundColor: colors.primary.primary100,
  },
  primaryGreen: {
    backgroundColor: colors.secondary.secondary100,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary.primary100,
  },
  tertiary: {
    backgroundColor: 'transparent',
  },
  default: {
    backgroundColor: colors.neutral.neutral300,
    shadowColor: colors.neutral.neutral300,
  },
});

export const disabledButtonStyles = StyleSheet.create({
  primary: {
    backgroundColor: colors.neutral.neutral50,
  },
  primaryGreen: {
    backgroundColor: colors.neutral.neutral50,
  },
  secondary: {
    borderColor: colors.neutral.neutral200,
    backgroundColor: colors.neutral.neutral50,
  },
  tertiary: {},
  default: {
    backgroundColor: colors.neutral.neutral50,
    shadowColor: colors.neutral.neutral50,
  },
});

export const disabledTextStyles = StyleSheet.create({
  primary: {
    color: colors.neutral.neutral200,
  },
  primaryGreen: {
    color: colors.neutral.neutral200,
  },
  secondary: {
    color: colors.neutral.neutral200,
  },
  tertiary: {
    color: colors.neutral.neutral200,
  },
  default: {
    color: colors.white,
  },
});

export const textStyles = StyleSheet.create({
  text: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  primary: {
    color: colors.white,
  },
  primaryGreen: {
    color: colors.white,
  },
  secondary: {
    color: colors.primary.primary100,
  },
  tertiary: {
    color: colors.primary.primary100,
  },
  default: {
    color: colors.white,
  },
});
