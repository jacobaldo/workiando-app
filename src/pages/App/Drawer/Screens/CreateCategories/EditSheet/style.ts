import {StyleSheet} from 'react-native';
import {colors} from '../../../../../../constants/colors';
import {spacings} from '../../../../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.other.backgroundShet},
  touchable: {flex: 1},
  body: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
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
