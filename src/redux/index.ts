import {combineReducers} from 'redux';
import addressReducer from './InitAddress/AddressReducer';
import filterReducer from './Filters/FilterReducer';
import subscriptionReducer from './Subscriptions/subscriptionReducer';
import favoritesReducer from './Favorites/FavoritesReducer';

export default combineReducers({
  data: addressReducer,
  filterReducer: filterReducer,
  subscription: subscriptionReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof combineReducers>;
