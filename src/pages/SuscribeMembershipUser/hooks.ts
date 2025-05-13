import {useEffect, useState} from 'react';
import {SuscribeMembershipUserProps} from './type';
import {
  Membership,
  MembershipAll,
} from '../ConfigureEmploye/MembershipSheet/types';
import useAxiosGet from '../../services/apiGet';

const useSuscribeMembership = ({}: SuscribeMembershipUserProps) => {
  const {
    data: dataMembership,
    getData: getDataMembership,
    loading: loadingMembership,
    refreshData: refreshMembership,
  } = useAxiosGet<MembershipAll>('/plan/membership?type=user');

  const [openConfirmm, setOpenConfirm] = useState<boolean>(false);
  const [membership, setMembership] = useState<Membership>();
  useEffect(() => {
    getDataMembership();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onPressMembership = (data: Membership) => {
    setMembership(data);
    setOpenConfirm(true);
  };
  return {
    onPressMembership,
    dataMembership,
    loadingMembership,
    refreshMembership,
    openConfirmm,
    setOpenConfirm,
    membership,
  };
};
export default useSuscribeMembership;
