import React, { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { TextInput, Title } from 'react-native-paper';
import image from '../../assets/img/searchBanner.png';
import Confirm from '../../components/Buttons/Confirm';
import themes from '../../assets/themes';

const { colors } = themes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%'
  },
  image: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    resizeMode: 'contain',
    padding: 20
  },
  title: {
    color: 'white',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '500'
  },
  text: {
    fontSize: 24,
    lineHeight: 29,
    marginVertical: 10,
    fontWeight: '800',
    color: '#000000'
  }
});

const Search = () => {
  const [inputValues, setInputs] = useState({ submitting: false });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <ImageBackground source={image} style={styles.image}>
        <View style={{ width: '50%', paddingTop: 20 }}>
          {[
            { placeholder: 'Today', text: 'I want to go out' },
            {
              placeholder: 'Kigali',
              text: 'At'
            },
            {
              placeholder: 'Any Event',
              text: 'I want'
            }
          ].map((input, index) => (
            <View key={Number(index)}>
              <Text style={{ color: 'white', marginTop: 2 }}>{input.text}</Text>
              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 24,
                  lineHeight: 29,
                  fontWeight: '800'
                }}
                theme={{
                  colors: {
                    placeholder: '#fff3',
                    text: '#fff3',
                    primary: 'white'
                  }
                }}
                selectionColor="white"
                onChangeText={value =>
                  setInputs({ ...inputValues, [input.placeholder]: value })
                }
                value={inputValues[input.placeholder]}
                placeholder={input.placeholder}
              />
            </View>
          ))}
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            fontWeight: '500',
            paddingTop: 20
          }}>
          <MaterialCommunityIcons
            style={{ color: 'white' }}
            size={24}
            name="search"
          />
          <Confirm
            text="Search"
            style={{ alignSelf: 'flex-end' }}
            labelStyle={{ fontSize: 16, lineHeight: 19, color: colors.primary }}
            color="white"
            onPress={() => null}
          />
        </View>
      </ImageBackground>
      <View style={{ padding: 30 }}>
        <Title style={styles.text}>Today</Title>
        <Title style={styles.text}>Tomorrow</Title>
      </View>
    </View>
  );
};

export default Search;
