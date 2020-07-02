import {
  SET_CURRENT_USER_FAILURE,
  PROFILE_FORM_SUBMIT,
  SET_CURRENT_USER,
  CLEAR_USER_INFO,
  CREATE_PROFILE_SUCCESS
} from '../types';

import fetchAPI from '../../api/fetchAPI';

export const submittingProfile = payload => ({
  type: PROFILE_FORM_SUBMIT,
  payload
});

export const submitProfileFailure = payload => ({
  type: SET_CURRENT_USER_FAILURE,
  payload
});

export const setCurrentUser = payload => ({
  type: SET_CURRENT_USER,
  payload
});

export const createProfileSuccess = () => ({
  type: CREATE_PROFILE_SUCCESS
});

export const userLogout = () => ({
  type: CLEAR_USER_INFO
});

export const fetchCurrentUser = () => async dispatch => {
  try {
    const data = await fetchAPI('/profile/me', { method: 'GET' });
    const events = await fetchAPI('/events');
    console.log(data);
    await dispatch(
      setCurrentUser({ profile: data.organizerProfile, events: events.data })
    );
  } catch (err) {
    console.log(err);
    await dispatch(submitProfileFailure(err.error));
  }
};
