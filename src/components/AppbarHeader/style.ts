import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {borderRadius, spacings} from '../../constants/spacings';

export const styles = StyleSheet.create({
  buttonTitlePresseable: {
    position: 'absolute',
    left: 10,
    marginLeft: 10,
  },
  headerAvatar: {top: -50, left: -5},
  titleBox: {
    marginTop: 5,
    alignItems: 'center',
    width: '80%',
  },
  TitleStyleHome: {
    fontSize: 24,
    marginTop: 15,
  },
  LeftIcon: {
    left: 10,
  },
  appBar: {
    // marginTop: Platform.OS === 'android' ? 20 : 0,
    marginTop: 0,
    backgroundColor: colors.primary.primary100,
    elevation: 0,
  },
  appBarCenter: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.primary.primary100,
    elevation: 0,
    alignSelf: 'center',
  },
  backdrop: {
    marginHorizontal: -18,
    position: 'absolute',
  },
  gradient: {
    width: '100%',
    height: '20%',
    position: 'absolute',
    bottom: -1,
  },
  filterTransactions: {
    color: colors.primary.primary100,
    marginRight: spacings.s1,
    marginTop: spacings.s0,
  },
  notificationsContainerHome: {
    marginRight: 0,
    backgroundColor: colors.neutral.neutral50,
    borderRadius: 20,
    height: 33,
    width: 33,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.neutral.neutral800,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  notificationsContainer: {
    margin: 12,
    marginRight: 0,
    backgroundColor: colors.neutral.neutral50,
    borderRadius: 15,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: colors.neutral.neutral600,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  default: {
    backgroundColor: colors.neutral.neutral800,
  },
  white: {
    backgroundColor: colors.primary.primary100,
  },
  black: {
    backgroundColor: colors.neutral.neutral50,
  },
  blue: {
    backgroundColor: colors.primary.primary100,
  },
  blueLight: {
    backgroundColor: colors.secondary.secondary100,
  },
  neutral: {
    backgroundColor: colors.neutral.neutral50,
  },
  secondary: {
    marginHorizontal: 16,
  },
  logoQikContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    marginLeft: 4,
  },
  helpButtonText: {
    color: colors.primary.primary80,
  },
});
export const stylesappBarCenter = StyleSheet.create({
  default: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.secondary.secondary100,
    elevation: 0,
    alignSelf: 'center',
  },
  white: {
    // marginTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.primary.primary100,
    elevation: 0,
    alignSelf: 'center',
  },
  black: {
    // marginTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.primary.primary100,
    elevation: 0,
    alignSelf: 'center',
  },
  blue: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.primary.primary100,
    elevation: 0,
  },
  blueLight: {
    marginTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: colors.primary.primary100,
    elevation: 0,
  },
  secondary: {
    marginTop: Platform.OS === 'android' ? 30 : 30,
    backgroundColor: colors.neutral.neutral50,
    elevation: 0,
  },
  neutral: {
    marginTop: Platform.OS === 'android' ? 30 : 30,
    backgroundColor: colors.neutral.neutral50,
    elevation: 0,
  },
});
export const stylesIcon = StyleSheet.create({
  default: {
    color: colors.white,
  },
  white: {
    color: colors.primary.primary100,
  },
  black: {
    color: colors.neutral.neutral900,
  },
  blue: {
    color: colors.neutral.neutral50,
  },
  blueLight: {
    color: colors.neutral.neutral50,
  },
  secondary: {
    color: colors.neutral.neutral900,
  },
  neutral: {
    color: colors.primary.primary100,
  },
});
export const stylesTitle = StyleSheet.create({
  default: {
    color: colors.white,
  },
  white: {
    color: colors.neutral.neutral50,
  },
  black: {
    color: colors.neutral.neutral900,
  },
  blue: {
    color: colors.neutral.neutral50,
  },
  blueLight: {
    color: colors.neutral.neutral50,
  },
  neutral: {
    color: colors.neutral.neutral50,
  },
  secondary: {
    color: colors.primary.primary100,
    lineHeight: 28,
    fontSize: 20,
    alignSelf: 'center',
  },
});
export const styleTitleBox = StyleSheet.create({
  default: {
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  white: {
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  black: {
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  blue: {
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  blueLight: {
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  neutral: {
    marginTop: 5,
    alignItems: 'center',
    flex: 1,
  },
  secondary: {
    width: '100%',
    height: '115%',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export const styleIconRight = StyleSheet.create({
  default: {
    right: 0,
    overflow: 'hidden',
  },
  Support: {
    right: 0,
    overflow: 'hidden',
  },
  Expense: {
    right: -130,
    overflow: 'hidden',
  },
  Home: {
    right: 0,
    overflow: 'hidden',
  },
  Products: {
    right: -25,
    overflow: 'hidden',
  },
});

export const styleFilter = StyleSheet.create({
  filterContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: spacings.s1,
    zIndex: -1,
  },
  label: {
    paddingLeft: 35,
  },
  inputWrapper: {
    width: '85%',
    alignItems: 'flex-start',
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: borderRadius.r4,
    height: spacings.s5,
  },
  inputStyle: {
    padding: 6,
  },
  inputAdorment: {
    top: 7,
  },
});
