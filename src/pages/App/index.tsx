import React from "react";

import { useUser } from "../../provider/AuthProvider";
import AuthRouter from "./AuthRouter";
import CommonRouter from "./CommonRouter";

const HomeStack = () => {
  const { authState } = useUser();
  return authState.isLoggetIn ? <AuthRouter /> : <CommonRouter />;
};

export default HomeStack;
