import React, {createContext, useState, useContext} from 'react';
import {darkTheme, lightTheme} from '../constants/styles';
import {Appearance} from 'react-native';

export const ThemeContext = createContext({
  theme: darkTheme, // Valor predeterminado
  toggleTheme: () => {},
  isDarkMode: true,
});

export const ThemeProvider = ({children}: any) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    Appearance.getColorScheme() === 'dark',
  );

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        theme: isDarkMode ? darkTheme : lightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
