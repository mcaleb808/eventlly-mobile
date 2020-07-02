import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import image from '../../assets/img/searchBanner.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    padding: '7%'
  },
  text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '500'
  },
  location: {
    color: 'white',
    fontSize: 30,
    lineHeight: 33,
    fontWeight: '500',
    paddingTop: 10
  }
});

const EventBanner = ({ text1, text2 }) => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <Text style={styles.text}>
        Hey John,{'\n'}
        {text1}
      </Text>
      <Text style={styles.location}>{text2}</Text>
    </ImageBackground>
  </View>
);

EventBanner.propTypes = {
  text1: PropTypes.any.isRequired,
  text2: PropTypes.any.isRequired
};

export default EventBanner;
