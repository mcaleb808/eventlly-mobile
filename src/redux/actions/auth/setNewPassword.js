import {
  SET_NEW_PASSWORD_START,
  SET_NEW_PASSWORD_SUCCESS,
  SET_NEW_PASSWORD_ERROR,
  CLEAR_SET_NEW_PASSWORD_SUCCESS
} from '../../../constants/action-types/auth/setNewPassword';
import apiAction from '../../../helpers/apiAction';

export default data => dispatch =>
  dispatch(
    apiAction({
      method: 'put',
      url: '/users/reset-password',
      data,
      onStart: () => dispatch =>
        dispatch({
          type: SET_NEW_PASSWORD_START
        }),
      onSuccess: data => dispatch =>
        dispatch({
          type: SET_NEW_PASSWORD_SUCCESS,
          payload: data
        }),
      onFailure: error => dispatch =>
        dispatch({
          type: SET_NEW_PASSWORD_ERROR,
          payload: error
        })
    })
  );
export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_SET_NEW_PASSWORD_SUCCESS
  });
};
