import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';

export interface SelectLocationProps {
  navigation: StackNavigationProp<MyAppProps>;
  data: any;
}
export interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
