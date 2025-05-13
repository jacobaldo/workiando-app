import {useEffect} from 'react';
import {AcceptedWorksProps} from './types';
import useAxiosGet from '../../../../../services/apiGet';
import {Categories} from '../../../../Search/types';

export const useAcceptedWorks = ({navigation}: AcceptedWorksProps) => {
  const {data, getData, loading, refreshData} = useAxiosGet<Categories>(
    '/works?status=approved',
  );

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigationSelect = () => {
    navigation.navigate('Profile', {navigation});
  };

  return {data, loading, refreshData, navigationSelect};
};
