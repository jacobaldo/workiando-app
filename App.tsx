import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import FlashMessage from "react-native-flash-message";
import Geocoder from "react-native-geocoding";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./global.css";
import HomeStack from "./src/pages/App";
import { AuthProvider } from "./src/provider/AuthProvider";
import { ThemeProvider, useTheme } from "./src/provider/ThemeProvider";
import reducers from "./src/redux";
import { API_KEY } from "./src/services/api";
import { navigationRef } from "./src/utils/navigationref/RootNavigation";

Geocoder.init(API_KEY, { language: "es" }); // TO-REVIEW: disabled temporarily
const App = () => {
  const store = createStore(reducers);
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <AuthProvider>
              <HomeStack />
            </AuthProvider>
            <FlashMessage position="top" />
          </NavigationContainer>
        </Provider>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
