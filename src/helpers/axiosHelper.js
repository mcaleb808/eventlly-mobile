import axios from 'axios';
import { AsyncStorage } from 'react-native';

const REACT_APP_BACKEND_API_URL = 'https://evently-backend.herokuapp.com/api';
const getToken = () => {
  let value = null;
  try {
    value = AsyncStorage.getItem('token') || null;
    if (value !== null) {
      return value;
    }
  } catch (e) {}
  return value;
};

export default (httpOptions = {}) => {
  const { token, url, headers } = httpOptions;
  const userToken = token || getToken();

  return axios.create({
    baseURL: url || REACT_APP_BACKEND_API_URL,
    headers: {
      ...headers,
      Authorization: `Bearer ${userToken}` || undefined
    }
  });
};
