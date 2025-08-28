import AsyncStorage from "@react-native-async-storage/async-storage";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import SplashScreen from "../components/2.Molecules/SplashScreen";
import { clearSubscription } from "../redux/Subscriptions/subscriptionAcction";
import { authReducer } from "./authReducer";
import { AuthState, TokenProps, User } from "./types";

export const authInitialState: AuthState = {
  isLoggetIn: false,
  user: null,
  token: null,
};

export interface AuthContextProvider {
  authState: AuthState;
  login: (UserData: User, tokenUser: TokenProps) => void;
  logout: () => void;
}

const AuthContext = createContext({} as AuthContextProvider); // adds user context type

export const AuthProvider = ({ children }: any) => {
  const dispatchRedux = useDispatch();
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const [loading, setLoading] = useState(true);

  const login = async (userData: User, tokenUser: TokenProps) => {
    await AsyncStorage.setItem("User", JSON.stringify(userData));
    await AsyncStorage.setItem("Token", JSON.stringify(tokenUser));
    dispatch({ type: "signIn", payload: { user: userData, token: tokenUser } });

    // setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const silentLogin = async () => {
    const data: any = await AsyncStorage.getItem("User");
    const Token: any = await AsyncStorage.getItem("Token");
    if (data && Token) {
      dispatch({
        type: "signIn",
        payload: { user: JSON.parse(data), token: JSON.parse(Token) },
      });
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  const logout = async () => {
    try {
      const onboardingCompleted = await AsyncStorage.getItem(
        "onboardingCompleted"
      );
      await AsyncStorage.clear();
      if (onboardingCompleted !== null) {
        await AsyncStorage.setItem("onboardingCompleted", onboardingCompleted);
      }

      // OneSignal.removeExternalUserId();
      dispatch({ type: "signOut" });
      dispatchRedux(clearSubscription());
    } catch (error) {
      console.error("Error al limpiar AsyncStorage:", error);
    }
    await GoogleSignin.signOut();
  };
  useEffect(() => {
    silentLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authState,
      }}
    >
      {loading ? <SplashScreen /> : children}
    </AuthContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
