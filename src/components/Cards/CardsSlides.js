import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { withTheme } from 'react-native-paper';
import styles from './styles';
import { sliderWidth, itemWidth } from './slide.styles';
import SliderEntry from './SlideEntry';

const CardsSlides = ({
  theme: {
    colors: { primary }
  }
}) => {
  const title = 'MTV Party Night';
  const time = '6:00 PM';
  const date = '30th Nov. 2019';
  const location = 'Ice Lounge';
  const ENTRIES2 = [
    {
      title,
      time,
      date,
      location,
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/SsJmZ9jl.jpg'
    },
    {
      title,
      time,
      date,
      location,
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/5tj6S7Ol.jpg'
    },
    {
      title,
      time,
      date,
      location,
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/pmSqIFZl.jpg'
    },
    {
      title,
      time,
      date,
      location,
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/cA8zoGel.jpg'
    },
    {
      title,
      time,
      date,
      location,
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/pewusMzl.jpg'
    },
    {
      title,
      time,
      date,
      location,
      subtitle: 'Lorem ipsum dolor sit amet et nuncat',
      illustration: 'https://i.imgur.com/l49aYS3l.jpg'
    }
  ];
  const renderItem = ({ item, index }) => (
    <SliderEntry data={item} even={(index + 1) % 2 === 0} />
  );

  return (
    <View style={{ width: '50%' }}>
      <Carousel
        data={ENTRIES2}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        layout="default"
        loop
      />
    </View>
  );
};

export default withTheme(CardsSlides);
