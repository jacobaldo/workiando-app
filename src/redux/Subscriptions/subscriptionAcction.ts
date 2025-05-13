import {Membership} from '../../pages/Search/types';
import {
  SET_SUBSCRIPTION,
  CLEAR_SUBSCRIPTION,
  //   SubscriptionActionTypes,
} from './subscriptionType';

export const setSubscription = (subscription: Membership) => ({
  type: SET_SUBSCRIPTION,
  payload: {subscription},
});

export const clearSubscription = () => ({
  type: CLEAR_SUBSCRIPTION,
});
