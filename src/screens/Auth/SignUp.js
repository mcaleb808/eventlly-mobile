/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Title, withTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { submitSignUp } from '../../redux/actions/auth';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import LinkWithText from '../../components/Buttons/LinkWithText';
import inputs from '../../constants/inputProps';
import { LOGIN, WELCOME } from '../../constants/routeNames';
import SocialButton from '../../components/Buttons/SocialButton';
import Error from '../../components/Error';
import MessageAlert from '../../components/shared/MessageAlert';

const SignUp = ({ navigation }) => {
  const { submitting, signupMessage, confirmSuccessMessage } = useSelector(
    state => state.auth
  );
  const [inputValues, setInputs] = useState({});

  const dispatch = useDispatch();

  const [validemail, setValidEmail] = useState({
    status: true,
    error: 'Invalid email'
  });
  const [validpassword, setValidPassword] = useState({
    status: true,
    error: 'Minimum 6 characters'
  });
  const [validLName, setValidLName] = useState({
    status: true,
    error: 'required'
  });
  const [validFName, setValidFName] = useState({
    status: true,
    error: 'required'
  });

  const [confirmPassword, setConfirm] = useState({
    status: true,
    error: 'required'
  });

  const onSubmitButton = () => {
    setValidEmail({ status: true });
    setValidPassword({ status: true });
    setValidFName({ status: true });
    setValidLName({ status: true });
    setConfirm({ status: true });

    const {
      emailAddress,
      password,
      familyName,
      givenName,
      newPassword
    } = inputValues;

    if (!emailAddress || emailAddress.length < 1) {
      setValidEmail({
        status: false,
        error: 'Email is required'
      });
      return;
    }
    if (!isEmail(emailAddress)) {
      setValidEmail({
        status: false,
        error: 'Enter a valid Email '
      });
      return;
    }

    if (!familyName || familyName.length < 1) {
      setValidFName({
        status: false,
        error: 'FirstName is required'
      });
      return;
    }

    if (!givenName || givenName.length < 1) {
      setValidLName({
        status: false,
        error: 'LastName is required'
      });
      return;
    }

    if (!password || password.length < 1) {
      setValidPassword({
        status: false,
        error: 'Password is required'
      });
      return;
    }
    if (password.length < 6) {
      setValidPassword({
        status: false,
        error: 'Minimum 6 characters'
      });
      return;
    }
    if (!newPassword || newPassword.length < 1) {
      setConfirm({
        status: false,
        error: 'Password is required'
      });
      return;
    }
    if (password !== newPassword) {
      setConfirm({
        status: false,
        error: "Passwords don't match"
      });

      return;
    }

    dispatch(
      submitSignUp({
        email: emailAddress,
        password,
        firstName: familyName,
        lastName: givenName,
        role: 2,
        location: 'Kigali'
      })
    ).then(res => {
      if (res.status === 201) {
        navigation.navigate(WELCOME, {
          snackBar: {
            status: true,
            message: 'You have successfully registered.'
          }
        });
      }
    });
  };

  return (
    <Container>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%', padding: 20 }}
        showsVerticalScrollIndicator={false}>
        <Title style={[styles.title]}>Sign Up</Title>
        {inputs.map((input, index) => (
          <TextInput
            style={[styles.input, { marginTop: index === 0 ? 25 : 0 }]}
            key={Number(index)}
            onChangeText={value =>
              setInputs({ ...inputValues, [input.textContentType]: value })
            }
            value={inputValues[input.textContentType]}
            {...input}
            validInfo={
              input.textContentType === 'emailAddress'
                ? validemail
                : input.textContentType === 'familyName'
                ? validFName
                : input.textContentType === 'givenName'
                ? validLName
                : input.textContentType === 'password'
                ? validpassword
                : confirmPassword
            }
          />
        ))}
        {signupMessage.toLowerCase().includes('exists') ? (
          <Error text={signupMessage} />
        ) : signupMessage.length > 1 ? (
          <Error text="An error occurred, Please try again" />
        ) : null}
        <Confirm
          style={{ marginVertical: 30 }}
          text="sign up"
          loading={submitting}
          disabled={submitting}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={() => onSubmitButton()}
        />
        <LinkWithText
          text="Do you have an account?"
          buttonLabel="log in"
          onPress={() => navigation.navigate(LOGIN)}
        />
        <Text
          style={{
            marginTop: 25,
            fontWeight: '500',
            lineHeight: 17,
            color: 'rgba(29, 57, 77, 0.7)',
            fontSize: 14
          }}>
          Sign Up with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 40
          }}>
          <SocialButton
            name="Facebook"
            source={require('../../assets/img/authFacebook.png')}
            color="#475993"
            textColor="#FFFFFF"
            onPress={() => null}
            navigation={navigation}
          />
          <SocialButton
            name="Google"
            source={require('../../assets/img/authGoogle.png')}
            color="#FFFFFF"
            textColor="#518EF8"
            onPress={() => null}
            navigation={navigation}
          />
        </View>
      </KeyboardAwareScrollView>
      {confirmSuccessMessage && confirmSuccessMessage.length > 0 ? (
        <MessageAlert visible message={confirmSuccessMessage} />
      ) : null}
    </Container>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(SignUp);
