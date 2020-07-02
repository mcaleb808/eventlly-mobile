import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../../../constants/action-types/auth/login';
import apiAction from '../../../helpers/apiAction';

export default (data, endpoint = '/users/login') => dispatch =>
  dispatch(
    apiAction({
      method: 'post',
      url: endpoint,
      data,
      onStart: () => dispatch =>
        dispatch({
          type: LOGIN_START
        }),
      onSuccess: data => dispatch =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data
        }),
      onFailure: error => dispatch =>
        dispatch({
          type: LOGIN_ERROR,
          payload: error
        })
    })
  );
