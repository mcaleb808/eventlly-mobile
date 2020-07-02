import { LOGOUT_USER } from '../../../constants/action-types/auth/logout';

const logout = () => dispatch =>
  dispatch({
    type: LOGOUT_USER,
    payload: {
      message: 'You have successfully signed out.'
    }
  });

export default logout;
