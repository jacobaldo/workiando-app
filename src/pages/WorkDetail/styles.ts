import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {borderRadius, spacings} from '../../constants/spacings';
import {fontSizes} from '../../constants/fontSizes';

export const styles = StyleSheet.create({
  colorTexx: {
    color: colors.primary.primary100,
    textDecorationLine: 'underline',
  },
  container: {flexGrow: 1},
  body: {
    paddingHorizontal: 16,
    flex: 1,
  },
  containerProfile: {
    flex: 1,
  },
  cardUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacings.s1,
  },
  containerLogo: {
    paddingRight: spacings.s1,
    alignItems: 'center',
  },
  rowProfile: {
    flexDirection: 'row',
    marginEnd: spacings.s2,
  },
  rowDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleSection: {
    borderTopWidth: 1,
    borderColor: colors.neutral.neutral400,
    paddingVertical: spacings.s1,
    marginVertical: spacings.s1,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: spacings.s1,
  },

  titleFija: {
    color: colors.warning.warning100,
    fontWeight: 'bold',
    fontSize: fontSizes.vlarge,
  },

  description: {
    marginHorizontal: 5,
  },

  title: {
    fontWeight: 'bold',
    marginHorizontal: 5,
    fontSize: fontSizes.medium,
    textTransform: 'uppercase',
    flex: 1,
  },
  existingRequest: {
    borderRadius: borderRadius.r4,
    backgroundColor: colors.primary.primary100,
    paddingVertical: spacings.s0,
    paddingHorizontal: spacings.s1,
    fontWeight: 'bold',
  },
  cardInfomation: {
    marginHorizontal: 5,
    borderRadius: borderRadius.r4,
    paddingHorizontal: spacings.s2,
    marginVertical: spacings.s1,
    paddingVertical: spacings.s1,
  },

  imgPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: colors.primary.primary100,
    borderWidth: 1,
  },
  bottom: {paddingHorizontal: spacings.s2},
  iconStyle: {marginHorizontal: 5},

  btnStyle: {marginVertical: spacings.s1},

  containerIcon: {
    marginTop: 10,
    alignItems: 'stretch',
    flexDirection: 'column',
  },

  containerDetails: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDetails1: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: spacings.s4,
  },
});
