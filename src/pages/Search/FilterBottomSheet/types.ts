export interface Props {
  isOpenFilter: boolean;
  setIsOpenFilter: (isOpenFilter: boolean) => void;
  navigation: any;
  onPressFilter: () => void;
}

export interface itemProps {
  onPress: () => void;
  item: any;
  filter?: any;
}
