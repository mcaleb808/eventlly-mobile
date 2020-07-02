import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import EventBanner from '../../components/Tickets/EventBanner';
import themes from '../../assets/themes';
import Confirm from '../../components/Buttons/Confirm';

const { colors } = themes;

const PostComment = ({ navigation }) => {
  const { params } = navigation.state;
  const { event = {} } = params;
  const [inputValues, setInputs] = useState({
    submitting: false
  });
  return (
    <ScrollView
      style={{ width: '100%', backgroundColor: colors.accent }}
      showsVerticalScrollIndicator={false}>
      <EventBanner event={event} />
      <View style={{ width: '100%', padding: 20 }}>
        <Confirm
          text="Post"
          labelStyle={{ fontSize: 12, lineHeight: 14 }}
          style={{ width: 71, alignSelf: 'flex-end' }}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{
            height: 160,
            backgroundColor: colors.accent,
            marginVertical: 10
          }}
          mode="outlined"
          multiline
          numberOfLines={4}
          onChangeText={value => setInputs({ ...inputValues, title: value })}
          value={inputValues.title}
        />
        <MaterialCommunityIcons style={[]} size={24} name="camera" />
      </View>
    </ScrollView>
  );
};

export default PostComment;

PostComment.propTypes = {
  navigation: PropTypes.any.isRequired
};
