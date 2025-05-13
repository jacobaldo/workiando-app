import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { styles } from "./style";

const SplashScreen = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.img}
        resizeMode="contain"
        source={require("./../../../assets/banner.png")}
      />
      <ActivityIndicator />
    </View>
  );
};
export default SplashScreen;
