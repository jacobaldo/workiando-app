import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {borderRadius, spacings} from '../../../../constants/spacings';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {width: 130, height: 40},
  publicPress: {
    marginRight: spacings.s2,
    backgroundColor: colors.secondary.secondary100,
    padding: spacings.s1,
    borderRadius: borderRadius.r4,
  },
  textStyle: {
    color: colors.black,
  },
});
