import {StyleSheet} from 'react-native';
import {spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: spacings.s1,
  },
  button: {alignItems: 'center', width: '100%', marginTop: spacings.s3},
  textStyleTitle: {
    color: colors.neutral.neutral900,
    textAlign: 'center',
    height: 60,
  },
  textStyle: {
    color: colors.neutral.neutral900,
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
  },
  imgPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
