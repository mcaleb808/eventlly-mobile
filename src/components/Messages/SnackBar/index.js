/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';

const EventlySnackbar = ({ visible, message }) => {
  const [localVisible, setVisible] = useState(visible);

  return (
    <View style={styles.container}>
      <Snackbar visible={localVisible} onDismiss={() => setVisible(false)}>
        {message}
      </Snackbar>
    </View>
  );
};

EventlySnackbar.propTypes = {
  visible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'space-between'
  }
});

export default EventlySnackbar;
