import {Category} from '../types';

export interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSelectCategory: (status: any) => void;
  categories: Category[] | null;
  loading: boolean;
  selected: string;
}
