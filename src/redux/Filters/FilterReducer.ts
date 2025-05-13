import {
  ADD_FILTER_CATEGORY,
  REMOVE_FILTER_CATEGORY,
  ADD_FILTER_TYPEEMPLOYE,
  REMOVE_FILTER_TYPEEMPLOYE,
  ADD_RANGE,
  REMOVE_RANGE,
  RESET_ALL_FILTERS,
} from './FilterType';

interface FilterState {
  filterCategories: string[];
  filterTypeEmployes: string[];
  filterRange: number;
}
const initialState = {
  filterCategories: [],
  filterTypeEmployes: [],
  filterRange: 0,
};

const filterReducer = (state = initialState, action: any): FilterState => {
  switch (action.type) {
    case ADD_FILTER_CATEGORY:
      return {
        ...state,
        filterCategories: [...state.filterCategories, action.payload],
      };
    case REMOVE_FILTER_CATEGORY:
      return {
        ...state,
        filterCategories: state.filterCategories.filter(
          (filter: any) => filter !== action.payload,
        ),
      };
    case ADD_FILTER_TYPEEMPLOYE:
      return {
        ...state,
        filterTypeEmployes: [...state.filterTypeEmployes, action.payload],
      };
    case REMOVE_FILTER_TYPEEMPLOYE:
      return {
        ...state,
        filterTypeEmployes: state.filterTypeEmployes.filter(
          (filter: any) => filter !== action.payload,
        ),
      };
    case ADD_RANGE:
      return {
        ...state,
        filterRange: action.payload,
      };
    case REMOVE_RANGE:
      return {
        ...state,
        filterRange: 0,
      };
    case RESET_ALL_FILTERS:
      return initialState;
    default:
      return state;
  }
};

export default filterReducer;
