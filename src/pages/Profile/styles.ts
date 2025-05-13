import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacings} from '../../constants/spacings';
import {fontSizes} from '../../constants/fontSizes';

export const styles = StyleSheet.create({
  textColor: {color: 'white'},
  info: {
    alignSelf: 'center',
  },
  body: {
    flexGrow: 1,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: spacings.s1,
  },
  containerDetails: {marginHorizontal: spacings.s2},
  titleFija: {
    color: colors.warning.warning100,
    fontWeight: 'bold',
    fontSize: fontSizes.vlarge,
  },

  imgPerfil: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: colors.neutral.neutral200,
    borderWidth: 1,
    marginBottom: 10,
  },

  btnStyle: {
    marginVertical: spacings.s1,
    borderRadius: spacings.s1,
    backgroundColor: colors.primary.primary100,
    paddingVertical: spacings.s1,
    paddingHorizontal: spacings.s2,
    elevation: 8, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOpacity: 0.6,
    shadowRadius: 4,
    marginHorizontal: spacings.s1,
    width: '30%',
    alignItems: 'center',
  },

  iconStyle: {marginHorizontal: 5},

  cardWorkStyle: {backgroundColor: colors.secondary.secondary100},
  containerWorks: {flexDirection: 'column'},
  cardWork: {marginVertical: spacings.s1, alignItems: 'center'},

  containerLogo: {
    paddingHorizontal: spacings.s2,
    paddingTop: spacings.s2,
    alignItems: 'center',
    // justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  containerLogos: {
    paddingHorizontal: spacings.s2,
    paddingTop: spacings.s2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerDetails2: {
    marginTop: 10,
    alignItems: 'stretch',
    flexDirection: 'row',
  },

  rating: {
    alignItems: 'flex-start',
    color: '#faf216',
  },

  containerIcon: {
    marginTop: 10,
    alignItems: 'stretch',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  containerIcon1: {alignItems: 'center', flexDirection: 'column'},

  containerRating: {alignItems: 'center', flexDirection: 'column'},

  ratingStyle: {paddingVertical: 10},

  //btnStyle: { marginVertical: spacings.s1 },

  //iconStyle: { marginHorizontal: 5 },

  //cardWorkStyle: { backgroundColor: colors.secondary.secondary100 },
  //containerWorks: { flexDirection: 'column' },
  //cardWork: { marginRight: spacings.s1 },
});
