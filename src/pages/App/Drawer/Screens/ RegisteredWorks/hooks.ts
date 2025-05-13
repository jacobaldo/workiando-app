import {useEffect} from 'react';
import {RegisteredWorksProps} from './types';
import useAxiosGet from '../../../../../services/apiGet';
import {Categories, Work} from '../../../../Search/types';
import useAxiosPut from '../../../../../services/apiPut';
import ToastController from '../../../../../components/2.Molecules/ToastModal/ToastController';

export const useRegisteredWorks = ({}: RegisteredWorksProps) => {
  const {data, getData, loading, refreshData} = useAxiosGet<Categories>(
    '/works?status=created',
  );
  const {putData, loading: loadingPut} = useAxiosPut();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressAcept = (item: Work) => {
    console.log('item', item);
    const body = {
      status: 'approved',
    };
    putData(`/works/${item._id}`, body).then(() => {
      refreshData();
      ToastController.showModal(
        'Anuncio Aceptado',
        {type: 'success'},
        'top',
        true,
      );
    });
  };

  return {data, loading, refreshData, onPressAcept, loadingPut};
};
