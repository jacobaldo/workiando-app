import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {borderRadius, spacings} from '../../../constants/spacings';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.other.backgroundShet},
  touchable: {flex: 1},
  body: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: Dimensions.get('window').height * 0.85,
  },
  buttonContainer: {
    padding: spacings.s2,
  },
  buttomStyle: {
    marginVertical: 4,
  },
  filterContainer: {
    margin: spacings.s1,
    flex: 1,
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
