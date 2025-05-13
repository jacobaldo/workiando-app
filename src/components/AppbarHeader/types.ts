import {ViewStyle} from 'react-native';

export interface Props {
  title?: string;
  badge?: JSX.Element;
  style?: ViewStyle;
  backButon?: boolean;
  backPress?: () => void;
  variant?: Variant;
  resetNavigationOnBack?: boolean;
  iconRight?: VariantIcon;
  notificationCenterButton?: boolean;
  notificationCenterConfigButton?: boolean;
  configIconPress?: () => void;
  notificationCenterFilterButton?: boolean;
  backPressGeneric?: string;
  SvgIcon?: React.ElementType;
  onPressIcon?: () => void;
  showLogo?: boolean;
  helpButton?: () => void;
  helpButtonText?: string;
  settingsDisabled?: boolean;
  filterTransaction?: boolean;
  backButonAlterIcon?: boolean;
  backButtonAlterColor?: string;
  backButtonAlterSize?: number;
  filterFocus?: boolean;
  filterPlaceHolder?: string;
  onChangeFilter?: (v: string) => void;
  leftAdornment?: JSX.Element;
  rightAdornment?: JSX.Element;
  onFilterPress?: () => void;
  handleFilterTransactions?: () => void;
}

export type Variant =
  | {type: 'default'}
  | {type: 'white'}
  | {type: 'black'}
  | {type: 'blue'}
  | {type: 'neutral'}
  | {type: 'secondary'}
  | {type: 'blueLight'};

export type VariantIcon =
  | {type: 'default'}
  | {type: 'Support'}
  | {type: 'Expense'}
  | {type: 'Products'}
  | {type: 'Home'};
