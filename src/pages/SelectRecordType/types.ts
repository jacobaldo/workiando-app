import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface SelectRecordTypeProps {
  navigation: StackNavigationProp<MyAppProps>;
  data?: any;
}
