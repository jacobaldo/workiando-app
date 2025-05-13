import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../../../../constants/spacings';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacings.s2,
    borderRadius: borderRadius.r4,
    padding: spacings.s2,
    marginHorizontal: spacings.s2,
  },
});
