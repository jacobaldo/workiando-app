import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {Membership} from '../ConfigureEmploye/MembershipSheet/types';
import {bodyCreate} from '../ConfigureEmploye/types';

export interface ConfirmPayEmployeProps {
  navigation: StackNavigationProp<MyAppProps>;
  data: ConfirmData;
  admin?: boolean;
}

// export interface ConfirmData extends Location, bodyCreate, Membership {}
export interface ConfirmData
  extends bodyCreate,
    Omit<Membership, '_id'>,
    Location {}

export interface Location {
  formatted_address: string;
  latitude: string;
  longitude: string;
}

export interface PostEmploye {
  status: number;
  data: DataEmploye;
}
export interface DataEmploye {
  location: LocationPost;
  date: DateClass;
  _id: string;
  admin: string;
  category: Category;
  typeEmploye: Category;
  idMembership: IDMembership;
  title: string;
  gallery: any[];
  description: string;
  price: number;
  status: string;
  paymentCode: string;
  contact: null;
  rating: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Category {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  calculableAmount?: boolean;
}

export interface DateClass {
  dateCreated: Date;
  dateExpired: Date;
}

export interface IDMembership {
  _id: string;
  name: string;
  price: number;
  duration: number;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
  type: string;
}

export interface LocationPost {
  latitude: number;
  longitude: number;
  address: string;
}
