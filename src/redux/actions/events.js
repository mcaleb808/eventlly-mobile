import {
  EVENT_FORM_SUBMIT,
  CREATE_EVENT_FAILURE,
  CREATE_EVENT_SUCCESS
} from '../types';

import fetchAPI from '../../api/fetchAPI';
import uploadImage from '../../helpers/uploadImage';
import { fetchCurrentUser } from './currentUser';

export const submittingEvent = () => ({
  type: EVENT_FORM_SUBMIT
});

export const createEventFailure = payload => ({
  type: CREATE_EVENT_FAILURE,
  payload
});

export const createEventSuccess = () => ({
  type: CREATE_EVENT_SUCCESS
});

export const submitEvent = (payload, verb = 'POST') => async dispatch => {
  try {
    await dispatch(submittingEvent());
    const eventImage =
      payload.eventImage && payload.eventImage.base64
        ? await uploadImage(payload.eventImage)
        : eventImage;

    const response = await fetchAPI('/events', {
      method: verb,
      body: { ...payload, eventImage }
    });
    await dispatch(fetchCurrentUser());
    return response;
  } catch (err) {
    await dispatch(createEventFailure(err));
    console.log(err);
    return err;
  }
};
