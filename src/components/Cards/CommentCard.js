import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { textChip } from '../shared/styles';
import image from '../../assets/img/forum.png';

const styles = StyleSheet.create({
  icon: {
    color: '#1D394D',
    fontWeight: '100'
  }
});

const CommentCard = () => (
  <View
    style={{
      width: '100%',
      borderTopWidth: 0.5,
      borderColor: 'rgba(29, 57, 77, 0.2)',
      backgroundColor: 'white'
    }}>
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
      }}>
      <Avatar.Image size={30} source={require('../../assets/img/forum.png')} />
      <View style={{ width: '80%' }}>
        <Image
          source={image}
          style={{
            resizeMode: 'contain',
            backgroundColor: '#e5f4fe'
          }}
        />
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 12, lineHeight: 14 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <MaterialCommunityIcons style={styles.icon} size={24} name="reply" />
          <MaterialCommunityIcons
            style={styles.icon}
            size={24}
            name="thumb-up-outline"
          />
          <MaterialCommunityIcons
            style={styles.icon}
            size={24}
            name="thumb-down-outline"
          />
          <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
            <Text
              style={[
                textChip,
                {
                  color: '#1D394D',
                  borderColor: '#1D394D'
                }
              ]}>
              Hide Comments
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

export default CommentCard;
