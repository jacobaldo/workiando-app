import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface EditProfileProps {
  navigation: StackNavigationProp<MyAppProps>;
}

export interface Edit {
  address?: string;
  email: string;
  lastName: string;
  name: string;
  numIndentification?: string;
  numPhone?: string;
  number: string;
  codeNumber: string;
  documentType: string;
  documentNumber: string;
}
