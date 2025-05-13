import {Category} from '../../../../../ConfigureEmploye/types';
import {Type} from '../types';

export interface EditSheetProps {
  item: Category;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  type: Type;
  Refresh: () => void;
}
