import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../../constants/spacings';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  bottomHandle: {alignItems: 'center'},
  container: {flex: 1, backgroundColor: colors.other.backgroundShet},
  touchable: {flex: 1},
  body: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listCategory: {
    borderWidth: 1,
    padding: spacings.s1,
    marginEnd: spacings.s1,
    marginBottom: spacings.s1,
    borderRadius: borderRadius.r4,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: spacings.s2,
  },
});
