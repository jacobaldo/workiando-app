import {useState} from 'react';
import ToastController from '../components/2.Molecules/ToastModal/ToastController';
import {createAxiosInstance} from './axiosInstance';
import {useUser} from '../provider/AuthProvider';

const useAxiosPut = () => {
  const {
    login,
    authState: {token},
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
      ToastController.showModal(
        'Error de conexion',
        {type: 'danger'},
        'top',
        true,
      );
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error, putData};
};

export default useAxiosPut;
