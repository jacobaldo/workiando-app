import {useEffect} from 'react';
import {User} from '../../provider/types';
import useAxiosGet from '../../services/apiGet';
import {ExistingRequest, WorkDetailProps} from './types';
import useAxiosPost from '../../services/apiPost';
import {useUser} from '../../provider/AuthProvider';
import ToastController from '../../components/2.Molecules/ToastModal/ToastController';
import {useDispatch, useSelector} from 'react-redux';
import {Subscription} from '../Search/types';
import {setSubscription} from '../../redux/Subscriptions/subscriptionAcction';

export const useWorkDetail = ({body, navigation}: WorkDetailProps) => {
  const {
    authState: {user: myUser},
  } = useUser();
  const {
    // subscription,
    status,
  } = useSelector((state: any) => state.subscription);
  const dispatch = useDispatch();
  const {loading: loadingPost, postData} = useAxiosPost();
  const {
    data: user,
    getData,
    loading,
    refreshData,
  } = useAxiosGet<User>(`/auth/${body.admin}`);
  const {data: existingRequest, getData: existingGetData} =
    useAxiosGet<ExistingRequest>(`/requests/${myUser?._id}/${body._id}`);

  useEffect(() => {
    existingGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    data: dataSubscription,
    getData: getDataSubscription,
    // loading: loadingSubscription,
    // refreshData: refreshSubscription,
  } = useAxiosGet<Subscription>(`/plan/membership/status/${myUser?._id}`);

  const getSubscritionStatus = () => {
    if (dataSubscription?.hasMembership) {
      dataSubscription.membership &&
        dispatch(setSubscription(dataSubscription.membership));
    } else {
      ToastController.showModal(
        `${dataSubscription?.message}`,
        {type: 'success'},
        'top',
        true,
      );
    }
  };
  useEffect(() => {
    getDataSubscription();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dataSubscription && getSubscritionStatus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSubscription]);

  useEffect(() => {
    body.admin && getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body]);
  const myWork = () => {
    if (myUser?._id.toString() === body.admin.toString()) {
      return true;
    }
    return false;
  };
  const onPressApply = () => {
    const newBody = {userId: myUser?._id, worksId: body._id};

    if (status === 'active') {
      postData('/requests', newBody).then(() => {
        ToastController.showModal(
          'Solicitud exitosa...',
          {type: 'success'},
          'top',
          true,
        );
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      });
    } else if (status === 'inactive') {
      ToastController.showModal(
        'Tu Membresía esta inactiva o vencida',
        {type: 'danger'},
        'top',
        true,
      );
      navigation.navigate('SuscribeMembershipUser', {navigation});
    } else {
      ToastController.showModal(
        'No tienes Membresía, Suscríbete',
        {type: 'danger'},
        'top',
        true,
      );
      navigation.navigate('SuscribeMembershipUser', {navigation});
    }
  };

  return {
    user,
    loading,
    refreshData,
    onPressApply,
    loadingPost,
    existingRequest,
    myWork,
    status,
  };
};
