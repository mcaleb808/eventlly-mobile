/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StatusBar, View, Platform, SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';

const StatusBarComponent = ({
  theme: {
    colors: { primary }
  }
}) => (
  <View
    style={{
      backgroundColor: primary,
      height: Platform.OS === 'ios' ? 37 : StatusBar.currentHeight,
      width: '100%'
    }}>
    <StatusBar barStyle="light-content" backgroundColor={primary} />
  </View>
);

export default withTheme(StatusBarComponent);
