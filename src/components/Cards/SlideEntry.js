import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from './slide.styles';

export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const {
      data: { illustration, title, time, date, location },
      parallax,
      parallaxProps
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[styles.imageContainer, styles.imageContainerEven]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner
        spinnerColor="rgba(0, 0, 0, 0.25)"
        {...parallaxProps}
      />
    ) : (
      <ImageBackground source={{ uri: illustration }} style={styles.image}>
        <Text style={[styles.title, styles.titleEven]} numberOfLines={2}>
          {title.toUpperCase()}
        </Text>
        <Text style={[styles.subtitle, styles.subtitleEven]} numberOfLines={2}>
          {time}
        </Text>
        <Text style={[styles.subtitle, styles.subtitleEven]} numberOfLines={2}>
          {date}
        </Text>
        <Text style={[styles.subtitle, styles.subtitleEven]} numberOfLines={2}>
          {location}
        </Text>
      </ImageBackground>
    );
  }

  render() {
    const {
      data: { title },
      even
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          alert(`You've clicked '${title}'`);
        }}>
        <View style={styles.shadow} />
        <View
          style={[
            styles.imageContainer,
            even ? styles.imageContainerEven : {}
          ]}>
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
