import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface PublishedSuccesProps {
  navigation: StackNavigationProp<MyAppProps>;
  data?: any;
}
