import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { withTheme, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';
import Icon from '../../components/Icons';
import shareStyles from '../../components/shared/styles';

const EditProfile = ({ theme }) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    Title: {
      marginLeft: 20,
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#1D394D'
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      height: 60,
      width: 60,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: 'rgba(66, 110, 187, 0.8)'
    },
    form: {
      width: '100%',
      paddingTop: 25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  });

  const inputTheme = {
    colors: {
      placeholder: colors.primary
    }
  };

  const [inputValues, setInputs] = useState({ submitting: false });

  return (
    <Container>
      {Platform.OS === 'ios' && <StatusBarComponent />}
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          flex: 1,
          padding: 20,
          marginBottom: 30
        }}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            type="material-community"
            size={20}
            color="#1D394D"
            name="camera-outline"
          />
        </TouchableOpacity>
        <View style={styles.form}>
          {[
            { label: 'First Name' },
            {
              label: 'Last Name'
            }
          ].map((input, index) => (
            <TextInput
              style={[
                shareStyles.input,
                {
                  width: '48%',
                  fontSize: 14,
                  lineHeight: 17
                }
              ]}
              theme={inputTheme}
              key={Number(index)}
              onChangeText={value =>
                setInputs({ ...inputValues, [input.label]: value })
              }
              value={inputValues[input.label]}
              {...input}
            />
          ))}
        </View>
        {[
          { label: 'Phone Number' },
          { label: 'Email Address' },
          {
            label: 'Current Location'
          }
        ].map((input, index) => (
          <TextInput
            style={[
              shareStyles.input,
              {
                fontSize: 14,
                lineHeight: 17,
                marginBottom: index === 2 ? 15 : 0
              }
            ]}
            theme={inputTheme}
            key={Number(index)}
            onChangeText={value =>
              setInputs({ ...inputValues, [input.label]: value })
            }
            value={inputValues[input.label]}
            {...input}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

EditProfile.propTypes = {
  theme: PropTypes.any.isRequired
};
export default withTheme(EditProfile);
