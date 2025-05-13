import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  scrollVertical: {
    marginTop: spacings.s2,
    marginBottom: 50,
  },
  body: {
    flexDirection: 'row',
  },
  paddingH: {paddingHorizontal: spacings.s2, paddingTop: spacings.s2},
  lottieuser: {
    width: '80%',
    height: 300,
  },
  lottie: {
    width: '90%',
    height: 400,
  },
});
