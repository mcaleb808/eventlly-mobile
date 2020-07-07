import { createStackNavigator } from 'react-navigation-stack';
import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp';
import PwdReset from '../../screens/Auth/PwdReset';
import NewPassword from '../../screens/Auth/NewPassword';
import Welcome from '../../screens/Auth/Welcome';
import {
  LOGIN,
  SIGNUP,
  RESET,
  NEW_PASSWORD,
  GET_STARTED,
  SET_LOCATION,
  WELCOME
} from '../../constants/routeNames';
import GetStarted from '../../screens/Onboarding/GetStarted';
import SetLocation from '../../screens/Onboarding/GetStarted/SetLocation';

const routeConfig = {
  [SIGNUP]: { screen: SignUp, navigationOptions: { headerShown: false } },
  [LOGIN]: { screen: Login, navigationOptions: { headerShown: false } },
  [RESET]: { screen: PwdReset, navigationOptions: { headerShown: false } },
  [GET_STARTED]: {
    screen: GetStarted,
    navigationOptions: { headerShown: false }
  },
  [SET_LOCATION]: {
    screen: SetLocation,
    navigationOptions: { headerShown: false }
  },
  [NEW_PASSWORD]: {
    screen: NewPassword,
    path: '/newPassword',
    navigationOptions: { headerShown: false }
  },
  [WELCOME]: { screen: Welcome, navigationOptions: { headerShown: false } }
};

export default createStackNavigator(routeConfig, {
  initialRouteName: SET_LOCATION
});
