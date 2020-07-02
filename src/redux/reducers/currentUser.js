import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAILURE,
  EVENT_FORM_SUBMIT,
  CLEAR_USER_INFO,
  CREATE_PROFILE_SUCCESS
} from '../types';
import { currentUser as initialState } from '../initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EVENT_FORM_SUBMIT:
      return {
        ...state,
        submitting: true
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        submitting: false
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        profile: { ...state.profile, ...payload.profile },
        events: {
          ...state.events,
          eventsList: [...payload.events]
        },
        isLoading: false,
        error: null,
        submitting: false,
        isLoggedIn: true
      };
    case SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        error: payload,
        submitting: false
      };
    case CLEAR_USER_INFO:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
