import initialState from '../../initial-states/user';
import loginReducer from './login';
import resetPasswordReducer from './resetPwd';
import setNewPassword from './setNewPassword';
import logout from './logout';
import changePassword from './changePassword';
import setLocation from './setLocation';
import signUp from './signUp';
import checkUserExists from './checkUserExists';

export default (state = initialState, action = {}) => ({
  ...state,
  ...loginReducer(state, action),
  ...resetPasswordReducer(state, action),
  ...setNewPassword(state, action),
  ...logout(state, action),
  ...changePassword(state, action),
  ...setLocation(state, action),
  ...signUp(state, action),
  ...checkUserExists(state, action)
});
