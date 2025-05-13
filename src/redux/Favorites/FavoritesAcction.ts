import {Work} from '../../pages/Search/types';
import {SET_FAVORITES, TOGGLE_FAVORITE} from './FavoritesType';

export const setFavorites = (favorites: any) => ({
  type: SET_FAVORITES,
  payload: favorites,
});

// Acción para alternar el estado de un favorito
export const toggleFavorite = (job: Work) => ({
  type: TOGGLE_FAVORITE,
  payload: job,
});
