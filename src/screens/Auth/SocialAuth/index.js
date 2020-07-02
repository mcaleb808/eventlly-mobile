/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
// import GoogleLogin from '../GoogleLogin';
// import FacebookLogin from '../FacebookLogin';

const SocialAuthView = () => {
  const styles = StyleSheet.create({
    wrapper: { marginTop: 20 },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: -15
    }
  });

  return (
    <View style={styles.wrapper}>
      <Title>Continue with</Title>
      <View style={styles.buttons}>
        {/* <FacebookLogin /> */}
        {/* <GoogleLogin /> */}
      </View>
    </View>
  );
};

export default SocialAuthView;
