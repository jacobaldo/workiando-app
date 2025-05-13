import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {spacings} from '../../../../constants/spacings';

export const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {padding: 0},
  backgroundImg: {
    resizeMode: 'cover',
    flex: 1,
  },
  container: {
    borderBottomWidth: 1,
    margin: 0,
    padding: spacings.s2,
    borderBottomColor: colors.neutral.neutral500,
  },
  containerList: {flex: 1},
  headerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.neutral.neutral500,
    backgroundColor: colors.white,
  },
  options: {
    height: 40,
    marginVertical: spacings.s1,
  },
  options2: {
    height: 40,
  },
  optionsAdmin: {
    // margin: spacings.s1,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    height: 50,
  },
  optionsAdmin2: {
    marginHorizontal: spacings.s2,
    marginVertical: spacings.s0,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  body: {flex: 1},
  // text: {marginStart: spacings.s2, flex: 1},
  subTitleText: {marginStart: spacings.s3},
  footer: {
    flexDirection: 'row',
    paddingHorizontal: spacings.s2,
    paddingBottom: spacings.s2,
    alignItems: 'center',
  },
  rowTheme: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  lottie: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
});
