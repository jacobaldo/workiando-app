// ReactotronConfig.js
import Reactotron from "reactotron-react-native";

Reactotron.configure() // controla la conexión con el cliente Reactotron
  .useReactNative() // agrega todos los plugins de React Native
  .connect(); // conecta a Reactotron

// Opcional: para ver los logs de consola en Reactotron
console.tron = Reactotron;

export default Reactotron;
