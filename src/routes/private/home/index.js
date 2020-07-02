import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { HOME, SEARCH, LIKED, MORE } from '../../../constants/routeNames';
import themes from '../../../assets/themes';
import Search from '../../../screens/Search';
import Liked from '../../../screens/Liked';
import More from '../more';
import Home from '../../../screens/Home';

const { colors } = themes;
const routeConfig = {
  [HOME]: {
    screen: Home,
    params: { status: true },
    navigationOptions: navigation => ({
      tabBarIcon: () => <MaterialCommunityIcons size={24} name="home" />,
      tabBarVisible: navigation.navigation.state.params.status
    })
  },
  [SEARCH]: {
    screen: Search,
    navigationOptions: {
      tabBarIcon: () => <MaterialCommunityIcons size={24} name="search" />
    }
  },
  [LIKED]: {
    screen: Liked,
    navigationOptions: {
      tabBarIcon: () => <MaterialCommunityIcons size={24} name="heart" />
    }
  },
  [MORE]: {
    screen: More,
    navigationOptions: {
      tabBarIcon: () => (
        <MaterialCommunityIcons size={24} name="more-vertical" />
      )
    }
  }
};

export default createMaterialBottomTabNavigator(routeConfig, {
  initialRouteName: HOME,
  shifting: false,
  activeColor: colors.primary,
  labeled: false,
  inactiveColor: colors.primaryLight,
  barStyle: { backgroundColor: colors.accent }
});
