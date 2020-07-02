import React from 'react';
import { View } from 'react-native';
import { withTheme, Text, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import { events } from '../../constants/dummyData';
import styles from '../shared/styles';
import { TICKETS_DETAILS } from '../../constants/routeNames';
import EventsList from '../Lists/FlatList';
import { textShorthand } from '../../helpers';

const UpcomingTickets = ({ theme, navigation }) => {
  const { colors } = theme;
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 20,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
        <Title style={{ color: colors.primary }}>Upcoming</Title>
        <Title style={{ color: colors.primaryLight }}>Past</Title>
      </View>
      <EventsList
        theme={theme}
        data={events}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <View style={styles.leftContainer}>
              <Text style={[styles.leftTitle]}>{moment().format('MMM')}</Text>
              <Text style={[styles.leftSubtitle]}>{moment().format('D')}</Text>
            </View>
            <View style={styles.centerContainer}>
              <Text style={[styles.centerTitle, { textAlign: 'left' }]}>
                {textShorthand(item.title)}
              </Text>
              <Text style={[styles.centerSubtitle, { textAlign: 'left' }]}>
                {textShorthand(item.location, 40)}
              </Text>
            </View>
            <View style={styles.rightContainer}>
              <Text
                style={[
                  styles.tickets
                ]}>{`${item.attendees.length} Tickets`}</Text>
              <Text style={[styles.rightBottom]}>view details</Text>
            </View>
          </View>
        )}
        onItemPress={item =>
          navigation.navigate(TICKETS_DETAILS, { event: item })
        }
      />
    </View>
  );
};

UpcomingTickets.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(UpcomingTickets);
