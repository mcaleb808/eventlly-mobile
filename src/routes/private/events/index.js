import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { createStackNavigator } from 'react-navigation-stack';
import {
  EVENT_DETAILS,
  HOME,
  EVENT_TICKETS,
  CHECKOUT,
  UPCOMING,
  TICKETS_DETAILS,
  EVENT_FORUM,
  POST_COMMENT
} from '../../../constants/routeNames';
import { navHeader } from '../../../components/shared/styles';
import EventDetails from '../../../screens/Events/EventDetails';
import EventTickets from '../../../components/Tickets/EventTickets';
import CheckOut from '../../../components/Tickets/CheckOut';
import UpcomingTickets from '../../../components/Tickets/UpcomingTickets';
import TicketsDetails from '../../../components/Tickets/TicketsDetails';
import EventForum from '../../../screens/Events/EventForum';
import PostComment from '../../../screens/Events/PostComment';

const routeConfig = {
  [EVENT_DETAILS]: {
    screen: EventDetails,
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
      ...navHeader
    })
  },
  [EVENT_TICKETS]: {
    screen: EventTickets,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <MaterialCommunityIcons
          style={{ marginLeft: 15 }}
          size={30}
          color="white"
          name="arrow-left"
          onPress={() => navigation.goBack()}
        />
      ),
      ...navHeader
    })
  },
  [CHECKOUT]: {
    screen: CheckOut,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <MaterialCommunityIcons
          style={{ marginLeft: 15 }}
          size={30}
          color="white"
          name="arrow-left"
          onPress={() => navigation.goBack()}
        />
      ),
      ...navHeader,
      title: 'Check Out',
      headerRight: () => null
    })
  },
  [UPCOMING]: {
    screen: UpcomingTickets,
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
      title: 'Tickets',
      headerRight: () => null
    })
  },
  [TICKETS_DETAILS]: {
    screen: TicketsDetails,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <MaterialCommunityIcons
          style={{ marginLeft: 15 }}
          size={30}
          color="white"
          name="arrow-left"
          onPress={() => navigation.goBack()}
        />
      ),
      ...navHeader,
      title: 'Tickets',
      headerRight: () => null
    })
  },
  [EVENT_FORUM]: {
    screen: EventForum,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <MaterialCommunityIcons
          style={{ marginLeft: 15 }}
          size={30}
          color="white"
          name="arrow-left"
          onPress={() => navigation.goBack()}
        />
      ),
      ...navHeader
    })
  },
  [POST_COMMENT]: {
    screen: PostComment,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <MaterialCommunityIcons
          style={{ marginLeft: 15 }}
          size={30}
          color="white"
          name="arrow-left"
          onPress={() => navigation.goBack()}
        />
      ),
      ...navHeader
    })
  }
};

const EventNavigator = createStackNavigator(routeConfig, {
  initialRouteName: EVENT_DETAILS
});

export default EventNavigator;
