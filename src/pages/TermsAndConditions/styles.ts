import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacings} from '../../constants/spacings';

const styles = StyleSheet.create({
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
  },
  text4: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardConditions: {
    backgroundColor: colors.tertiary.tertiary100,
    borderRadius: 30,
    padding: 20,
    paddingVertical: '22%',
    marginHorizontal: 48,
    marginVertical: 10,
    marginBottom: '6%',
  },
  checkBox: {
    borderRadius: 20,
    backgroundColor: colors.white,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacings.s1,
    marginHorizontal: spacings.s1,
  },
  checkMark: {
    fontSize: 16,
    color: colors.warning.warning100,
  },
  cardCheckBox: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: '8%',
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
});
export default styles;
