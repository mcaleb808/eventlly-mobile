import {
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from '../../../constants/action-types/auth/reset-password';
import apiAction from '../../../helpers/apiAction';

export default data => dispatch =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/users/send-email',
      data,
      onStart: () => dispatch =>
        dispatch({
          type: RESET_PASSWORD_START
        }),
      onSuccess: data => dispatch =>
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: data
        }),
      onFailure: error => dispatch =>
        dispatch({
          type: RESET_PASSWORD_ERROR,
          payload: error
        })
    })
  );
