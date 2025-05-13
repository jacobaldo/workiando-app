import {TextStyle} from 'react-native';
import {Work} from '../../../pages/Search/types';

export interface Props {
  onPress: (item: Work) => void;
  item: Work;
  style?: TextStyle;
  selected?: Work;
  isFavorite: boolean;
  handleToggleFavorite: (job: Work) => void;
}
// interface ItemWork {
//   id: number;
//   title: string;
//   minimunPay: number;
//   maximunPay: number;
//   address: string;
//   createDate: string;
//   typeWork: string;
// }
