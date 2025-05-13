// import {NavigationContainer} from '@react-navigation/native';
import React from "react";
import "./global.css";
// import ToastModal from './src/components/2.Molecules/ToastModal';
// import HomeStack from './src/pages/App';
// import {navigationRef} from './src/utils/navigationref/RootNavigation';
import { PaperProvider } from "react-native-paper";
// import {AuthProvider} from './src/provider/AuthProvider';
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { ThemeProvider, useTheme } from "./src/provider/ThemeProvider";
import reducers from "./src/redux";
// import Geocoder from 'react-native-geocoding';
// import {API_KEY} from './src/services/api';

// Geocoder.init(API_KEY, { language: "es" }); // TO-REVIEW: disabled temporarily
const App = () => {
  const store = createStore(reducers);
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <PaperProvider theme={theme}>
        <Provider store={store}>
          {/* <NavigationContainer ref={navigationRef}> */}
          <SafeAreaView className="items-center justify-center flex-1">
            <Text className="text-red-700">
              Hola wefopjnvuefhsbv huedfsbvghdvffeijvbfuybvfehuv
              iefhvbuoyfebviuefnvbuofebvudefivbuoe ssss alfo
            </Text>
          </SafeAreaView>
          {/* <AuthProvider>
              <HomeStack />
            </AuthProvider>
            <ToastModal /> */}
          {/* </NavigationContainer> */}
        </Provider>
      </PaperProvider>
    </ThemeProvider>
  );
};

export default App;
