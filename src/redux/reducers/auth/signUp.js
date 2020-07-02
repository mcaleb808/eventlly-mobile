import {
  SIGNUP_START,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS
} from '../../../constants/action-types/auth/signUp';

export default (state, { type, payload }) => {
  switch (type) {
    case SIGNUP_START:
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
        signUp: {
          ...state.signUp,
          loading: true,
          error: null
        }
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          error: payload,
          loading: false
        }
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          error: null,
          data: payload,
          loading: false
        },
        currentUser: {
          ...state.currentUser,
          data: payload.authData,
          isAuthenticated: true
        }
      };
    default:
      return null;
  }
};
