// /**
//  * @format
//  */

// import { AppRegistry } from "react-native";
// import "react-native-gesture-handler";
// import App from "./App";
// import { name } from "./app.json";
// import "./ReactotronConfig";
// AppRegistry.registerComponent(name, () => App);
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import App from "./App";
import "./global.css";
import "./ReactotronConfig";
registerRootComponent(App);
