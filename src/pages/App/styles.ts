import {StyleSheet} from 'react-native';
import {Theme} from '../../provider/themeType';
import {borderRadius, spacings} from '../../constants/spacings';
export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    stackContainer: {
      flex: 1,
    },
    tabContainer: {
      borderWidth: 0.5,
      borderBottomWidth: 1,
      borderTopLeftRadius: borderRadius.r5,
      borderTopRightRadius: borderRadius.r5,
      paddingVertical: spacings.s0,
      backgroundColor: theme.primary100,
      borderColor: 'grey',
      position: 'absolute',
      shadowColor: '#091e42',
      shadowOffset: {
        width: 0,
        height: -5,
      },
      shadowOpacity: 0.05,
      shadowRadius: 3.84,
      elevation: 9,
    },
    text: {
      fontSize: 12,
      letterSpacing: 0.2,
    },
  });
