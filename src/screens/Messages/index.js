import { Badge, Avatar, Text, withTheme } from 'react-native-paper';

import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import { messages } from '../../constants/dummyData';
import MessagesList from '../../components/Lists/FlatList';

import { INBOX } from '../../constants/routeNames';
import styles from './styles';
import { textShorthand } from '../../helpers';

const Messages = ({ navigation, theme }) => (
  <MessagesList
    theme={theme}
    data={messages}
    renderItem={({ item: message }) => (
      <View style={styles.container}>
        <Avatar.Image size={45} source={{ uri: message.author.avatar }} />
        <View style={styles.centerContainer}>
          <View style={styles.titleContainer}>
            <Text
              style={[
                styles.title,
                { fontWeight: message.unread ? 'bold' : '500' }
              ]}>
              {message.author.fullName}
            </Text>
            <Text style={styles.timestamp}>
              {moment(message.date).calendar()}
            </Text>
          </View>
          <View style={styles.messageContainer}>
            <Text
              style={[
                styles.centerSubtitle,
                { fontWeight: message.unread ? 'bold' : '300' }
              ]}>
              {textShorthand(message.content, 45)}
            </Text>
            {message.unread && <Badge>3</Badge>}
          </View>
        </View>
      </View>
    )}
    onItemPress={item => navigation.navigate(INBOX, { message: item })}
  />
);

Messages.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  theme: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Messages);
