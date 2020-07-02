import React from 'react';
import PropTypes from 'prop-types';
import EventDetails from '../EventDetails';
import {  PAST_TICKETS } from '../../../constants/routeNames';

const Details = ({ navigation }) => {
  const { params } = navigation.state;
  const { event = {} } = params;
  return (
    <EventDetails next={ PAST_TICKETS} event={event} navigation={navigation} />
  );
};

Details.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Details;
