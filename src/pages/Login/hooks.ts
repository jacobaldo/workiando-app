import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useEffect, useRef, useState } from "react";
import { showMessage } from "react-native-flash-message";
import useAxiosPost from "../../services/apiPost";

const useLogin = ({ navigation, login }: any) => {
  const { postData } = useAxiosPost();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const numberRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const [methodId, setMethodId] = useState<string>("sms");

  // 🔹 Configura Google al iniciar
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "530045422051-7n6pnfuoio5ral1hd6r6uugpu9lq0cjv.apps.googleusercontent.com",
      iosClientId:
        "530045422051-4t68b87fvipor74fr4hep1fljtn03j9l.apps.googleusercontent.com",

      offlineAccess: true,
      scopes: ["profile", "email"],
      forceCodeForRefreshToken: true,
      profileImageSize: 120,
    });
  }, []);

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 🔹 LOGIN CON GOOGLE
  const loginWithGoogle = async () => {
    try {
      setLoading(true);

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      const user = userInfo?.data?.user;
      postData<any>("/auth/signup", {
        email: user?.email,
        name: user?.givenName,
        lastname: user?.familyName,
        photo: user?.photo,
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
    } catch (error: any) {
      console.log("Google SignIn Error:", error);
      showMessage({
        message: "Error",
        description: error?.message ?? "Error en Google Sign-In",
        type: "danger",
        icon: "danger",
      });
      setLoading(false);
    }
  };

  // 🔹 LOGIN NORMAL
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

  return {
    handleSignIn,
    email,
    password,
    setEmail,
    setPassword,
    loading,
    isEmailValid,
    navigateRegister,
    loginWithGoogle, // 👈 ahora usas esto
    numberRef,
    phoneNumber,
    setPhoneNumber,
    methodId,
    setMethodId,
  };
};

export default useLogin;
