import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { BlurView } from 'expo-blur';

const styles = StyleSheet.create({
  image: {
    height: 197,
    width: '100%',
    justifyContent: 'center'
  },

  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold'
  },
  date: {
    marginTop: 13,
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold'
  }
});

const EventBanner = ({ event }) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: event.flyer }} style={styles.image}>
      <BlurView
        tint="dark"
        intensity={50}
        style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{moment().format('LLLL')}</Text>
      </BlurView>
    </ImageBackground>
  </View>
);

export default EventBanner;

EventBanner.propTypes = {
  event: PropTypes.any.isRequired
};
