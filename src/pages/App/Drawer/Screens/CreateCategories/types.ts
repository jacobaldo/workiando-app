import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../../../types';

export interface CreateCategoriesProps {
  navigation: StackNavigationProp<MyAppProps>;
  type: Type;
}
export type Type = 'category' | 'typeEmploye' | 'membership';
export interface bodyCreate {
  name?: string;
  calculableAmount?: boolean;
  price?: number;
  duration?: number;
  type?: string;
}
