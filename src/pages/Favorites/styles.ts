import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    flex: 1,
  },
  containerList: {
    paddingHorizontal: spacings.s2,
    paddingBottom: spacings.s4,
  },
  lottie: {
    width: '90%',
    height: 400,
  },
  cardContainer: {width: '100%', marginLeft: 0, marginBottom: 0},
});
