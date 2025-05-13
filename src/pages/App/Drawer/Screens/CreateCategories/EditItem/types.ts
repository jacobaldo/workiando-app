import {Category} from '../../../../../ConfigureEmploye/types';

export interface EditProps {
  item: Category;
  onPress: (item: Category) => void;
}
