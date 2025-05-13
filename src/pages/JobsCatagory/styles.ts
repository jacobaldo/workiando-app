import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    flex: 1,
  },
  containerList: {
    flex: 1,
    marginHorizontal: spacings.s2,
    paddingBottom: spacings.s2,
  },
  lottie: {
    width: '90%',
    height: 400,
  },
});
