import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {spacings} from '../../constants/spacings';
import {fontSizes} from '../../constants/fontSizes';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollView: {marginTop: spacings.s2, flex: 1},
  textSesion: {
    width: '100%',
    textAlign: 'center',
    marginVertical: spacings.s4,
    color: colors.white,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  body: {
    marginHorizontal: spacings.s2,
    justifyContent: 'center',
    flex: 1,
  },
  containerImputFiel: {
    marginBottom: spacings.s2,
  },
  imageType: {
    height: 46,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  registerContent: {padding: spacings.s2},
});
