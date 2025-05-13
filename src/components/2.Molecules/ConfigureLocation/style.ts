import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {borderRadius, spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  selectUbication: {
    backgroundColor: colors.primary.primary100,
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: borderRadius.r4,
    marginBottom: spacings.s1,
  },
});
