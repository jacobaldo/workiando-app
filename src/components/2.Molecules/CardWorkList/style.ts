import {Dimensions, StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardStyle: {
    width: Dimensions.get('window').width * 0.45,
    height: 210,
    padding: spacings.s2,
    marginVertical: spacings.s0,
    backgroundColor: colors.tertiary.tertiary100,
    borderRadius: borderRadius.r2,
    alignItems: 'center',
  },
  button: {alignItems: 'center', width: '100%', marginTop: spacings.s3},
  textStyleTitle: {
    color: colors.neutral.neutral900,
    textAlign: 'center',
    height: 60,
  },
  textStyle: {
    color: colors.neutral.neutral900,
    textAlign: 'center',
  },
});
