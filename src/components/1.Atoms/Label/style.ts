import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {fontFamily, fontSizes} from '../../../constants/fontSizes';

export const styles = StyleSheet.create({
  label: {
    color: colors.neutral.neutral400,
    fontSize: fontSizes.small,
    fontFamily: fontFamily.normal,
    width: '100%',
  },
  labelContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: '35%',
    width: '100%',
  },
});
