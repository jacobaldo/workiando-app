import {useEffect, useState} from 'react';
import useAxiosGet from '../../services/apiGet';
import {Category} from '../ConfigureEmploye/types';
import {SelectPreferencesProps} from './types';
import useAxiosPut from '../../services/apiPut';
import {useUser} from '../../provider/AuthProvider';
import ToastController from '../../components/2.Molecules/ToastModal/ToastController';

export const useSelectProps = ({navigation}: SelectPreferencesProps) => {
  const {
    authState: {user, token},
    login,
  } = useUser();
  const {data, getData, loading} = useAxiosGet<Category[]>('/category');
  const [loadingPut, setLoadingPut] = useState<boolean>(false);
  const [filterCategories, setFilterCategories] = useState<string[]>([]);
  // console.log('------------------', user);
  const {data: dataPut, putData} = useAxiosPut();
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('user', user);
  // const aaa = {
  //   __v: 0,
  //   _id: '661d52136ca4f0cfe7406631',
  //   access: '2024-04-12T15:43:36.687Z',
  //   account: true,
  //   active: {date: '2025-04-01T23:10:43.311Z', status: false},
  //   categoryIds: [
  //     '6634648e49f5d1dc1124f89c',
  //     '661d6fc16ca4f0cfe7406671',
  //     '661d6f8e6ca4f0cfe740666d',
  //   ],
  //   createdAt: '2024-04-15T16:13:07.531Z',
  //   document: {number: null, type: 'dni'},
  //   email: 'aldochd13@gmail.com',
  //   lastname: 'Chipana Delgado',
  //   location: {latitude: 0, longitude: 0},
  //   name: 'Jacob Aldo',
  //   number: '987654321',
  //   photo: null,
  //   reputation: 0,
  //   role: [
  //     {
  //       _id: '661d52136ca4f0cfe7406632',
  //       createdAt: '2024-04-15T16:13:07.530Z',
  //       label: 'Admin',
  //       type: '1',
  //       updatedAt: '2024-04-15T16:13:07.530Z',
  //     },
  //   ],
  //   source: 'EMAIL',
  //   status: 'Hey estoy usando chambea pe',
  //   updatedAt: '2025-03-13T17:08:32.963Z',
  //   verified: false,
  // };
  const handleFilterCategory = (filter: string) => {
    setFilterCategories(prevCategories => {
      if (prevCategories.includes(filter)) {
        // Si ya está seleccionada, la eliminamos
        return prevCategories.filter(item => item !== filter);
      }

      // Si no está y hay menos de 6, la agregamos
      if (prevCategories.length >= 6) {
        ToastController.showModal(
          'Selecciona tus Preferencias de búqueda, mínimo 3 y máximo 6',
          {type: 'info'},
          'top',
          true,
        );
        return prevCategories;
      }

      // Si ya hay 6 categorías, no hacemos nada
      return [...prevCategories, filter];
    });
  };

  const handleAddPreferences = () => {
    const editValue = {
      categoryIds: filterCategories,
    };

    putData(`/auth/${user?._id}`, editValue)
      .then(() => {
        setLoadingPut(false);
        // navigation.goBack();
      })
      .catch(() => {
        setLoadingPut(false);
      });
  };

  useEffect(() => {
    if (dataPut && token) {
      login(dataPut, token);
      navigation.reset;
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPut]);
  useEffect(() => {
    if (user?.categoryIds) {
      setFilterCategories(user.categoryIds);
    }
  }, [user?.categoryIds]);
  return {
    data,
    loading,
    handleFilterCategory,
    filterCategories,
    handleAddPreferences,
    loadingPut,
  };
};
