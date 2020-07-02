import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Fontisto';
import PropTypes from 'prop-types';
import moment from 'moment';
import image from '../../assets/img/event1.png';
import { EVENT_DETAILS } from '../../constants/routeNames';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: '3%',
    borderRadius: 5
  },
  image: {
    resizeMode: 'cover',
    width: '45%',
    backgroundColor: '#e5f4fe',
    borderRadius: 5
  },
  title: {
    flex: 5,
    color: 'black',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold'
  },
  time: {
    color: '#F14336',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: 'normal',
    paddingTop: 15
  },
  icon: {
    color: '#F14336',
    flex: 1
  }
});

const LikedCard = ({ events, navigation }) => (
  <View
    style={{
      flex: 1,
      marginVertical: '3%'
    }}>
    {Array.from(events, (event, index) => (
      <TouchableOpacity
        style={styles.container}
        key={Number(index)}
        onPress={() => navigation.navigate(EVENT_DETAILS, { event })}>
        <Image source={image} style={styles.image} />
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
            width: '45%',
            justifyContent: 'space-between'
          }}>
          <View>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.title}>{event.title}</Text>
              <MaterialCommunityIcons
                size={18}
                name="heart"
                style={styles.icon}
              />
            </View>
            <Text style={styles.time}>{moment(event.date).format('LLL')}</Text>
            <Text style={[styles.time, { color: 'black' }]}>
              {event.location}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

LikedCard.propTypes = {
  events: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default LikedCard;
