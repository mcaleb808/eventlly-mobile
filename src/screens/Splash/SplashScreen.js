import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import PropTypes from 'prop-types';
import { APP, ONBOARDING, AUTH } from '../../constants/routeNames';
import SFProText from '../../assets/fonts/SF-Pro-Text.ttf';
import SFProTextMedium from '../../assets/fonts/SF-Pro-Text-Medium.ttf';
import { cacheFonts } from '../../helpers/caching';

const SplashScreen = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);

  const bootstrapAsync = async () => {
    try {
      const token = (await AsyncStorage.getItem('token')) || null;
      await cacheFonts({
        SFProText,
        SFProTextMedium
      });
      if (token) {
        navigation.navigate(APP);
      } else {
        navigation.navigate(ONBOARDING);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    isLoading && (
      <AppLoading
        startAsync={bootstrapAsync}
        onFinish={() => setLoading(false)}
        onError={() => navigation.navigate(AUTH)}
        testId="app-loading"
      />
    )
  );
};
SplashScreen.propTypes = {
  navigation: PropTypes.oneOfType([PropTypes.object]).isRequired
};

export default SplashScreen;
