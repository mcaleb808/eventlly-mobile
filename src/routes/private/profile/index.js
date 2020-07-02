import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { createStackNavigator } from 'react-navigation-stack';
import { PROFILE, HOME } from '../../../constants/routeNames';
import { navHeader } from '../../../components/shared/styles';
import Profile from '../../../screens/Profile/index';

const routeConfig = {
  [PROFILE]: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <MaterialCommunityIcons
          style={{ marginLeft: 15 }}
          size={30}
          color="white"
          name="arrow-left"
          onPress={() => navigation.navigate(HOME)}
        />
      ),
      ...navHeader,
      title: 'Profile',
      headerRight: () => null
    })
  }
};

const ProfileNavigator = createStackNavigator(routeConfig, {
  initialRouteName: PROFILE
});

export default ProfileNavigator;
