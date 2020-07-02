import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {
  MORE,
  EDIT_PROFILE,
  FOLLOWING,
  SETTINGS,
  CHANGE_PASSWORD,
  ABOUT_US,
  DEACTIVATE_ACCOUNT
} from '../../../constants/routeNames';
import { navHeader } from '../../../components/shared/styles';
import More from '../../../screens/More';
import EditProfile from '../../../screens/More/EditProfile';
import Following from '../../../screens/More/Following';
import Confirm from '../../../components/Buttons/Confirm';
import Settings from '../../../screens/More/Settings';
import ChangePassword from '../../../screens/Auth/ChangePassword';
import AboutUs from '../../../screens/More/AboutUs';
import DeactivateAccount from '../../../screens/More/DeactivateAccount';

const routeConfig = {
  [MORE]: {
    screen: More,
    navigationOptions: {
      ...navHeader,
      title: 'More',
      headerRight: () => null
    }
  },
  [EDIT_PROFILE]: {
    screen: EditProfile,
    navigationOptions: ({ navigation }) => ({
      ...navHeader,
      title: 'Profile',
      headerRight: () => (
        <Confirm text="Save" onPress={() => navigation.goBack()} />
      )
    })
  },
  [FOLLOWING]: {
    screen: Following,
    navigationOptions: {
      ...navHeader,
      title: 'Following',
      headerRight: () => null
    }
  },
  [SETTINGS]: {
    screen: Settings,
    navigationOptions: {
      ...navHeader,
      title: 'Settings',
      headerRight: () => null
    }
  },
  [CHANGE_PASSWORD]: {
    screen: ChangePassword,
    navigationOptions: {
      ...navHeader,
      title: 'Change Password',
      headerRight: () => null
    }
  },
  [ABOUT_US]: {
    screen: AboutUs,
    navigationOptions: {
      ...navHeader,
      title: 'About Us',
      headerRight: () => null
    }
  },
  [DEACTIVATE_ACCOUNT]: {
    screen: DeactivateAccount,
    navigationOptions: {
      ...navHeader,
      title: 'Deactivate Account',
      headerRight: () => null
    }
  }
};

const MoreNavigator = createStackNavigator(routeConfig, {
  initialRouteName: MORE
});

export default MoreNavigator;
