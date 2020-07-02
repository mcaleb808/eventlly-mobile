import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const SocialButton = ({ ...props }) => {
  const { name, color, textColor, onPress } = props;
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: color,
        marginBottom: 5
      }}
      onPress={onPress}>
      <Image {...props} style={{ width: 26, height: 26 }} />
      <Text style={{ ...styles.text, color: textColor }}>{name}</Text>
    </TouchableOpacity>
  );
};

SocialButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default SocialButton;
