import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking
} from 'react-native';
import { Avatar, Title, Text } from 'react-native-paper';
import { textChip } from '../../components/shared/styles';
import themes from '../../assets/themes';
import twitter from '../../assets/img/twitter.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';

const { colors } = themes;

const styles = StyleSheet.create({
  text: {
    color: '#1D394D',
    fontSize: 15,
    lineHeight: 18,
    fontWeight: 'bold',
    marginBottom: 13
  }
});

const Profile = () => (
  <View style={{ width: '100%', backgroundColor: 'white', flex: 1 }}>
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: 'rgba(29, 57, 77, 0.2)',
        backgroundColor: 'white',
        padding: 20
      }}>
      <Avatar.Image
        size={60}
        source={require('../../assets/img/userIcon.png')}
      />
      <View style={{ justifyContent: 'space-between', width: '73%' }}>
        <Title style={styles.text}>CLA Organizer</Title>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
          {Array.from(['Chat', '13 Events', '200 Followers'], (key, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => null}
              key={Number(index)}>
              <Text
                style={[
                  textChip,
                  {
                    color: colors.primary,
                    borderColor: colors.primary
                  }
                ]}>
                {key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
    <View style={{ padding: 20 }}>
      <Title style={styles.text}>About the Organizer</Title>
      <Text
        style={[
          styles.text,
          { fontSize: 13, lineHeight: 15, fontWeight: 'normal' }
        ]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation
      </Text>
      <Title style={styles.text}>Contact</Title>
      <Text>{'Email:       claevents@gmail.com'} </Text>
      <Text>{'Phone:      123-1234-12345'} </Text>
      <View
        style={{
          flexDirection: 'row'
        }}>
        {Array.from([facebook, twitter, instagram, youtube], (item, index) => (
          <TouchableOpacity
            key={Number(index)}
            style={{ marginRight: 20, marginVertical: 20 }}
            activeOpacity={0.9}
            onPress={() =>
              Linking.openURL('https://web.facebook.com/kmugisha1').catch(err =>
                console.error('An error occurred', err)
              )
            }>
            <Image
              source={item}
              resizeMethod="scale"
              resizeMode="contain"
              style={[{ width: 30, height: 30 }]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </View>
);

export default Profile;
