import SET_LOCATION from '../../../constants/action-types/auth/setLocation';

const setLocation = data => dispatch =>
  dispatch({
    type: SET_LOCATION,
    payload: data
  });

export default setLocation;
