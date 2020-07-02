import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from '../../../constants/action-types/auth/signUp';
import apiAction from '../../../helpers/apiAction';

export default data => dispatch =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/users',
      data,
      onStart: () => dispatch =>
        dispatch({
          type: SIGNUP_START
        }),
      onSuccess: data => dispatch =>
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: data
        }),
      onFailure: error => dispatch =>
        dispatch({
          type: SIGNUP_ERROR,
          payload: error
        })
    })
  );
