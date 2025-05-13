import React from "react";

import { View } from "react-native";
import { Text } from "react-native-paper";
import { useUser } from "../../provider/AuthProvider";
import CommonRouter from "./CommonRouter";

const HomeStack = () => {
  const { authState } = useUser();
  // return authState.isLoggetIn ? <AuthRouter /> : <CommonRouter />;
  return authState.isLoggetIn ? (
    <View>
      <Text>holaaa</Text>
    </View>
  ) : (
    <CommonRouter />
  );
};

export default HomeStack;
