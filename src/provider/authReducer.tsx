import {AuthState, TokenProps, User} from './types';

interface singIng {
  user: User;
  token: TokenProps;
}
type AuthAccion = {type: 'signIn'; payload: singIng} | {type: 'signOut'};

export const authReducer = (
  state: AuthState,
  action: AuthAccion,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggetIn: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'signOut':
      return {...state, isLoggetIn: false, user: null, token: null};
    default:
      return state;
  }
};
