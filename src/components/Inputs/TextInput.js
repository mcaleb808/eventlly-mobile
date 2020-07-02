import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { TextInput as Input, Button, withTheme } from 'react-native-paper';
import styles from '../shared/styles';

const TextInput = ({ label, onChangeText, value, validInfo, ...props }) => {
  const secureBtn = label.toLowerCase().includes('password');
  const [hidden, setHidden] = useState(secureBtn);
  return (
    <View style={{ marginBottom: secureBtn ? 0 : 25 }}>
      <Input
        style={[styles.input]}
        label={label}
        mode="flat"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={hidden}
        error={!validInfo.status}
        {...props}
      />
      {!validInfo.status ? (
        <Text style={{ color: '#bb0000', fontSize: 14, paddingVertical: 10 }}>
          {validInfo.error}
        </Text>
      ) : null}
      {secureBtn && (
        <Button
          labelStyle={{
            textTransform: 'capitalize',
            marginRight: 0,
            color: '#bb0000'
          }}
          style={{ alignSelf: 'flex-end' }}
          compact
          onPress={() => setHidden(!hidden)}>
          {hidden ? 'show' : 'hide'}
        </Button>
      )}
    </View>
  );
};

TextInput.propTypes = {
  props: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string,
  secureBtn: PropTypes.bool,
  validInfo: PropTypes.objectOf(PropTypes.any)
};

TextInput.defaultProps = {
  props: {},
  secureBtn: false,
  value: null,
  validInfo: { status: true },
  label: null
};

export default withTheme(TextInput);
