import {
  CREATE_EVENT_SUCCESS,
  EVENT_FORM_SUBMIT,
  CREATE_EVENT_FAILURE
} from '../types';
import { currentUser as initialState } from '../initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case EVENT_FORM_SUBMIT:
      return {
        ...state,
        events: { ...state.events, submitting: true }
      };
    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        events: { ...events, error: payload, submitting: false }
      };
    default:
      return state;
  }
};
