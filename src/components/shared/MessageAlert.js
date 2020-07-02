import React, { useState } from 'react';
import { View } from 'react-native';
import { withTheme, Snackbar } from 'react-native-paper';

const MessageAlert = ({ theme, visible, message, color }) => {
  const [localVisible, setVisible] = useState(visible);
  return (
    <Snackbar
      visible={localVisible}
      onDismiss={() => setVisible(false)}
      style={{
        backgroundColor: color ? color : 'green',
        color: theme.colors.white,
        paddingLeft: '10%'
      }}>
      {message}
    </Snackbar>
  );
};

export default withTheme(MessageAlert);
