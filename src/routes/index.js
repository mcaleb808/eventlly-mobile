import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import PublicScreens from './public';
import PrivateScreens from './private';
import SplashScreen from '../screens/Splash/SplashScreen';
import { SPLASH, APP, AUTH, ONBOARDING } from '../constants/routeNames';
import OnBoarding from '../screens/Onboarding';

const AppNavigator = createSwitchNavigator(
  {
    [SPLASH]: SplashScreen,
    [ONBOARDING]: {
      screen: OnBoarding,
      navigationOptions: { headerShown: false }
    },
    [AUTH]: { screen: PublicScreens, path: 'newPassword' },
    [APP]: PrivateScreens
  },
  { initialRouteName: SPLASH }
);

export default createAppContainer(AppNavigator);
