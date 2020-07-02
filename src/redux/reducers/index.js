import { combineReducers } from 'redux';
import checkUser from './checkUser';
import auth from './auth';
import currentUser from './currentUser';

export default combineReducers({ checkUser, auth, currentUser });
