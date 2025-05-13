import {KeyboardTypeOptions} from 'react-native';
import {ViewStyle} from 'react-native';

export interface Props {
  label?: string;
  style?: any;
  styleWrapper?: any;
  labelStyle?: any;
  value?: string;
  errorValue?: string | boolean | undefined;
  errorValueStyle?: {};
  onChange?: (e: string) => void;
  onChangeM?: (e: string, f: string, g: string) => void;
  testID?: string;
  firstField?: boolean;
  lastField?: boolean;
  nextRef?: any;
  currentRef?: any;
  numericKeyboard?: boolean;
  alphanumeric?: boolean;
  onPress?: () => void;
  isPassword?: boolean;
  checkIcon?: boolean;
  touched?: boolean;
  onBlur?: () => void;
  mask?: string;
  maskType?: Variant;
  success?: boolean;
  leftAdornment?: any;
  rightAdornment?: any;
  rightAdornmentStyle?: ViewStyle;
  placeholder?: string;
  editable?: boolean;
  isBlur?: boolean;
  isError?: boolean;
  maxLength?: number;
  maxLengthText?: string;
  containerTestID?: string;
  onLayout?: (event: any) => void;
  showErrorWhileTyping?: boolean;
  infoText?: string;
  infoTextContainerStyle?: ViewStyle;
  leftAdornmentStyleWrapper?: any;
  isNumberKeyboard?: boolean;
  maxLengthOnlyText?: string;
  disabled?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

export type Variant =
  | {type: 'cel-phone'}
  | {type: 'cnpj'}
  | {type: 'credit-card'}
  | {type: 'custom'}
  | {type: 'datetime'}
  | {type: 'money'}
  | {type: 'only-numbers'}
  | {type: 'zip-code'};

export enum INPUT_FIELD_TYPES {
  DEFAULT = 'DEFAULT',
  MASK = 'MASK',
  MONEY_MASK = 'MONEY_MASK',
  NO_DECIMAL_MONEY_MASK = 'NO_DECIMAL_MONEY_MASK',
}
