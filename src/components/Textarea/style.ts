import {Platform, StyleSheet} from 'react-native';
import {fontFamily, fontSizes} from '../../constants/fontSizes';
import {colors} from '../../constants/colors';
import {letterSpacing} from '../../constants/letterSpacing';
import {spacings} from '../../constants/spacings';

const isIOS = Platform.OS === 'ios';

export default StyleSheet.create({
  wrapper: {
    lineHeight: 24,
    fontSize: fontSizes.small,
    fontFamily: fontFamily.regular,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 4,
  },
  wrapperIsRequired: {
    borderWidth: 1,
    borderColor: colors.neutral.neutral400,
  },
  label: {
    position: 'relative',
    top: 16,
    left: 0,
  },
  autoHeightLabel: {
    fontSize: fontSizes.small,
    color: colors.neutral.neutral600,
    fontFamily: fontFamily.regular,
    letterSpacing: letterSpacing.linkTextSmall,
    top: 36,
    left: 0,
    position: 'relative',
  },
  textArea: {
    marginTop: isIOS ? 16 : 8,
    lineHeight: 24,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.2,
    fontFamily: fontFamily.normal,
  },
  charCounter: {
    fontFamily: fontFamily.regular,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: spacings.s0,
  },
  footerContainerTwoElement: {
    justifyContent: 'space-between',
  },
  labelIsRequired: {
    color: colors.neutral.neutral600,
  },
  messageIsRequired: {
    color: colors.neutral.neutral600,
  },
  header: {
    flexDirection: 'row',
  },
  rightAdornment: {
    position: 'absolute',
    right: 0,
    top: spacings.s2,
  },
});
