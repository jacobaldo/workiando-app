import { useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilterCategory,
  addFilterRange,
  addFilterTypeEmploye,
  removeFilterCategory,
  removeFilterTypeEmploye,
  resetAllFilters,
} from "../../../redux/Filters/FilterAcction";
import useAxiosGet from "../../../services/apiGet";
import { Category } from "../../ConfigureEmploye/types";
// import {useUser} from '../../../provider/AuthProvider';

const useFilterBottomSheet = ({
  navigation,
  onPressFilter,
  setIsOpenFilter,
}: any) => {
  const dispatch = useDispatch();
  const { filterCategories, filterTypeEmployes, filterRange } = useSelector(
    (state: any) => state.filterReducer
  );
  let { initAddress } = useSelector((store: any) => store?.data);
  const [sliderValue, setSliderValue] = useState(filterRange);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const {
    data: dataCategories,
    getData,
    loading,
  } = useAxiosGet<Category[]>("/category");
  const {
    data: dataTypeEmploye,
    getData: getDataEmploye,
    loading: loadingEmploye,
  } = useAxiosGet<Category[]>("/typeEmploye");

  const handleFilterCategory = (filter: string) => {
    if (filterCategories && filterCategories.includes(filter)) {
      dispatch(removeFilterCategory(filter));
    } else {
      if (filterCategories.length < 6) {
        dispatch(addFilterCategory(filter));
      } else {
        showMessage({
          message: "Error!!",
          description: "Maximo 6 categorias seleccionadas",
          type: "danger",
          icon: "danger",
        });
      }
    }
  };
  const handleFilterTypeEmploye = (filter: Category) => {
    if (!filter.calculableAmount) {
      handleFilterRange(0);
    }
    if (
      filterTypeEmployes &&
      filterTypeEmployes.some(
        (selectedFilter: string) => selectedFilter === filter._id
      )
    ) {
      dispatch(removeFilterTypeEmploye(filter._id));
    } else {
      dispatch(addFilterTypeEmploye(filter._id));
    }
  };
  const handleFilterRange = (range: number) => {
    setSliderValue(range);
    dispatch(addFilterRange(range));
  };

  const onConfigLocation = () => {
    navigation.navigate("LocationList");
    setIsOpenFilter(false);
  };
  useEffect(() => {
    getData();
    getDataEmploye();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hasNonCalculableAmount = (): boolean => {
    if (dataTypeEmploye) {
      const filteredData = dataTypeEmploye.filter((obj) =>
        filterTypeEmployes.includes(obj._id)
      );
      const hasCalculableAmountTrue = filteredData.some(
        (obj) => !obj.calculableAmount
      );

      return hasCalculableAmountTrue;
    }
    return false;
  };

  const FilterApply = () => {
    setIsOpenFilter(false);

    onPressFilter();
  };
  const categoriesToShow = showAllCategories
    ? dataCategories
    : dataCategories?.slice(0, 6);

  const removeAllFilter = () => {
    dispatch(resetAllFilters());
    setSliderValue(0);
    setIsOpenFilter(false);
    onPressFilter();
  };
  return {
    loading,
    dataCategories,
    dataTypeEmploye,
    loadingEmploye,
    sliderValue,
    handleFilterRange,
    onConfigLocation,
    handleFilterCategory,
    filterCategories,
    handleFilterTypeEmploye,
    filterTypeEmployes,
    filterRange,
    FilterApply,
    initAddress,
    hasNonCalculableAmount,
    categoriesToShow,
    setShowAllCategories,
    showAllCategories,
    removeAllFilter,
  };
};
export default useFilterBottomSheet;
