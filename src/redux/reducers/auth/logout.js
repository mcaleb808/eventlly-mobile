import { AsyncStorage } from 'react-native';
import { LOGOUT_USER } from '../../../constants/action-types/auth/logout';

export default (state, { type, payload }) => {
  switch (type) {
    case LOGOUT_USER:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        login: {
          ...state.login,
          error: null,
          loading: false
        },
        logout: {
          ...state.logout,
          error: null,
          loading: false,
          message: payload.message
        },
        currentUser: {
          ...state.currentUser,
          data: null,
          isAuthenticated: false
        }
      };
    default:
      return null;
  }
};
