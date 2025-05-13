import {StyleSheet} from 'react-native';
import {letterSpacing} from '../../constants/letterSpacing';
import {lineHeight} from '../../constants/lineHeight';
import {colors} from '../../constants/colors';
import {fontFamily, fontSizes} from '../../constants/fontSizes';

export default StyleSheet.create({
  default: {
    fontSize: fontSizes.default,
    fontFamily: fontFamily.regular,
  },
  small: {
    fontSize: fontSizes.small,
    fontFamily: fontFamily.regular,
  },
  vlarge: {
    fontSize: fontSizes.vlarge,
    fontFamily: fontFamily.regular,
  },
  vextralarge: {
    fontSize: fontSizes.vextralarge,
    fontFamily: fontFamily.regular,
  },
  vmextralarge: {
    fontSize: fontSizes.vmextralarge,
    fontFamily: fontFamily.regular,
  },
  extralarge: {
    fontSize: fontSizes.extralarge,
    fontFamily: fontFamily.regular,
  },
  large: {
    fontSize: fontSizes.large,
    fontFamily: fontFamily.regular,
  },
  regular: {
    fontSize: fontSizes.regular,
    fontFamily: fontFamily.regular,
  },
  medium: {
    fontSize: fontSizes.medium,
    fontFamily: fontFamily.regular,
  },
  vsmall: {
    fontSize: fontSizes.vsmall,
    fontFamily: fontFamily.regular,
  },
  vmsmall: {
    fontSize: fontSizes.vmsmall,
    fontFamily: fontFamily.regular,
  },
  vmmsmall: {
    fontSize: fontSizes.vmmsmall,
    fontFamily: fontFamily.regular,
  },
  vvsmall: {
    fontSize: fontSizes.vvsmall,
    fontFamily: fontFamily.regular,
  },
  bold: {
    fontWeight: 'bold',
    fontFamily: fontFamily.bold,
  },
  h6: {
    fontSize: fontSizes.regular,
    fontFamily: fontFamily.bold,
    lineHeight: lineHeight.h6,
    letterSpacing: letterSpacing.h6,
  },
  h5: {
    fontSize: fontSizes.default,
    fontFamily: fontFamily.bold,
    lineHeight: lineHeight.h5,
    letterSpacing: letterSpacing.h5,
  },
  h4: {
    fontSize: fontSizes.medium,
    fontFamily: fontFamily.bold,
    lineHeight: lineHeight.h4,
    letterSpacing: letterSpacing.h4,
  },
  body1: {
    fontSize: fontSizes.small,
    fontFamily: fontFamily.regular,
    lineHeight: lineHeight.body.body1,
    letterSpacing: letterSpacing.body.body1,
  },
  body2: {
    fontSize: fontSizes.vsmall,
    fontFamily: fontFamily.regular,
    lineHeight: lineHeight.body.body2,
    letterSpacing: letterSpacing.body.body2,
  },
  body3: {
    fontSize: fontSizes.vsmall,
    lineHeight: lineHeight.body.body3,
    fontFamily: fontFamily.regular,
    letterSpacing: letterSpacing.body.body3,
  },
  bodyP1: {
    fontSize: fontSizes.small,
    fontFamily: fontFamily.regular,
    lineHeight: lineHeight.linkTextBig,
    letterSpacing: letterSpacing.linkTextSmall,
  },
  bodyP2: {
    fontSize: fontSizes.vsmall,
    fontFamily: fontFamily.regular,
    lineHeight: lineHeight.body.p2,
    letterSpacing: letterSpacing.linkTextSmall,
  },
  bodyP3: {
    fontSize: fontSizes.vsmall,
    fontFamily: fontFamily.regular,
    fontWeight: '400',
    lineHeight: lineHeight.body.p2,
    letterSpacing: letterSpacing.linkTextSmall,
  },
  subtitleS1: {
    lineHeight: lineHeight.subtitle.subtitle1,
    fontSize: fontSizes.small,
    fontFamily: fontFamily.bold,
    letterSpacing: letterSpacing.linkTextSmall,
  },
  subtitleS2: {
    lineHeight: lineHeight.subtitle.subtitle2,
    fontSize: fontSizes.vsmall,
    fontFamily: fontFamily.bold,
    letterSpacing: letterSpacing.subtitle.subtitle2,
  },
  bodyLinkMedium: {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.vsmall,
    lineHeight: lineHeight.bodyLinkMedium,
    letterSpacing: letterSpacing.bodyLinkMedium,
  },
  overline: {
    letterSpacing: letterSpacing.overline,
    fontSize: fontSizes.vmmsmall,
    fontFamily: fontFamily.regular,
    lineHeight: lineHeight.overline,
  },
  caption: {
    fontSize: fontSizes.vmsmall,
    fontFamily: fontFamily.regular,
    lineHeight: lineHeight.caption,
    letterSpacing: letterSpacing.caption,
  },
});

export const stylesBase = StyleSheet.create({
  base: {
    color: colors.neutral.neutral900,
  },
});
