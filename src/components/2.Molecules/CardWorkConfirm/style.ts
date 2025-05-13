import {Dimensions, StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: borderRadius.r2,
    // alignItems: 'center',
    marginVertical: spacings.s2,
    margin: spacings.s2,
  },
  items: {
    margin: spacings.s0,
    borderRadius: borderRadius.r2,
    paddingHorizontal: spacings.s2,
    paddingVertical: spacings.s0,
  },
  button: {
    marginTop: spacings.s1,
    width: '100%',
  },
  contTitle: {
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: colors.neutral.neutral900,
  },
  colorText: {
    // color: colors.neutral.neutral900,
    marginStart: spacings.s1,
  },
  bottomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
