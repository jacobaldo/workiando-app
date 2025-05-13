import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {borderRadius, spacings} from '../../constants/spacings';
const styles = StyleSheet.create({
  ButtonModal: {
    width: '80%',
  },
  styleButtonModal: {
    backgroundColor: colors.secondary.secondary100,
  },
  warning: {
    backgroundColor: colors.tertiary.tertiary100,
    borderColor: colors.black,
    borderWidth: 2,
  },
  warning1: {
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.secondary.secondary100,
    // borderRadius: 10,
    padding: 16,
    borderColor: 'rgba(0,0,0,0.7)',
    borderWidth: 10,
    alignItems: 'center',
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  container1: {
    flex: 1,
    marginTop: spacings.s2,
    // paddingHorizontal: spacings.s2,
  },
  headerImage: {height: 30, alignSelf: 'center', resizeMode: 'contain'},
  styleButton: {
    marginVertical: 10,
  },
  styleButton1: {
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  scroll: {
    // paddingBottom: spacings.s2,
  },
  contButton: {
    backgroundColor: 'transparent',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: spacings.s2,
    marginBottom: 0,
  },
  input1: {
    borderWidth: 2,
    paddingVertical: -2,
    paddingHorizontal: 10,
    borderColor: colors.white,
    marginRight: 40,
  },

  namecompany: {
    // flexDirection: 'row',
    marginHorizontal: spacings.s2,
  },
  location: {
    alignItems: 'flex-start',
    marginHorizontal: spacings.s2,
  },
  input: {
    borderWidth: 2,
    paddingVertical: -2,
    paddingHorizontal: 10,
    borderColor: colors.white,
    borderRadius: 10,
    maxWidth: '80%',
    color: colors.white,
  },
  input2: {
    // borderWidth: 2,
    paddingVertical: -2,
    paddingHorizontal: 10,
    // borderColor: colors.white,
    maxWidth: '80%',
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.secondary.secondary100,
  },
  jobImage: {height: 200, alignSelf: 'center', resizeMode: 'contain'},
  container: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    // resizeMode: 'cover', // Puedes ajustar el modo de escala según tus necesidades
    // justifyContent: 'center', // Puedes ajustar la alineación según tus necesidades
  },

  text1: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    color: colors.secondary.secondary100,
  },

  text3: {
    textAlign: 'center',
  },
  text5: {
    textAlign: 'center',
    color: colors.tertiary.tertiary100,
    fontWeight: 'bold',
    backgroundColor: colors.black,
    marginVertical: 10,
  },
  imageCardType: {
    borderRadius: 60,
    height: 108,
    width: 108,
    backgroundColor: Colors.white,
    padding: 4,
    borderWidth: 4,
    borderColor: colors.primary.primary100,
    alignSelf: 'center',
  },
  imageType: {
    // borderRadius: 50,
    height: 94,
    width: 94,
  },
  change: {
    borderRadius: 50,
    height: 24,
    width: 24,
    backgroundColor: colors.primary.primary100,
    alignSelf: 'center',
    marginTop: -12,
  },
  icon: {
    alignSelf: 'center',
    marginTop: 2,
  },
  containerDropDown: {
    paddingVertical: -2,
    maxWidth: '80%',
  },
  labelDropDown: {
    color: colors.black,
  },
  DropDown: {
    alignSelf: 'center',
    maxWidth: '80%',
  },
  schedule1: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  schedule: {
    justifyContent: 'space-around',
    width: '50%',
    padding: 10,
  },

  dateItem: {
    maxWidth: '80%',
  },
  slider: {
    width: 300,
    height: 40,
  },
  informationSlider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacings.s1,
    borderRadius: borderRadius.r4,
  },
});
export default styles;
