import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fontFamily, fontSizes} from '../../constants/fontSizes';
import {spacings} from '../../constants/spacings';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 56,
    borderRadius: spacings.s3,
    borderWidth: 1,
    flexDirection: 'row',
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    bottom: '30%',
  },
  input: {
    paddingRight: 40,
    fontSize: fontSizes.small,
    lineHeight: spacings.s2,
    letterSpacing: 0.2,
    fontFamily: fontFamily.regular,
    ...Platform.select({
      ios: {
        paddingBottom: spacings.s0,
        flex: 1,
      },
      android: {
        width: '100%',
      },
    }),
  },
  label: {
    left: spacings.s2,
    lineHeight: spacings.s2,
    letterSpacing: 0.2,
    fontFamily: fontFamily.regular,
  },
  labelContainer: {
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  leftAdornment: {
    height: '100%',
    justifyContent: 'center',
    left: spacings.s2,
    zIndex: 99,
  },
  errorTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -spacings.s0,
    left: spacings.s2,
    width: '90%',
  },
  errorText: {
    marginLeft: 0,
    marginBottom: spacings.s0,
    color: colors.error.error100,
  },
  infoTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -10,
    paddingLeft: spacings.s2,
    width: '90%',
  },
  infoText: {
    marginLeft: 0,
    position: 'absolute',
    bottom: -10,
    color: colors.neutral.neutral400,
    fontSize: fontSizes.vmsmall,
    lineHeight: spacings.s2,
    letterSpacing: 0.2,
  },
  maxLengthValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: -10,
    paddingLeft: spacings.s2,
    width: '90%',
  },
  maxLengthValueText: {
    marginLeft: 0,
    position: 'absolute',
    bottom: -10,
    fontSize: fontSizes.vmsmall,
    lineHeight: spacings.s2,
    letterSpacing: 0.2,
  },
});
