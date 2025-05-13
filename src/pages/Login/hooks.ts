import { useRef, useState } from "react";

import { showMessage } from "react-native-flash-message";
import useAxiosPost from "../../services/apiPost";
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import {LoginManager} from 'react-native-fbsdk';
const useLogin = ({ navigation, login }: any) => {
  const { postData } = useAxiosPost();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const numberRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const [methodId, setMethodId] = useState<string>("sms");

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // const googleSignin = GoogleSignin.configure({
  //   scopes: ['profile', 'email'],
  //   webClientId:
  //     '530045422051-7n6pnfuoio5ral1hd6r6uugpu9lq0cjv.apps.googleusercontent.com',
  //   offlineAccess: true,
  //   forceCodeForRefreshToken: true,
  //   profileImageSize: 120,
  //   iosClientId:
  //     '530045422051-4t68b87fvipor74fr4hep1fljtn03j9l.apps.googleusercontent.com',
  // });
  // useEffect(() => {
  //   googleSignin;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ['profile', 'email'],
  //     webClientId:
  //       '530045422051-7n6pnfuoio5ral1hd6r6uugpu9lq0cjv.apps.googleusercontent.com', // Web client ID de Firebase
  //     iosClientId:
  //       '530045422051-4t68b87fvipor74fr4hep1fljtn03j9l.apps.googleusercontent.com', // iOS client ID (si usas iOS)
  //     offlineAccess: true,
  //     forceCodeForRefreshToken: true,
  //     profileImageSize: 120,
  //   });
  // }, []);
  // useEffect(() => {
  //   if (isEmailValid() && password.length > 0) {
  //     setDesabled(true);
  //   } else {
  //     setDesabled(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [email, password, phoneNumber]);

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
  const loginWithGoogle = async () => {};

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
    loginWithGoogle,
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
