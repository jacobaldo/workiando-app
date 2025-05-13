import {
  ADD_FILTER_CATEGORY,
  REMOVE_FILTER_CATEGORY,
  ADD_FILTER_TYPEEMPLOYE,
  REMOVE_FILTER_TYPEEMPLOYE,
  ADD_RANGE,
  REMOVE_RANGE,
  RESET_ALL_FILTERS,
} from './FilterType';

export const addFilterCategory = (filter: any) => ({
  type: ADD_FILTER_CATEGORY,
  payload: filter,
});

export const removeFilterCategory = (filterId: any) => ({
  type: REMOVE_FILTER_CATEGORY,
  payload: filterId,
});

export const addFilterTypeEmploye = (filter: any) => ({
  type: ADD_FILTER_TYPEEMPLOYE,
  payload: filter,
});

export const removeFilterTypeEmploye = (filterId: any) => ({
  type: REMOVE_FILTER_TYPEEMPLOYE,
  payload: filterId,
});

export const addFilterRange = (range: any) => ({
  type: ADD_RANGE,
  payload: range,
});

export const removeFilterRange = (range: any) => ({
  type: REMOVE_RANGE,
  payload: range,
});
export const resetAllFilters = () => ({
  type: RESET_ALL_FILTERS,
});
