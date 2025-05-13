import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface SelectPreferencesProps {
  navigation: StackNavigationProp<MyAppProps>;
  type?: 'update' | 'create';
}
