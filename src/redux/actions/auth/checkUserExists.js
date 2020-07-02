import {
  CHECK_USER_EXISTS_START,
  CHECK_USER_EXISTS_SUCCESS,
  CHECK_USER_EXISTS_ERROR
} from '../../../constants/action-types/auth/checkUserExists';
import apiAction from '../../../helpers/apiAction';

export default user => dispatch => dispatch(
    apiAction({
      method: 'post',
      url: '/users/check-user',
      data: user,
      onStart: () => dispatch =>
        dispatch({
          type: CHECK_USER_EXISTS_START
        }),
      onSuccess: data => dispatch =>
        dispatch({
          type: CHECK_USER_EXISTS_SUCCESS,
          payload: { data, userEmail: user.email }
        }),
      onFailure: error => dispatch =>
        dispatch({
          type: CHECK_USER_EXISTS_ERROR,
          payload: { error, userEmail: user.email }
        })
    })
  );
