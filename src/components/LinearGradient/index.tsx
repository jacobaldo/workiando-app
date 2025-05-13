import React, {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../../provider/ThemeProvider';
// import {colors} from '../../constants/colors';
import {styles} from './styles';
import {LinearProps} from './types';

const Gradient = ({children}: LinearProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <LinearGradient
      colors={[
        theme.colors.background,
        theme.backgroundColor,
        // theme.backgroundColor,
        // theme.backgroundColor,
        // theme.gradientConvine,
        // colors.primary.primary100,
      ]}
      style={styles.gradientContainer}>
      {children}
    </LinearGradient>
  );
};
export default Gradient;
