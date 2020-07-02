import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { Text, Title, Paragraph } from 'react-native-paper';
import { Image } from 'react-native-elements';
import PropTypes from 'prop-types';
import moment from 'moment';
import { textShorthand } from '../../helpers';
import themes from '../../assets/themes';
import { outlinedContainer } from '../../components/shared/styles';
import Icon from '../../components/Icons';
import Confirm from '../../components/Buttons/Confirm';
import Map from '../../components/Map';
import CardsSlides from '../../components/Cards/CardsSlides';
import { EVENT_FORUM } from '../../constants/routeNames';

const { width } = Dimensions.get('screen');
const { colors } = themes;

const inlineStyles = StyleSheet.create({
  rowWithIcon: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row'
  },
  contentText: {
    textAlign: 'left',
    alignSelf: 'flex-start'
  },
  chipsWrapper: {
    ...outlinedContainer,
    flexWrap: 'wrap',
    padding: 5,
    flexDirection: 'row'
  }
});

const EventDetails = ({ navigation }) => {
  const { params } = navigation.state;
  const { event = {} } = params;
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <Image
        source={{ uri: event.flyer }}
        style={{ width, height: 200 }}
        placeholderStyle={{ backgroundColor: colors.primaryLight }}
        PlaceholderContent={<ActivityIndicator color={colors.accent} />}
      />
      <View style={[{ width: '100%', padding: 20 }]}>
        <Title
          style={{
            alignSelf: 'flex-start',
            textTransform: 'capitalize',
            marginBottom: 10,
            color: colors.primary
          }}>
          {event.title}
        </Title>
        <Title style={{ fontSize: 16 }}>About this event</Title>
        <Paragraph style={inlineStyles.contentText}>{event.about}</Paragraph>
        <View style={inlineStyles.rowWithIcon}>
          <Icon type="material-community" name="map-marker-outline" />
          <Paragraph style={[inlineStyles.contentText, { marginLeft: 20 }]}>
            {textShorthand(event.location, 35)}
          </Paragraph>
        </View>
        <View style={inlineStyles.rowWithIcon}>
          <Icon type="feather" name="calendar" />
          <Paragraph style={[inlineStyles.contentText, { marginLeft: 20 }]}>
            {moment(event.date).format('LLLL')}
          </Paragraph>
        </View>
        <View style={[inlineStyles.rowWithIcon, { alignItems: 'flex-start' }]}>
          <Icon type="fontisto" name="money-symbol" />
          <View style={{ marginHorizontal: 20, marginRight: 50 }}>
            {Object.keys(event.prices).map((key, index) => (
              <Text
                key={Number(index)}
                style={{
                  textTransform: 'uppercase',
                  paddingTop: index === 0 ? 0 : 8
                }}>
                {`${key}:`}
              </Text>
            ))}
          </View>
          <View>
            {Object.keys(event.prices).map((key, index) => (
              <Text
                key={Number(index)}
                style={{ paddingTop: index === 0 ? 0 : 8 }}>
                {`${event.prices[key]} ${event.currency}`}
              </Text>
            ))}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15
          }}>
          <Title style={{ fontSize: 16 }}>Organised by CLA </Title>
          <Confirm
            text="Follow"
            onPress={() => navigation.navigate(EVENT_FORUM, { event })}
          />
        </View>
        <Title style={{ fontSize: 16 }}>Map Location</Title>
        <Map event={event} navigation={navigation} />

        <Title
          style={{
            color: colors.primary,
            fontSize: 14,
            lineHeight: 17,
            marginTop: 10
          }}>
          Similar events
        </Title>
        <CardsSlides
          number={4}
          title='"Stack of cards" layout | Loop'
          type="stack"
        />
        <Confirm
          style={{ maxWidth: 120, alignSelf: 'flex-end' }}
          text="See More"
          uppercase={false}
          mode="text"
          contentStyle={{ height: 45 }}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

EventDetails.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default EventDetails;
