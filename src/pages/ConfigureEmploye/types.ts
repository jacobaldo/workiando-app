import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {Membership} from './MembershipSheet/types';
export interface ConfigureEmployeProps {
  navigation: StackNavigationProp<MyAppProps>;
  data?: bodyCreate;
  edit?: boolean;
  admin?: boolean;
}
export interface ModalConfigureProps {
  onPress: () => void;
  body: bodyCreate | undefined;
}
export interface bodyCreate {
  _id?: string;
  address?: string;
  position: string;
  description: string;
  salary: string;
  idCategory: string;
  idEmploye: string;
  categorySelect: string;
  timeInitial?: string;
  timeFinal?: string;
  typeEmploye?: string;
  idMembership: string;
  calculableAmount: boolean;
  membership: Membership | null;
  nameuserJob?: string;
  phoneuserJob?: string;
  quantity: number;
}
export interface Category {
  __v: number;
  _id: string;
  createdAt: Date;
  name: string;
  updatedAt: Date;
  calculableAmount?: boolean;
}
// export interface InitSlider {
//   init:Membership;
//   active: boolean;
// }
