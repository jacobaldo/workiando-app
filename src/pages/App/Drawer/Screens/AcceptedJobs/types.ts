import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../../../types';

export interface AcceptedWorksProps {
  navigation: StackNavigationProp<MyAppProps>;
  title?: string;
}
