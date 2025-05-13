import {StackNavigationProp} from '@react-navigation/stack';
import {MyAppProps} from '../App/types';
import {Work} from '../Search/types';
export interface WorkDetailProps {
  navigation: StackNavigationProp<MyAppProps>;
  body: Work;
}
export interface ExistingRequest {
  hasRequested: boolean;
}
