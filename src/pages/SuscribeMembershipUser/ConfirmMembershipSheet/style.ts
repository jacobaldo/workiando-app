import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {borderRadius, spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.other.backgroundShet},
  touchable: {flex: 1},
  body: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  buttomStyle: {
    marginVertical: 4,
  },
  filterContainer: {
    padding: spacings.s2,
  },
  filterCard: {
    padding: spacings.s1,
    borderWidth: 1,
    margin: spacings.s0,
    borderRadius: borderRadius.r4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginTop: spacings.s2,
  },
  informationSlider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  text3: {
    textAlign: 'right',
    flex: 1,
  },
});
