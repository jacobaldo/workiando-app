import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface JobsCategoryProps {
  navigation: StackNavigationProp<MyAppProps>;
  idCategory: string;
  nameCategory: string;
}
