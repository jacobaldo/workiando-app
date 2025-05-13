import {TextStyle} from 'react-native';

export interface Props {
  children?: any;
  style?: TextStyle;
  variant?: Variant;
  bold?: boolean;
  numberOfLines?: number;
  onPress?: () => void;
  testID?: string;
  allowFontScaling?: boolean;
}

export type Variant =
  | {type: 'small'}
  | {type: 'default'}
  | {type: 'vlarge'}
  | {type: 'vextralarge'}
  | {type: 'vmextralarge'}
  | {type: 'extralarge'}
  | {type: 'large'}
  | {type: 'regular'}
  | {type: 'medium'}
  | {type: 'vsmall'}
  | {type: 'vmsmall'}
  | {type: 'vmmsmall'}
  | {type: 'vvsmall'}
  | {type: 'overline'}
  | {type: 'h6'}
  | {type: 'h5'}
  | {type: 'h4'}
  | {type: 'body1'}
  | {type: 'body2'}
  | {type: 'body3'}
  | {type: 'bodyP1'}
  | {type: 'bodyP2'}
  | {type: 'bodyP3'}
  | {type: 'subtitleS1'}
  | {type: 'subtitleS2'}
  | {type: 'caption'}
  | {type: 'bodyLinkMedium'};
