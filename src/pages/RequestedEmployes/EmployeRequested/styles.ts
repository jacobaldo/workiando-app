import {StyleSheet} from 'react-native';
import {spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    paddingHorizontal: spacings.s2,
    flex: 1,
  },
  containerList: {},
  lottie: {
    width: '90%',
    height: 400,
  },
});
