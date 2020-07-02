import { CHECK_USER_LOADING, USER_DOES_NOT_EXIST, USER_EXISTS } from './types';

export const checkUser = () => ({
  type: CHECK_USER_LOADING
});
export const setErrors = errors => ({
  type: USER_DOES_NOT_EXIST,
  errors
});

export const setUserExists = user => ({
  type: USER_EXISTS,
  user
});
