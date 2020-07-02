import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Title } from 'react-native-paper';
import EventBanner from './EventBanner';
import themes from '../../assets/themes';
import TicketCard from '../Cards/TicketCard';

const { colors } = themes;

const EventTickets = ({ navigation }) => {
  const { params } = navigation.state;
  const { event = {} } = params;
  return (
    <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false}>
      <EventBanner event={event} />
      <View style={{ width: '100%', backgroundColor: 'white', padding: 20 }}>
        <Title
          style={{
            color: colors.primary,
            fontSize: 14,
            lineHeight: 17,
            marginTop: 10,
            fontWeight: 'bold'
          }}>
          Select Ticket Category
        </Title>
        <TicketCard event={event} navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default EventTickets;

EventTickets.propTypes = {
  navigation: PropTypes.any.isRequired
};
