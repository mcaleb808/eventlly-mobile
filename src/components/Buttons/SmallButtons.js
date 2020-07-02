import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { textChip } from '../shared/styles';
import themes from '../../assets/themes';

const { colors } = themes;

const SmallButtons = ({ text, onPress }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => onPress()}>
    <Text
      style={[
        textChip,
        {
          fontWeight: 'bold',
          color: colors.primary,
          borderColor: colors.primary
        }
      ]}>
      {text}
    </Text>
  </TouchableOpacity>
);

SmallButtons.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default SmallButtons;
