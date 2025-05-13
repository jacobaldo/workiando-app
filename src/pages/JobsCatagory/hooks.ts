import {useEffect} from 'react';
import {JobsCategoryProps} from './type';
import useAxiosGet from '../../services/apiGet';
import {Categories} from '../Search/types';

export const useJobsCategory = ({idCategory}: JobsCategoryProps) => {
  const {data, getData, loading, refreshData} = useAxiosGet<Categories>(
    `/works/category/${idCategory}`,
  );

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {data, loading, refreshData};
};
