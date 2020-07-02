import {
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CLEAR_CHANGE_PASSWORD_SUCCESS
} from '../../../constants/action-types/auth/changePassword';

export default (state, { type, payload }) => {
  console.log('payload', type);
  switch (type) {
    case CHANGE_PASSWORD_START:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: true,
          error: null
        }
      };
    case CHANGE_PASSWORD_ERROR:
    case CLEAR_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          error: null
        }
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          error: null,
          loading: false,
          success: true,
          msg: 'Your password was successfully changed'
        }
      };
    default:
      return null;
  }
};
