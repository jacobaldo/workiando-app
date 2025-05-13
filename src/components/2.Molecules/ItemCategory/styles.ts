import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  filterCard: {
    padding: spacings.s1,
    borderWidth: 1,
    margin: spacings.s0,
    borderRadius: borderRadius.r4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
