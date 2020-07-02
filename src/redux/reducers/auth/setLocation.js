import SET_LOCATION from '../../../constants/action-types/auth/setLocation';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_LOCATION:
      return {
        ...state,
        location: {
          ...state.location,
          data: payload
        }
      };
    default:
      return null;
  }
};
