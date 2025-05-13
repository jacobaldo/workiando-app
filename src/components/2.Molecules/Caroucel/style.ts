import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {borderRadius, spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    paddingHorizontal: spacings.s2,
    paddingTop: spacings.s1,
    flex: 1,
  },
  paginationStyle: {
    bottom: -20,
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },
  doStyle: {
    backgroundColor: colors.secondary.secondary100,
    width: spacings.s2m,
    height: spacings.s1,
  },
  inactiveDotStyle: {
    backgroundColor: colors.secondary.secondary100,
    width: spacings.s1,
    height: spacings.s1,
  },
  imagen: {
    height: 150,
    backgroundColor: colors.secondary.secondary100,
    borderRadius: borderRadius.r2,
  },
});
