import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';

const styles = StyleSheet.create({
  jobImage: {height: 200, alignSelf: 'center', resizeMode: 'contain'},
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // Puedes ajustar el modo de escala según tus necesidades
    justifyContent: 'center', // Puedes ajustar la alineación según tus necesidades
  },
  text1: {
    textAlign: 'center',
    color: colors.white,
    marginBottom: 4,
  },
  text2: {
    textAlign: 'center',
    color: colors.black,
  },
  headerImage: {height: 60, alignSelf: 'center', resizeMode: 'contain'},
  contButton: {
    backgroundColor: colors.primary.primary100,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 40,
    marginBottom: 0,
  },
  container1: {
    flex: 1,
    marginTop: '20%',
  },
  styleButton: {
    backgroundColor: colors.secondary.secondary100,
    marginVertical: 10,
  },
  styleButton1: {
    backgroundColor: colors.white,
    marginVertical: 10,
  },
});
export default styles;
