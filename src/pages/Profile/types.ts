import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {Requested} from '../RequestedEmployes/types';

export interface ProfileProps {
  navigation: StackNavigationProp<MyAppProps>;
  userData?: Requested | undefined;
}
