import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../../App/types';

export interface EmployeRequestedProps {
  navigation: StackNavigationProp<MyAppProps>;
  type?: string;
  route?: any;
}
