import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    flex: 1,
  },
  register: {
    marginVertical: spacings.s2,
    paddingHorizontal: spacings.s2,
  },
  contButton: {
    marginVertical: spacings.s2,
  },
  amount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabmebership: {
    marginHorizontal: spacings.s2,
    marginVertical: spacings.s2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  texttab: {
    flex: 1,
    marginHorizontal: spacings.s2,
    paddingVertical: spacings.s1,
    borderRadius: borderRadius.r4,
    alignItems: 'center',
    // textAlign: 'center',
  },
  containerImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: spacings.s2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
