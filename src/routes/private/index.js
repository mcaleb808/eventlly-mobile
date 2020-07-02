import { createStackNavigator } from 'react-navigation-stack';
import Home from './home';
import Events from './events';
import Profile from './profile';
import { HOME, EVENTS, PROFILE } from '../../constants/routeNames';

const routeConfig = {
  [HOME]: { screen: Home, navigationOptions: { headerShown: false } },
  [EVENTS]: { screen: Events, navigationOptions: { headerShown: false } },
  [PROFILE]: { screen: Profile, navigationOptions: { headerShown: false } }
};

export default createStackNavigator(routeConfig, {
  initialRouteName: HOME
});
