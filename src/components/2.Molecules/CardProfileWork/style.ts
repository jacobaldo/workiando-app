import {Dimensions, StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardStyle: {
    width: Dimensions.get('window').width * 0.6,
    padding: spacings.s1,
    backgroundColor: colors.tertiary.tertiary100,
    borderRadius: borderRadius.r2,
    alignItems: 'center',
  },
  button: {
    marginTop: spacings.s1,
    width: '100%',
  },
});
