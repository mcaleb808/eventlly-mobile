import {
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CLEAR_CHANGE_PASSWORD_SUCCESS,
} from 'constants/action-types/auth/changePassword';
import apiAction from 'helpers/apiAction';

export default data => dispatch =>
  dispatch(
    apiAction({
      method: 'put',
      url: '/users/change-password',
      data,
      onStart: () => dispatch =>
        dispatch({
          type: CHANGE_PASSWORD_START,
        }),
      onSuccess: data => dispatch =>
        dispatch({
          type: CHANGE_PASSWORD_SUCCESS,
          payload: data,
        }),
      onFailure: error => dispatch =>
        dispatch({
          type: CHANGE_PASSWORD_ERROR,
          payload: error,
        }),
    }),
  );
export const clearChangePasswordSuccess = () => dispatch => {
  dispatch({
    type: CLEAR_CHANGE_PASSWORD_SUCCESS,
  });
};
