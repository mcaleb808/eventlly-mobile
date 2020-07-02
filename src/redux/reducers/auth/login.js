import { AsyncStorage } from 'react-native';
import {
  LOGIN_START,
  LOGIN_ERROR,
  LOGIN_SUCCESS
} from '../../../constants/action-types/auth/login';

export default (state, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        setNewPassword: {
          ...state.setNewPassword,
          msg: null
        },
        logout: {
          ...state.logout,
          message: null
        },
        login: {
          ...state.login,
          loading: true,
          error: null,
          data: payload
        }
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          ...state.login,
          error: payload,
          loading: false
        }
      };
    case LOGIN_SUCCESS:
      try {
        AsyncStorage.setItem('token', payload.token);
      } catch (e) {}
      return {
        ...state,
        login: {
          ...state.login,
          error: null,
          loading: false,
          data: payload
        },
        currentUser: {
          ...state.currentUser,
          data: payload.user,
          isAuthenticated: true
        }
      };
    default:
      return null;
  }
};
