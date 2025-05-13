import {useEffect, useState} from 'react';
import {ProposalsReceivedProps} from './types';
import {useUser} from '../../provider/AuthProvider';
import useAxiosGet from '../../services/apiGet';
import {Categories, Work} from '../Search/types';
import {Requested, RequestedEmploye} from '../RequestedEmployes/types';

export const useProposalsReceived = ({navigation}: ProposalsReceivedProps) => {
  const {
    authState: {user},
  } = useUser();
  const [selectWork, setSelectWork] = useState<Work>();
  // const [selectUser, setSelectUser] = useState<User>();
  const {data, getData, loading, refreshData} = useAxiosGet<Categories>(
    `/works/user/${user?._id}?status=approved`,
  );
  const {
    data: dataProposals,
    getData: getDataproposals,
    loading: loadingProposals,
  } = useAxiosGet<RequestedEmploye>(`/requests/post/${selectWork?._id}`);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // setSelectWork(nu)
    !selectWork && data && setSelectWork(data?.docs[0]);
    selectWork && data && getDataproposals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selectWork]);
  const setSelectUser = (selectUser: Requested) => {
    // navigation.navigate('')
    navigation.navigate('Profile', {navigation, userData: selectUser});
  };

  return {
    data,
    loading,
    refreshData,
    loadingProposals,
    dataProposals,
    setSelectWork,
    selectWork,
    setSelectUser,
  };
};
