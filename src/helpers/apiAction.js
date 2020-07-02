import * as apiActionTypes from '../constants/apiActions';

export default ({
  url = '',
  method = 'GET',
  data = null,
  queries = null,
  resType = 'json',
  onStart = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_START,
      payload: { loading: true }
    }),
  onSuccess = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_SUCCESS,
      payload: { loading: false }
    }),
  onFailure = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_FAILURE,
      payload: { loading: false }
    }),
  onEnd = () => dispatch =>
    dispatch({
      type: apiActionTypes.API_REQUEST_END,
      payload: { loading: false }
    })
}) => ({
    type: apiActionTypes.API_REQUEST,
    payload: {
      url,
      method,
      resType,
      data: {
        ...data
      },
      queries,
      onStart,
      onSuccess,
      onFailure,
      onEnd
    }
  });
