import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../../App/types';

export interface PublishedExpiredProps {
  navigation: StackNavigationProp<MyAppProps>;
  type?: string;
  route?: any;
}
