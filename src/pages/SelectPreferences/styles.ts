import {StyleSheet} from 'react-native';
import {spacings} from '../../constants/spacings';
import {colors} from '../../constants/colors';

export const styles = StyleSheet.create({
  containerBack: {
    paddingHorizontal: spacings.s2,
    paddingTop: spacings.s2,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {
    flexGrow: 1,
  },
  body: {
    marginHorizontal: spacings.s2,
    justifyContent: 'center',
    flex: 1,
  },
  scrollView: {marginTop: spacings.s2, flex: 1},
  listFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: spacings.s2,
  },
  registerContent: {padding: spacings.s2},
  buttonTitlePresseable: {
    left: 10,
    marginLeft: 10,
  },
  icons: {
    color: colors.primary.primary100,
  },
});
