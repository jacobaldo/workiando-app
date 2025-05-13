import {Membership} from '../../pages/Search/types';

export const SET_SUBSCRIPTION = 'SET_SUBSCRIPTION';
export const CLEAR_SUBSCRIPTION = 'CLEAR_SUBSCRIPTION';

export interface SubscriptionState {
  subscription: Membership | null;
  status: 'active' | 'inactive' | 'none';
}
