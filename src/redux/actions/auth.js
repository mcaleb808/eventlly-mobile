import { AsyncStorage } from 'react-native';
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_FORM_SUBMIT,
  SUBMIT_RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  SUBMIT_NEW_PASSWORD,
  NEW_PASSWORD_ERROR,
  NEW_PASSWORD_SUCCESS,
  CONFIRM_EMAIL_ERROR,
  CONFIRM_EMAIL_SUCCESS
} from '../types';

import fetchAPI from '../../api/fetchAPI';
import { fetchCurrentUser, setCurrentUser } from './currentUser';

export const submitSignUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});
export const submitSignUpFailure = payload => ({
  type: SIGNUP_FAILURE,
  payload
});

export const submitAuthForm = payload => ({
  type: SIGNUP_FORM_SUBMIT,
  payload
});

export const submitLoginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const submitLoginFailure = payload => ({
  type: LOGIN_FAILED,
  payload
});

export const resetPwdSuccess = () => ({
  type: RESET_PASSWORD_SUCCESS
});
export const resetPwdFailure = payload => ({
  type: RESET_PASSWORD_ERROR,
  payload
});

export const submitNewtPwdForm = payload => ({
  type: SUBMIT_RESET_PASSWORD,
  payload
});

export const newPwdSuccess = () => ({
  type: NEW_PASSWORD_SUCCESS
});
export const newPwdFailure = payload => ({
  type: NEW_PASSWORD_ERROR,
  payload
});

export const submitNewPwdForm = payload => ({
  type: SUBMIT_NEW_PASSWORD,
  payload
});

export const confirmEmailSuccess = () => ({
  type: CONFIRM_EMAIL_SUCCESS
});
export const confirmEmailFailure = payload => ({
  type: CONFIRM_EMAIL_ERROR,
  payload
});

export const submitSignUp = payload => dispatch => {
  dispatch(submitAuthForm({ submitting: true }));
  console.log(payload);
  return fetchAPI('/users', {
    method: 'POST',
    body: {
      ...payload,
      urls: {
        redirect: 'https://b18831ee.ngrok.io',
        appUrl: 'exp://127.0.0.1:19000/--/home'
      }
    }
  })
    .then(data => {
      dispatch(setCurrentUser({ profile: data.user, events: [] }));
      dispatch(submitSignUpSuccess(data));
      return data;
    })
    .catch(err => {
      console.log(err);
      dispatch(submitSignUpFailure(err.error));
      return err;
    });
};

export const submitLogin = (payload, endpoint = 'login') => async dispatch => {
  console.log(payload);
  try {
    dispatch(submitAuthForm({ submitting: true }));
    const data = await fetchAPI(`/users/${endpoint}`, {
      method: 'POST',
      body: payload
    });
    await AsyncStorage.setItem('token', data.token);
    await dispatch(setCurrentUser({ profile: data.user, events: [] }));
    await dispatch(fetchCurrentUser());
    dispatch(submitLoginSuccess(data));
    return data;
  } catch (err) {
    console.log(err);
    dispatch(submitLoginFailure(err.error));
    return err;
  }
};

export const submitResetPwd = payload => async dispatch => {
  try {
    dispatch(submitAuthForm({ submitting: true }));
    const data = await fetchAPI('/users/send-email', {
      method: 'POST',
      body: {
        ...payload,
        urls: {
          redirect: 'https://b18831ee.ngrok.io',
          appUrl: 'exp://127.0.0.1:19000/--/newPassword'
        }
      }
    });
    await dispatch(resetPwdSuccess());
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    dispatch(resetPwdFailure(err.error));
    return err;
  }
};

export const submitNewPassword = payload => async dispatch => {
  console.log(payload);
  try {
    dispatch(submitAuthForm({ submitting: true }));
    const data = await fetchAPI('/users/reset-password', {
      method: 'PUT',
      body: payload
    });
    await dispatch(newPwdSuccess());
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    dispatch(newPwdFailure(err.error));
    return err;
  }
};

export const confirmEmail = payload => async dispatch => {
  console.log(payload);
  try {
    dispatch(submitAuthForm({ submitting: true }));
    const data = await fetchAPI(`/users/verify?token=${payload}`, {
      method: 'PUT',
      body: {
        token: payload
      }
    });
    await dispatch(confirmEmailSuccess());
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    dispatch(confirmEmailFailure(err.error));
    return err;
  }
};
