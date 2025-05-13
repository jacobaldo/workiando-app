import {TextStyle} from 'react-native';
import {Requested} from '../../../pages/RequestedEmployes/types';

export interface Props {
  onPress: (item: Requested) => void;
  item: Requested;
  style?: TextStyle;
}

// export type buttonType = 'admin' | 'user';
