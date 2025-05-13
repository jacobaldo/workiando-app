import {StyleSheet} from 'react-native';
import {spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    paddingHorizontal: spacings.s2,
    // backgroundColor: colors.other.background,
    flex: 1,
  },
  containerList: {
    flex: 1,
    paddingBottom: spacings.s2,
  },
  lottie: {
    width: '90%',
    height: 400,
  },
});
