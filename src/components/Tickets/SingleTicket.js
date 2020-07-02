import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Share
} from 'react-native';
import { Title, Text } from 'react-native-paper';
import moment from 'moment';
import themes from '../../assets/themes';
import Confirm from '../Buttons/Confirm';
import star from '../../assets/img/star.png';
import barCode from '../../assets/img/qr-code.png';

const { colors } = themes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: '2%',
    paddingBottom: '4%'
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'flex-end'
  },
  time: {
    color: colors.primary,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 'normal'
  },
  icon: {
    marginRight: '20%'
  }
});

const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'Caleb shared with you a VIP ticket for 5 Aside Tournament, Location: Kakyeeka Stadium, Date: 3rd Decemember, 2020, 4:00 pm'
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.log(error.message);
  }
};

const SingleTicket = () => (
  <View
    style={{
      width: '100%',
      paddingHorizontal: 15,
      alignItems: 'center',
      borderRadius: 5,
      borderColor: colors.disabled,
      borderWidth: 0.5,
      marginVertical: '2%'
    }}>
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15
      }}>
      <Confirm
        style={{ backgroundColor: colors.secondaryBorder }}
        text="AG-1265-9076"
      />
      <ImageBackground source={star} style={{ width: 40, height: 40 }}>
        <Text
          style={{
            position: 'absolute',
            left: '22%',
            top: '32%',
            fontWeight: 'bold',
            fontSize: 11,
            lineHeight: 13,
            color: colors.accent
          }}>
          Paid
        </Text>
      </ImageBackground>
    </View>
    <Title style={{ alignSelf: 'flex-start' }}>5 Aside Tournament</Title>
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 5,
          width: '50%',
          justifyContent: 'space-between'
        }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.time}>Kakyeeka Stadium</Text>
          <Text style={styles.time}>{moment().format('LLLL')}</Text>
          <Text style={[styles.time, { color: colors.secondaryBorder }]}>
            1 VIP Ticket
          </Text>
        </View>
        <TouchableOpacity onPress={onShare}>
          <Text style={styles.time}>Share Ticket</Text>
        </TouchableOpacity>
      </View>
      <Image source={barCode} style={styles.image} />
    </View>
  </View>
);

export default SingleTicket;
