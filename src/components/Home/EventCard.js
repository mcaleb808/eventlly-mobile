/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import moment from 'moment';
import image from '../../assets/img/event1.png';
import { EVENT_DETAILS } from '../../constants/routeNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: '3%'
  },
  image: {
    resizeMode: 'cover',
    width: '47%',
    borderRadius: 5,
    backgroundColor: '#e5f4fe'
  },
  title: {
    color: 'black',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold'
  },
  time: {
    color: 'black',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'normal',
    paddingTop: 15
  },
  icon: {
    marginRight: '20%'
  }
});

const EventCard = ({ events, navigation }) => (
  <View style={{ flex: 1, marginBottom: '4%' }}>
    {Array.from(events, (event, index) => (
      <TouchableOpacity
        style={styles.container}
        key={Number(index)}
        onPress={() => navigation.navigate(EVENT_DETAILS, { event })}>
        <Image source={image} style={styles.image} />
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 5,
            width: '47%',
            justifyContent: 'space-between'
          }}>
          <View>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.time}>{moment(event.date).format('LLLL')}</Text>
            <Text style={styles.time}>{event.location}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              size={24}
              name="heart"
              style={styles.icon}
            />
            <MaterialCommunityIcons size={24} name="share-2" />
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

EventCard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default EventCard;
