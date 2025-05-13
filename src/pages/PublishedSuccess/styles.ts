import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacings} from '../../constants/spacings';

const styles = StyleSheet.create({
  text1: {
    textAlign: 'center',
    color: colors.black,
    fontWeight: 'bold',
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
    marginHorizontal: 48,
    backgroundColor: colors.secondary.secondary100,
    padding: 16,
    paddingVertical: 16,
    borderColor: 'rgba(0,0,0,0.7)',
    borderWidth: 16,
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
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Puedes ajustar el modo de escala según tus necesidades
    justifyContent: 'center', // Puedes ajustar la alineación según tus necesidades
  },
  text3: {
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: 20,
  },

  cardCheckBox: {
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: '8%',
    marginHorizontal: 40,
  },
  styleButton: {
    width: '70%',
    alignSelf: 'center',
    borderRadius: 10,
    // marginBottom: '8%',
  },
  imageType: {
    height: 46,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  container1: {
    flex: 1,
    marginTop: '16%',
  },
  text5: {
    textAlign: 'center',
    color: colors.tertiary.tertiary100,
    fontWeight: 'bold',
    backgroundColor: colors.black,
    marginVertical: 10,
  },
});
export default styles;
