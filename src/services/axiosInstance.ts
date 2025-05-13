import axios from 'axios';
import {CONFIG_URL} from './api';

const PUBLIC_ENDPOINTS = [
  '/auth/signin',
  '/auth/signup',
  '/auth/refresh-token',
];

type CreateAxiosParams = {
  token?: string;
  refreshToken?: string;
  login: (user: any, auth: any) => void;
};

const createAxiosInstance = ({
  token,
  refreshToken,
  login,
}: CreateAxiosParams) => {
  const instance = axios.create({
    baseURL: CONFIG_URL,
  });

  // Refresca el token en caso de que expire
  const onRefreshToken = async (): Promise<string> => {
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await axios.post(`${CONFIG_URL}/auth/refresh-token`, {
        refreshToken: refreshToken,
      });

      const newToken = response.data?.auth?.token;
      const user = response.data?.user;

      if (newToken && user) {
        // Actualizamos el estado global con el nuevo token
        login(user, response?.data?.auth);
        return newToken;
      } else {
        throw new Error('Failed to refresh token');
      }
    } catch (error) {
      console.log('Error al refrescar el token:', error);
      throw error;
    }
  };

  // Interceptor de request
  instance.interceptors.request.use(
    async (config: any) => {
      const isPublic = PUBLIC_ENDPOINTS.some(endpoint =>
        config.url.includes(endpoint),
      );

      if (token && !isPublic) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    error => Promise.reject(error),
  );

  // Interceptor de response
  instance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;

      const isPublic = PUBLIC_ENDPOINTS.some(endpoint =>
        originalRequest.url.includes(endpoint),
      );

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        !isPublic
      ) {
        originalRequest._retry = true;

        try {
          const newToken = await onRefreshToken();

          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          instance.defaults.headers.common.Authorization = `Bearer ${newToken}`;

          return instance(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    },
  );

  return instance;
};

export {createAxiosInstance};
