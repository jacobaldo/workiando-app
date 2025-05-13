import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useUser } from "../provider/AuthProvider";
import { createAxiosInstance } from "./axiosInstance";

const useAxiosPut = () => {
  const {
    login,
    authState: { token },
  } = useUser();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (url: string, requestData: any) => {
    setLoading(true);

    try {
      const axios = createAxiosInstance({
        token: token?.accessToken,
        refreshToken: token?.refreshToken,
        login: login,
      });
      const response = await axios.put(url, requestData);
      setData(response.data);
    } catch (e: any) {
      setError(e);
      showMessage({
        message: "Error!!",
        description: "Error de conexion",
        type: "danger",
        icon: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, putData };
};

export default useAxiosPut;
