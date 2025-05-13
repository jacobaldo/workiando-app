import {Work} from '../../pages/Search/types';
import {SET_FAVORITES, TOGGLE_FAVORITE} from './FavoritesType';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FAVORITES:
      return {...state, favorites: action.payload};

    case TOGGLE_FAVORITE:
      const exists = state.favorites.some(
        (fav: Work) => fav._id === action.payload._id,
      );
      const updatedFavorites = exists
        ? state.favorites.filter((fav: Work) => fav._id !== action.payload._id)
        : [...state.favorites, action.payload];

      return {...state, favorites: updatedFavorites};

    default:
      return state;
  }
};

export default favoritesReducer;
