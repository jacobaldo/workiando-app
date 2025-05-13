import {StyleSheet} from 'react-native';
import {spacings} from '../../../../../constants/spacings';
import {fontSizes} from '../../../../../constants/fontSizes';

export const styles = StyleSheet.create({
  container: {flexGrow: 1},
  body: {
    flex: 1,
  },
  headerSelect: {
    height: 40,
    paddingHorizontal: spacings.s2,
  },
  search: {
    margin: spacings.s2,
    padding: 0,
  },
  options: {
    marginRight: spacings.s1,
    height: 40,
  },
  text: {
    fontSize: fontSizes.vmsmall,
  },
  listUser: {
    marginTop: spacings.s2,
  },
  cardList: {
    margin: spacings.s2,
  },
});
