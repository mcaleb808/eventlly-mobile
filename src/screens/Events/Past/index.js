import React from 'react';
import { withTheme, Text } from 'react-native-paper';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { events } from '../../../constants/dummyData';
import EventsList from '../../../components/Lists/FlatList';
import { PAST_DETAILS } from '../../../constants/routeNames';
import styles from '../../../components/shared/styles';
import { textShorthand } from '../../../helpers';

const PastEvents = ({ navigation, theme }) => {
  const { colors } = theme;
  return(
  <EventsList
    theme={theme}
    data={events.filter(e => e.published && moment(e.date).isAfter(Date.now()))}
    renderItem={({ item }) => (
      <View style={styles.listContainer}>
        <View style={styles.leftContainer}>
          <Text style={[styles.leftTitle, { color: colors.text }]}>{moment(item.date).format('MMM')}</Text>
          <Text style={[styles.leftSubtitle, { color: colors.text }]}>{moment(item.date).format('D')}</Text>
        </View>
        <View style={styles.centerContainer}>
          <Text style={[styles.centerTitle, { textAlign: 'left' }]}>{textShorthand(item.title)}</Text>
          <Text style={[styles.centerSubtitle, { textAlign: 'left' }]}>{textShorthand(item.location, 40)}</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={[styles.rightTop, { color: colors.text, borderColor: colors.text }]}>
            {`${item.attendees.length} attended`}
          </Text>
          <Text style={[styles.rightBottom]}>view details</Text>
        </View>
      </View>
    )}
    onItemPress={(item) => navigation.navigate(PAST_DETAILS, { event: item })}
  />
)};

PastEvents.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withTheme(PastEvents);
