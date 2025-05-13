import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {Admin} from '../App/Drawer/Screens/AdminUsersAndWorks/types';
import {Category} from '../ConfigureEmploye/types';

export interface SearchProps {
  navigation: StackNavigationProp<MyAppProps>;
}

export interface AllCategories {
  docs: CategoryHome[];
  pagination: Pagination;
}
export interface Categories {
  docs: Work[];
  pagination: Pagination;
}
export interface CategoryHome {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  works: Work[];
  photo?: string;
}

export interface Work {
  location: Location;
  date: DateClass;
  _id: string;
  admin: Admin;
  category: Category;
  typeEmploye: Category;
  idMembership: Membership;
  title: string;
  gallery: any[];
  color: string;
  description: string;
  price: number;
  status: string;
  rating: any[];
  createdAt: Date;
  updatedAt: Date;
  quantity: number;
  __v: number;
  typeEmployeData: TypeEmployeData;
}
export interface TypeEmployeData {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  calculableAmount: boolean;
}
export interface TypeEmploye {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export interface DateClass {
  dateCreated: string;
  dateExpired: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

// export interface Price {
//   minimum: number;
//   maximum: number;
// }

export interface Pagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: null;
}

export interface Subscription {
  hasMembership: boolean;
  membership?: Membership;
  message?: string;
}

export interface Membership {
  __v: number;
  _id: string;
  createdAt: Date;
  date: DateClass;
  plan: Plan;
  status: string;
  type: string;
  updatedAt: Date;
  user: string;
}
export interface Plan {
  __v: number;
  _id: string;
  createdAt: Date;
  duration: number;
  name: string;
  price: number;
  type: string;
  updatedAt: Date;
}

export interface Membership {
  _id: string;
  name: string;
  price: number;
  duration: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
export interface DateClass {
  endDate: Date;
  startDate: Date;
}
