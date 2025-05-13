import {
  SET_SUBSCRIPTION,
  CLEAR_SUBSCRIPTION,
  SubscriptionState,
} from './subscriptionType';

const initialState: SubscriptionState = {
  subscription: null,
  status: 'none',
};

const subscriptionReducer = (
  state = initialState,
  action: any,
): SubscriptionState => {
  switch (action.type) {
    case SET_SUBSCRIPTION:
      const {subscription} = action.payload;
      const currentDate = new Date();
      const startDate = new Date(subscription.date.startDate);
      const endDate = new Date(subscription.date.endDate);

      const newStatus =
        subscription.status === 'active' &&
        currentDate >= startDate &&
        currentDate <= endDate
          ? 'active'
          : 'inactive';

      return {
        ...state,
        subscription,
        status: newStatus,
      };

    case CLEAR_SUBSCRIPTION:
      return initialState;

    default:
      return state;
  }
};

export default subscriptionReducer;
