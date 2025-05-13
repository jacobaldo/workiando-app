import {StackNavigationProp} from '@react-navigation/stack';

import {Membership} from '../../ConfigureEmploye/MembershipSheet/types';
import {MyAppProps} from '../../App/types';

export interface ConfirmProps {
  isOpenFilter: boolean;
  setIsOpenFilter: (isOpenFilter: boolean) => void;
  navigation: StackNavigationProp<MyAppProps>;
  membership: Membership;
}

// export interface itemProps {
//   onPress: () => void;

//   membership: Membership;
// }

export interface Subs {
  subscription: Subscription;
  membership: Memberships;
}

export interface Memberships {
  name: string;
  price: number;
  duration: number;
  type: string;
}

export interface Subscription {
  _id: string;
  user: string;
  plan: string;
  type: string;
  date: DateClass;
  status: string;
  paymentCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DateClass {
  startDate: Date;
  endDate: Date;
}
