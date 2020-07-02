import {
  USER_DOES_NOT_EXIST,
  USER_EXISTS,
  CHECK_USER_LOADING
} from '../actions/types';

export const initialState = {
  userExists: false,
  errors: null,
  isLoading: false
};

export default (state = initialState, { type, errors }) => {
  switch (type) {
    case CHECK_USER_LOADING:
      return {
        ...state,
        isLoading: true,
        userExists: false,
        errors: null
      };
    case USER_EXISTS:
      return {
        ...state,
        userExists: true,
        isLoading: false
      };
    case USER_DOES_NOT_EXIST:
      return { ...state, isLoading: false, userExists: false, errors };
    default:
      return state;
  }
};
