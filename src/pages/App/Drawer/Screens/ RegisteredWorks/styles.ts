import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constants/colors';
import {spacings} from '../../../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    paddingHorizontal: spacings.s2,
    backgroundColor: colors.other.background,
    flex: 1,
  },
  containerList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
