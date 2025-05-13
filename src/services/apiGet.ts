import { AxiosResponse } from "axios";
import { useState } from "react";

import { showMessage } from "react-native-flash-message";
import { useUser } from "../provider/AuthProvider";
import { createAxiosInstance } from "./axiosInstance";

// Definir un tipo genérico para la respuesta
type ResponseType<T> = {
  data: T | null;
  loading: boolean;
  error: any; // Puedes ajustar el tipo de error según tus necesidades
  getData: () => Promise<void>;
  refreshData: () => Promise<void>;
};

const useAxiosGet = <T>(url: string): ResponseType<T> => {
  const {
    login,
    authState: { token },
  } = useUser();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null); // Puedes ajustar el tipo de error según tus necesidades

  const getData = async () => {
    setLoading(true);
    try {
      const axios = createAxiosInstance({
        token: token?.accessToken,
        refreshToken: token?.refreshToken,
        login: login,
      });
      const response: AxiosResponse<T> = await axios.get<T>(url);
      setData(response.data);
    } catch (e) {
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

  const refreshData = async () => {
    setData(null);
    setLoading(true); // Establecer loading a true para indicar que se está refrescando
    await getData(); // Llamar a la función getData para obtener nuevos datos
  };

  return { data, loading, error, getData, refreshData };
};

export default useAxiosGet;
