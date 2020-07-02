/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, StatusBar } from 'react-native';
import { Title, withTheme } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import Img3 from '../../../assets/img/car_pic.png';
import Confirm from '../../../components/Buttons/Confirm';
import Container from '../../../components/Containers';
import { SIGNUP } from '../../../constants/routeNames';
import setLocation from '../../../redux/actions/auth/setLocation';

const SetLocation = ({
  navigation,
  theme: {
    colors: { darkBlue, white }
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

  const dispatch = useDispatch();
  React.useEffect(() => {
    if (form.location) {
      setLocation(form.location)(dispatch);
    }
  }, [dispatch, form]);
  return (
    <Container style={style.wrapperOuter}>
      <StatusBar hidden />
      <Image style={style.image} source={slide.image} resizeMode="cover" />
      <View style={style.mainContent}>
        <Title style={style.going}>What is your preferred City?</Title>
        <GooglePlacesAutocomplete
          query={{
            key: 'tobeadded',
            language: 'en',
            components: 'country:ug'
          }}
          placeholder="Enter your City Name"
          onPress={data => setForm({ location: data.description })}
          onFail={error => console.error(error)}
          requestUrl={{
            url:
              'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'mobile'
          }}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              borderTopWidth: 0,
              borderBottomWidth: 0,
              marginBottom: 1
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 14,
              lineHeight: 20,
              borderBottomWidth: 1,
              borderColor: 'rgba(29, 57, 77, 0.4)'
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            }
          }}
        />
        <Confirm
          style={{ marginBottom: 20 }}
          text="Continue"
          disabled={!form.location}
          labelStyle={style.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={() => {
            navigation.navigate(SIGNUP, { ...form });
          }}
        />
      </View>
    </Container>
  );
};

export default withTheme(SetLocation);
