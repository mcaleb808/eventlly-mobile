import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FORM_SUBMIT,
  SUBMIT_RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  SUBMIT_NEW_PASSWORD,
  NEW_PASSWORD_ERROR,
  NEW_PASSWORD_SUCCESS,
  CONFIRM_EMAIL_ERROR,
  CONFIRM_EMAIL_REQUEST,
  CONFIRM_EMAIL_SUCCESS
} from '../types';
import { auth as initialState } from '../initialState';

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        successMessage: payload.message,
        submitting: false
      };
    case SIGNUP_FORM_SUBMIT:
      return {
        ...state,
        submitting: payload.submitting
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signupMessage: payload,
        errors: payload.errors || [],
        submitting: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginMessage: payload,
        submitting: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        successMessage: payload.message,
        submitting: false
      };
    case SUBMIT_RESET_PASSWORD:
      return {
        ...state,
        submitting: payload.submitting
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPwdMessage: payload,
        submitting: false
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetSuccessMessage:
          'Reset password instructions have been sent to your email',
        submitting: false
      };
    case SUBMIT_NEW_PASSWORD:
      return {
        ...state,
        submitting: payload.submitting
      };
    case NEW_PASSWORD_ERROR:
      return {
        ...state,
        changePwdMessage: payload,
        submitting: false
      };
    case NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        passwordSuccessMessage: 'Your Password has been successfully reset.',
        submitting: false
      };
    case CONFIRM_EMAIL_REQUEST:
      return {
        ...state,
        submitting: payload.submitting
      };
    case CONFIRM_EMAIL_ERROR:
      return {
        ...state,
        signupMessage: payload,
        submitting: false
      };
    case CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        confirmSuccessMessage: 'Registration successfully completed!',
        submitting: false
      };
    default:
      return state;
  }
};

export default auth;
