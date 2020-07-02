import React from 'react';
import { View, ScrollView } from 'react-native';
import { withTheme, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import SingleTicket from './SingleTicket';

const TicketsDetails = ({ theme }) => {
  const { colors } = theme;
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: '2%'
      }}>
      <View
        style={{
          marginTop: 10
        }}>
        <Title style={{ color: colors.primary }}>Aside Tournament</Title>
      </View>
      <SingleTicket />
      <SingleTicket />
    </ScrollView>
  );
};

TicketsDetails.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(TicketsDetails);
