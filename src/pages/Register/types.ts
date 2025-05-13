import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface RegisterProps {
  navigation: StackNavigationProp<MyAppProps>;
}

export interface Register {
  address?: string;
  email: string;
  lastName: string;
  name: string;
  numIndentification?: string;
  numPhone?: string;
  password: string;
  confirmPassword: string;
  number: string;
  codeNumber: string;
}
