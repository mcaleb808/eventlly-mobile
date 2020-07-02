/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { List  } from 'react-native-paper';
import PropTypes from 'prop-types';


const EventlyMessage = ({ title, error, message, icon, style }) => (
  <List.Item
    descriptionNumberOfLines={3}
    descriptionStyle={{ color: error ? 'red' : 'green' }}
    titleStyle={{ color: error ? 'red' : 'green' }}
    style={[
      style,
      {
        borderColor: error ? 'red' : 'green',
        borderWidth: 1,
        color: error ? 'red' : 'green'
      }
    ]}
    title={title}
    description={message}
  />
);

EventlyMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.bool
};

EventlyMessage.defaultProps = {
  title: null,
  icon: null,
  error: true
};

export default EventlyMessage;
