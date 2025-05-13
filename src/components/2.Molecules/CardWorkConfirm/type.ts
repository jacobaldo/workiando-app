import {TextStyle} from 'react-native';
import {Work} from '../../../pages/Search/types';
import {ConfirmData} from '../../../pages/ConfirmPayEmploye/types';

export interface Props {
  onPress: (item: ConfirmData) => void;
  item: ConfirmData;
  style?: TextStyle;
}
