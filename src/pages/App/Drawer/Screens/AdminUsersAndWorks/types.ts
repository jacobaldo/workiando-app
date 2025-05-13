import { StackNavigationProp } from "@react-navigation/stack";
import { MyAppProps } from "../../../types";

export interface AdminUserAndWorksProps {
  navigation: StackNavigationProp<MyAppProps>;
  type: AdminType;
  title?: string;
}
export type ListItemAdmin = {
  name: string;
  // icon: React.ReactNode;
  icon: string;
  type: AdminType;
  navigate: string;
  get: string;
};

export type AdminType = "user" | "work" | "create";

export interface Admin {
  _id: string;
  email: string;
  lastname: string;
  name: string;
  photo: null;
}
// export interface DataWork extends Admin, Work {}

export interface SubscriptionAll {
  docs: Subscription[];
  pagination: Pagination;
}
export interface Subscription {
  _id: string;
  user: string;
  plan: string;
  type: string;
  date: DateClass;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  userData: UserData;
  paymentCode: string;
  planDetails: PlanDetails;
}

export interface DateClass {
  startDate: Date;
  endDate: Date;
}

export interface PlanDetails {
  _id: string;
  name: string;
  price: number;
  duration: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface UserData {
  _id: string;
  name: string;
  lastname: string;
  number: string;
  status: string;
  email: string;
  photo: null;
  source: string;
  role: Role[];
  account: boolean;
  verified: boolean;
  access: Date;
  reputation: number;
  location: Location;
  document: Document;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Document {
  type: string;
  number: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Role {
  type: string;
  label: string;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pagination {
  page: number;
}
