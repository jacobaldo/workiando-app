import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {User} from '../../provider/types';
import {Pagination, Work} from '../Search/types';

export interface RequestedEmployesProps {
  navigation: StackNavigationProp<MyAppProps>;
}

export interface RequestedEmploye {
  docs: Requested[];
  pagination: Pagination;
}

export interface Requested {
  _id: string;
  status: string;
  userId: string;
  worksId: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  works: Work;
  user: User;
}
