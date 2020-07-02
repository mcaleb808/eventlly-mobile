import { AsyncStorage } from 'react-native';

const fetchAPI = async (endpoint, config) => {
  const API_URL = 'https://evently-backend.herokuapp.com/api';

  const token = await AsyncStorage.getItem('token');

  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json, text/plain, */*',
      Authorization: `Bearer ${token}`
    }
  };

  console.log(defaultOptions.headers.Authorization);

  return new Promise((resolve, reject) => {
    const options = {
      ...defaultOptions,
      ...config
    };
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    fetch(`${API_URL}${endpoint}`, options)
      .then(res => res.json() || {})
      .then(res => {
        if (res.status === 200 || res.status === 201 || res.status === 304) {
          return resolve(res);
        }
        return reject(res);
      })
      .catch(err => reject(err));
  });
};

export default fetchAPI;
