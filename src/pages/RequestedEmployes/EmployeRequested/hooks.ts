import {useEffect} from 'react';
import {useUser} from '../../../provider/AuthProvider';
import useAxiosGet from '../../../services/apiGet';
import {EmployeRequestedProps} from './types';
import {RequestedEmploye} from '../types';

export const usePublishedWorks = ({type}: EmployeRequestedProps) => {
  const {
    authState: {user},
  } = useUser();

  const {data, getData, loading, refreshData} = useAxiosGet<RequestedEmploye>(
    `/requests/user/${user?._id}?status=${type}`,
  );

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {data, loading, refreshData};
};
