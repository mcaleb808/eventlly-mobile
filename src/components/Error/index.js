import React from 'react';
import { Text } from 'react-native';

const ErrorMessage = ({ text, style }) => (
  <Text
    style={[
      style,
      {
        color: '#bb0000',
        fontSize: 14
      }
    ]}>
    {text}
  </Text>
);

export default ErrorMessage;
