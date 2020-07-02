import React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';
import HomeBanner from '../../components/Banner/HomeBanner';
import LikedCard from '../../components/Cards/LikedCard';
import { events } from '../../constants/dummyData';

const Liked = ({ navigation }) => (
  <Container>
    {Platform.OS === 'ios' && <StatusBarComponent />}
    <View style={{ flex: 1, width: '100%' }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <HomeBanner text1="this are the event you" text2="Liked" />
        <View style={{ width: '100%', padding: '3%' }}>
          <LikedCard events={events} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  </Container>
);

Liked.propTypes = {
  navigation: PropTypes.any.isRequired
};
export default withTheme(Liked);
