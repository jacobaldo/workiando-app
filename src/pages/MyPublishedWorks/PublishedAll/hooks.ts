import {useEffect} from 'react';
import {PublishedExpiredProps} from './types';
import {useUser} from '../../../provider/AuthProvider';
import useAxiosGet from '../../../services/apiGet';
import {Categories} from '../../Search/types';

export const usePublishedAll = ({type}: PublishedExpiredProps) => {
  const {
    authState: {user},
  } = useUser();
  const {data, getData, loading, refreshData} = useAxiosGet<Categories>(
    `/works/user/${user?._id}?status=${type}`,
  );

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data, loading, refreshData};
};
