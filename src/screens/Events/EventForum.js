import React from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Title, Text, FAB } from 'react-native-paper';
import EventBanner from '../../components/Tickets/EventBanner';
import themes from '../../assets/themes';
import { textChip } from '../../components/shared/styles';
import CommentCard from '../../components/Cards/CommentCard';
import { POST_COMMENT, PROFILE } from '../../constants/routeNames';
import SmallButtons from '../../components/Buttons/SmallButtons';

const { colors } = themes;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    backgroundColor: colors.primary,
    margin: 16,
    right: 0,
    bottom: 0
  }
});

const EventForum = ({ navigation }) => {
  const { params } = navigation.state;
  const { event = {} } = params;
  return (
    <View style={{ width: '100%' }}>
      <ScrollView
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}>
        <EventBanner event={event} />
        <View style={{ width: '100%', backgroundColor: 'white', padding: 20 }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Title style={{ fontSize: 14, lineHeight: 17, fontWeight: 'bold' }}>
              Organized by CLA
            </Title>
            <SmallButtons
              onPress={() => navigation.navigate(PROFILE)}
              text="View Profile"
            />
          </View>
        </View>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="feather"
        onPress={() => navigation.navigate(POST_COMMENT, { event })}
      />
    </View>
  );
};

export default EventForum;

EventForum.propTypes = {
  navigation: PropTypes.any.isRequired
};
