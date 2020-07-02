import React from 'react';
import { TouchableOpacity, Text, Image, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { submitLogin } from '../../redux/actions/auth';
import styles from './styles';
import { APP } from '../../constants/routeNames';

const SocialButton = ({ navigation, ...props }) => {
  const { name, color, textColor, onPress } = props;

  const dispatch = useDispatch();
  const { loginMessage } = useSelector(state => state.auth);

  const socialAuthAction = payload => {
    dispatch(submitLogin(payload, 'auth/facebook'))
      .then(res => {
        if (res.status && res.status === 200) {
          navigation.navigate(LIVE_EVENTS, {
            liveEventMessage: 'Successfully logged in!'
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: 'android key to be added here',
        iosClientId: 'ios key to be added here',
        scopes: ['profile', 'email']
      });

      if (result.type === 'success') {
        try {
          console.log(result);
          const {
            user: { familyName, givenName, email, photoUrl }
          } = result;
          await socialAuthAction({
            firstName: familyName,
            lastName: givenName,
            email,
            avatar: photoUrl
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        Alert.alert('Login canceled!');
        return { cancelled: true };
      }
    } catch (e) {
      Alert.alert('Login canceled!');
      return { error: true };
    }
  };

  const facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync('206038327258649');
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email']
      });
      if (type === 'success') {
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        const data = await response.json();
        console.log(data);
        try {
          await socialAuthAction({
            firstName: data.name,
            email: `${data.id}@evently.com`
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        Alert.alert('Login canceled!');
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: color,
        marginBottom: 5
      }}
      onPress={() =>
        name === 'Facebook' ? facebookLogIn() : signInWithGoogleAsync()
      }>
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
