import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface TypeEmployerProps {
  navigation: StackNavigationProp<MyAppProps>;
  data?: any;
}
