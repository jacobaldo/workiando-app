import {MutableRefObject} from 'react';
import {ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export interface Props {
  label: string;
  testID?: string;
  placeholder?: string;
  maxLength: number;
  value: string;
  onPress?: () => void;
  onChange: (value: string) => void;
  onBlur?: () => void;
  usedSpecialCharacters?: boolean;
  variant?: 'default' | 'autoHeight';
  isRequired?: boolean;
  requiredComment?: string;
  autoFocus?: boolean;
  styleContainer?: ViewStyle;
  rightAdornment?: JSX.Element;
  numberOfLines?: number;
  scrollEnabled?: boolean;
  multiline?: boolean;
  ref?: MutableRefObject<TextInput>;
}
