import React from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import { events } from '../../../constants/dummyData';
import EventsList from '../../../components/Lists/FlatList';
import { CONTINUE_EDIT } from '../../../constants/routeNames';
import Icon from '../../../components/Icons';
import styles from '../../../components/shared/styles';
import { textShorthand } from '../../../helpers';

const DraftedEvents = ({ navigation, theme }) => {
  const { colors } = theme;
  return(
  <EventsList
    theme={theme}
    data={events.filter(e => !e.published)}
    navigation={navigation}
    renderItem={({ item }) => (
      <View style={styles.listContainer}>
        {item.date ?
          <View style={styles.leftContainer}>
            <Text style={[styles.leftTitle, { color: colors.text }]}>{moment(item.date).format('MMM')}</Text>
            <Text style={[styles.leftSubtitle, { color: colors.text }]}>{moment(item.date).format('D')}</Text>
          </View> :
          <Icon style={{ paddingLeft: 10 }} type='font-awesome' name='calendar-plus-o' />
        }
        <View style={styles.centerContainer}>
          <Text style={[styles.centerTitle, { textAlign: 'left' }]}>{textShorthand(item.title)}</Text>
          <Text style={[styles.centerSubtitle, { textAlign: 'left' }]}>{textShorthand(item.location, 40)}</Text>
        </View>
        <View style={[styles.rightContainer, { justifyContent: 'center', paddingRight: 10 }]}>
          <Icon type='feather' name='edit' />
        </View>
      </View>
    )}
    onItemPress={(item) => navigation.navigate(CONTINUE_EDIT, { event: item })}
    leftComponent={<Icon type='font-awesome' name='calendar-plus-o' />}
    rightComponent={<Icon type='feather' name='edit' />}
  />
)};

DraftedEvents.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withTheme(DraftedEvents);
