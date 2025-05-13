import {StyleSheet} from 'react-native';
import {borderRadius, spacings} from '../../constants/spacings';
import {colors} from '../../constants/colors';
import {Theme} from '../../provider/themeType';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    textSesion: {
      width: '100%',
      textAlign: 'center',
      marginVertical: spacings.s4,
    },
    imageBackground: {
      flex: 1,
      resizeMode: 'cover',
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
      height: 100,
      alignSelf: 'center',
      resizeMode: 'contain',
      marginBottom: 20,
    },
    registerContent: {paddingVertical: spacings.s2},
    iconLogin: {width: 20, height: 20, marginRight: spacings.s2},
    facebook: {
      backgroundColor: colors.informative.informative100,
      color: colors.white,
    },
    google: {
      backgroundColor: theme.backgroundColor,
      marginTop: spacings.s2,
      borderWidth: 1,
      borderColor: theme.neutral500,
    },
    googleText: {
      color: theme.textColor,
    },
    optionNumber: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      marginVertical: spacings.s2,
      borderWidth: 1,
      borderRadius: borderRadius.r5,
      borderColor: theme.primary100,
    },
    option: {
      flex: 1,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: borderRadius.r5,
      flexDirection: 'row',
    },
  });
