import {TextStyle} from 'react-native';
import {Work} from '../../../pages/Search/types';

export interface Props {
  onPress: (item: Work) => void;
  item: Work;
  style?: TextStyle;
  loading?: boolean;
  textButtom?: string;
}

// export type buttonType = 'admin' | 'user';
