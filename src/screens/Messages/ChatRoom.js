import React, { useState } from 'react';
import { Avatar, withTheme, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { messages } from '../../constants/dummyData';
import InboxList from '../../components/Lists/FlatList';
import Icon from '../../components/Icons';
import styles from './styles';
import inputProps from '../../constants/inputProps';

const Inbox = ({ theme }) => {
  const { colors } = theme;
  const [inputValue, setInput] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <InboxList
        data={messages}
        renderItem={({ item: message, index }) =>
          message.content ? (
            <View
              style={{
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                alignItems: 'center'
              }}>
              <View
                style={{
                  alignItems: 'center',
                  paddingRight: index % 2 === 0 ? 7 : 0,
                  paddingLeft: index % 2 === 0 ? 0 : 7,
                  alignSelf: 'flex-start'
                }}>
                <Avatar.Image
                  size={45}
                  style={{ marginBottom: 5 }}
                  source={{ uri: message.author.avatar }}
                />

                <Text style={styles.timestamp}>
                  {moment(message.date).format('hh:mm a')}
                </Text>
              </View>
              <View
                style={{
                  maxWidth: '77%',
                  alignSelf: 'flex-start',
                  justifyContent: 'center',
                  backgroundColor:
                    index % 2 === 0 ? colors.disabled : colors.primary,
                  alignItems: 'center',
                  padding: 8,
                  borderRadius: 10,
                  borderBottomLeftRadius: index % 2 === 0 ? 0 : 10,
                  borderBottomRightRadius: index % 2 === 0 ? 10 : 0
                }}>
                <Text
                  style={{
                    color: index % 2 === 0 ? colors.text : colors.accent
                  }}>
                  {message.content}
                </Text>
              </View>
            </View>
          ) : null
        }
      />
      <View
        style={{
          padding: 5,
          backgroundColor: colors.accent,
          width: '100%',
          height: 80,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          bottom: 0
        }}>
        <TextInput
          onChangeText={setInput}
          value={inputValue}
          {...inputProps.find(input => input.textContentType === 'none')}
          style={{
            width: '85%',
            height: 45,
            paddingHorizontal: 15,
            borderRadius: 5,
            borderColor: colors.disabled,
            borderWidth: 0.5
          }}
        />
        <TouchableOpacity activeOpacity={0.6}>
          <Icon name="send-o" type="font-awesome" color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

Inbox.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired
};

Inbox.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  const { message: { author } = {} } = params;
  return { title: author.fullName };
};

export default withTheme(Inbox);
