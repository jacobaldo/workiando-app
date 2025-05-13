import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
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
  btnOption: {
    alignItems: 'center',
    padding: 16,
  },
  buttomStyle: {
    marginVertical: 4,
  },
  listStyle: {marginVertical: 30},
});
