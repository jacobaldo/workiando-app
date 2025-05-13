import {useState} from 'react';
import ToastController from '../components/2.Molecules/ToastModal/ToastController';
import {useUser} from '../provider/AuthProvider';
import {createAxiosInstance} from './axiosInstance';

interface ApiResponse<T = any> {
  status: number;
  data: T;
}

const useAxiosPost = () => {
  const {
    login,
    authState: {token},
  } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async <T>(
    url: string,
    requestData: any,
  ): Promise<ApiResponse<T>> => {
    setLoading(true);

    return new Promise(async (resolve, reject) => {
      try {
        const axios = createAxiosInstance({
          token: token?.accessToken,
          refreshToken: token?.refreshToken,
          login: login,
        });
        const response = await axios.post(url, requestData);
        resolve({
          status: response.status,
          data: response.data as T,
        }); // Resuelve con el estatus y los datos
      } catch (e: any) {
        ToastController.showModal(
          'Error de conexion',
          {type: 'danger'},
          'top',
          true,
        );

        console.log('Error:', e);
        reject({
          status: e.response?.status,
          message:
            e.response?.data?.message || e.message || 'Error desconocido',
        });
      } finally {
        setLoading(false);
      }
    });
  };

  return {loading, postData};
};

export default useAxiosPost;
