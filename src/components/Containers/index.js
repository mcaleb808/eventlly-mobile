import React from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../shared/styles';

const Container = ({ children, ...props }) => (
  <View style={[styles.container, { width: '100%' }]} {...props}>
    {children}
  </View>
);

Container.propTypes = {
  children: PropTypes.any.isRequired,
  props: PropTypes.objectOf(PropTypes.any)
};

Container.defaultProps = {
  props: {}
};

export default Container;
