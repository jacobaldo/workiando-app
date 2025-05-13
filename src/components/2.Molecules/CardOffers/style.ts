import { Dimensions, StyleSheet } from 'react-native';
import { spacings } from '../../../constants/spacings';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  cardStyle: {
    width: Dimensions.get('window').width * 0.6,
    padding: spacings.s1,
    backgroundColor: colors.other.background,
    alignItems: 'center',
    alignContent: 'flex-start',
  },

  detailStyle: { color: colors.white },

});
