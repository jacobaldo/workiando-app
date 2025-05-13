import {TextStyle} from 'react-native';

export interface Props {
  onPress: (item: ItemWork) => void;
  item: ItemWork;
  style?: TextStyle;
}
interface ItemWork {
  id: number;
  title: string;
  minimunPay: number;
  maximunPay: number;
  address: string;
  createDate: string;
  typeWork: string;
}
