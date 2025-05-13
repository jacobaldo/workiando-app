import {useEffect} from 'react';
import {FavoritesProps} from './types';
import {Work} from '../Search/types';
import {useDispatch, useSelector} from 'react-redux';
import {
  setFavorites,
  toggleFavorite,
} from '../../redux/Favorites/FavoritesAcction';
import {loadFavorites, toggleFavoriteAsync} from '../../provider/favorites';

export const useFavorites = ({navigation}: FavoritesProps) => {
  // console.log('jaa', navigation);
  const dispatch = useDispatch();
  const {favorites} = useSelector((state: any) => state.favorites);

  const loadAllFavorites = async () => {
    try {
      const storedFavorites = await loadFavorites();

      if (storedFavorites) {
        dispatch(setFavorites(storedFavorites));
      }
    } catch (error) {
      console.error('Error cargando favoritos 22', error);
    }
  };

  useEffect(() => {
    loadAllFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleFavorite = async (job: Work) => {
    dispatch(toggleFavorite(job));

    await toggleFavoriteAsync(job);
  };
  const onPressNavigateEmployer = (item: Work) => {
    navigation.navigate('WorkDetail', {navigation, body: item});
  };

  return {favorites, handleToggleFavorite, onPressNavigateEmployer};
};
