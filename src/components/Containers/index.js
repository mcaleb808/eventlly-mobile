import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../shared/styles';

const Container = ({ children, ...props }) => (
  <KeyboardAvoidingView
    behavior={Platform.os == "ios" ? "padding" : "height"}
    style={[styles.container, { width: '100%' }]} {...props}>
    {children}
  </KeyboardAvoidingView>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
  props: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
  props: {}
};

export default Container;
