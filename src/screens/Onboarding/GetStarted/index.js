import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  AsyncStorage
} from 'react-native';
import { Title, withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import TextInput from '../../../components/Inputs/TextInput';
import Img3 from '../../../assets/img/car_pic.png';
import Confirm from '../../../components/Buttons/Confirm';
import Container from '../../../components/Containers';
import { SIGNUP } from '../../../constants/routeNames';

const SetLocation = ({
  navigation,
  theme: {
    colors: { darkBlue }
  }
}) => {
  const style = StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      width: Dimensions.get('window').width,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 0,
      backgroundColor: 'white'
    },
    image: {
      width: '100%',
      height: '50%',
      marginBottom: 12
    },
    title: {
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      marginBottom: 11
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      color: 'black'
    },
    textsWrapper: {
      paddingHorizontal: 21
    },

    mainContent: {
      width: '100%',
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'space-between'
    },

    going: {
      fontFamily: 'SFProText',
      fontStyle: 'normal',
      width: '60%',
      lineHeight: 28,
      fontSize: 24,
      color: darkBlue,
      fontWeight: 'bold',
      marginBottom: 10
    },
    inputs: {},
    confirmButton: {}
  });

  const slide = {
    title: 'Lets get started',
    text: 'Signup or sign in to create and manage events',
    image: Img3,
    key: 2
  };

  const [form, setForm] = useState({});

  const onSubmit = async () => {
    await AsyncStorage.setItem('location', form.location);
    navigation.navigate(SIGNUP);
  };

  return (
    <Container>
      <StatusBar hidden />
      <Image style={style.image} source={slide.image} resizeMode="cover" />
      <View style={style.mainContent}>
        <Title style={style.going}>What is your preferred City?</Title>
        <TextInput
          label="Enter your City Name"
          mode="flat"
          onChangeText={text => setForm({ location: text })}
          value={form.location || ''}
        />
        <Confirm
          style={{ marginBottom: 20 }}
          text="Continue"
          // disabled={!form.location}
          labelStyle={style.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={() => onSubmit()}
        />
      </View>
    </Container>
  );
};

SetLocation.propTypes = {
  theme: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired
};

export default withTheme(SetLocation);
