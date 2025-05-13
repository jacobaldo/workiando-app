import {Linking} from 'react-native';
import {useUser} from '../../provider/AuthProvider';
import {ProfileProps} from './types';
import {useEffect, useState} from 'react';
import {User} from '../../provider/types';
import {useSelector} from 'react-redux';
import useAxiosPut from '../../services/apiPut';

export const useProfile = ({navigation, userData}: ProfileProps) => {
  const {
    authState: {user: userAuth},
  } = useUser();
  const [user, setUser] = useState<User>();
  const {subscription, status} = useSelector(
    (state: any) => state.subscription,
  );
  const {loading, putData} = useAxiosPut();
  const navigationEmployes = () => {
    navigation.navigate('EditProfile', {navigation});
  };
  console.log('memmm', subscription, status);

  const acceptWorker = () => {
    // const body = {
    //   status: 'approved',
    // };
    putData(`/requests/${userData?._id}/accept`, {})
      .then(() => {
        // setLoading(false);
        navigation.goBack();
      })
      .catch(() => {
        // setLoading(false);
      });
  };
  useEffect(() => {
    if (userData) {
      setUser(userData.user);
    } else {
      userAuth && setUser(userAuth);
    }
  }, [userAuth, userData]);
  // console.log('resss putt', data, loading);

  const handlePhoneCall = () => {
    if (userData) {
      Linking.openURL(`tel:${userData.user?.number}`);
    } else {
      Linking.openURL(`tel:${user?.number}`);
    }
  };
  const navigationUpdatePreferences = () => {
    navigation.navigate('SelectPreferences', {navigation, type: 'update'});
  };

  return {
    navigationEmployes,
    handlePhoneCall,
    user,
    acceptWorker,
    loading,
    navigationUpdatePreferences,
  };
};
