import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

const HeaderDrawer = () => {
  return (
    // <SafeAreaView style={styles.headerContainer}>
    <Image
      resizeMode="contain"
      source={require("../../../../assets/banner.png")}
      width={130}
      height={40}
      style={styles.headerImage}
    />
    // </SafeAreaView>
  );
};

export default HeaderDrawer;
