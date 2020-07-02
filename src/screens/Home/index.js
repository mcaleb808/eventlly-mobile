/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { withTheme, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';
import HomeBanner from '../../components/Banner/HomeBanner';
import Category from '../../components/Home/Category';
import CardsSlides from '../../components/Cards/CardsSlides';
import EventCard from '../../components/Home/EventCard';
import { events } from '../../constants/dummyData';

const Home = ({ theme: { colors }, navigation }) => (
  <Container>
    {Platform.OS === 'ios' && <StatusBarComponent />}
    <View style={{ flex: 1, width: '100%' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        stickyHeaderIndices={[1]}>
        <HomeBanner
          text1="find out what is happening in"
          text2="Mbarara City"
        />
        <Category />
        <View style={{ width: '100%', paddingHorizontal: '3%' }}>
          <Title
            style={{
              color: colors.primary,
              fontSize: 14,
              lineHeight: 17,
              marginTop: 10
            }}>
            Popular
          </Title>
          <CardsSlides
            number={4}
            title='"Stack of cards" layout | Loop'
            type="stack"
          />
          <Title
            style={{
              color: colors.primary,
              fontSize: 14,
              lineHeight: 17,
              marginTop: 10
            }}>
            Events at nearby cities
          </Title>
          <CardsSlides
            number={4}
            title='"Stack of cards" layout | Loop'
            type="stack"
          />
          <EventCard events={events} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  </Container>
);

Home.propTypes = {
  navigation: PropTypes.any.isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Home);
