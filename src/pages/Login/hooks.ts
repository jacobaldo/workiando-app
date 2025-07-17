import axios from "axios";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useRef, useState } from "react";
import { showMessage } from "react-native-flash-message";
import useAxiosPost from "../../services/apiPost";
// import { config } from "@/src/utils/googleConfig";
import { config } from "../../utils/googleConfig";

const useLogin = ({ navigation, login }: any) => {
  const { postData } = useAxiosPost();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const numberRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const [methodId, setMethodId] = useState<string>("sms");
  const [request, response, promptAsync] = Google.useAuthRequest(config);
  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  useEffect(() => {
    if (response?.type === "success") {
      fetchUserInfo(response.authentication?.accessToken);
    }
  }, [response]);
  const getGoogleUserInfo = async (token: string) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const { email, given_name, family_name, picture } = response.data;

      return { email, given_name, family_name, picture };
    } catch (error) {
      console.error("Error fetching Google user info:", error);
      return null;
    }
  };

  const fetchUserInfo = async (token?: string) => {
    if (!token) return;
    // setIsLoading(true);
    try {
      const userInfo = await getGoogleUserInfo(token);
      if (!userInfo) return;

      const { email, given_name, family_name, picture } = userInfo;
      // console.log("infoo", userInfo);
      // const aa = {
      //   email: "aldochd13@gmail.com",
      //   family_name: "Chipana Delgado",
      //   given_name: "Jacob Aldo",
      //   picture:
      //     "https://lh3.googleusercontent.com/a/ACg8ocJpVCx405TQun7Ew236BY8vESmpDsjIjCsNM6mqD8YYs17PMr4=s96-c",
      // };

      postData<any>("/auth/signup", {
        // id: data.user.id,
        email: email,
        name: given_name,
        lastname: family_name,
        photo: picture,
        source: "GOOGLE",
      })
        .then((resp) => {
          if (resp.data) {
            login(resp.data?.user, resp.data?.auth);
          }
          setLoading(false);
        })
        .catch((error) => {
          showMessage({
            message: "Error",
            description: error.message ?? "Error al obtener datos del usuario",
            type: "danger",
            icon: "danger",
          });

          setLoading(false);
        });
    } catch (error) {
      showMessage({
        message: "Error",
        description: "Error in google",
        type: "danger",
        icon: "danger",
      });
    }
  };

  const handleSignIn = () => {
    setLoading(true);
    if (isEmailValid() && password.length > 0) {
      postData<any>("/auth/signin", {
        username: email,
        password,
        source: "EMAIL",
      })
        .then((resp) => {
          if (resp.data) {
            login(resp.data?.user, resp.data?.auth);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log("errrr", error);

          showMessage({
            message: "Error!!",
            description: error.message ?? "Error al obtener datos del usuario",
            type: "danger",
            icon: "danger",
          });

          setLoading(false);
        });
    }
  };
  const navigateRegister = () => {
    navigation.navigate("Register");
  };

  const loginWithFacebook = async () => {
    // navigation.navigate('Register');
  };

  const SignInWithNumber = () => {};

  return {
    handleSignIn,
    email,
    password,
    setEmail,
    setPassword,
    loading,
    isEmailValid,
    navigateRegister,
    promptAsync,
    loginWithFacebook,
    numberRef,
    phoneNumber,
    setPhoneNumber,
    methodId,
    setMethodId,
    SignInWithNumber,
  };
};

export default useLogin;
