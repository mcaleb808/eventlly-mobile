import {
  CHECK_USER_EXISTS_START,
  CHECK_USER_EXISTS_ERROR,
  CHECK_USER_EXISTS_SUCCESS
} from '../../../constants/action-types/auth/checkUserExists';

export default (state, { type, payload }) => {
  console.log('type', type);
  switch (type) {
    case CHECK_USER_EXISTS_START:
      return {
        ...state,
        checkUserExists: {
          ...state.checkUserExists,
          loading: true,
          error: null,
          data: null
        }
      };
    case CHECK_USER_EXISTS_ERROR:
      return {
        ...state,
        checkUserExists: {
          ...state.checkUserExists,
          userEmail: payload.userEmail,
          error: payload.error,
          loading: false,
          data: null
        }
      };
    case CHECK_USER_EXISTS_SUCCESS:
      return {
        ...state,
        checkUserExists: {
          ...state.checkUserExists,
          userEmail: payload.userEmail,
          error: null,
          loading: false,
          data: payload.data
        }
      };
    default:
      return null;
  }
};
