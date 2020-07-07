import React, { useState } from 'react';
import { Title, withTheme } from 'react-native-paper';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import LinkWithText from '../../components/Buttons/LinkWithText';
import inputs from '../../constants/inputProps';
import { SIGNUP, RESET, EVENTS, WELCOME } from '../../constants/routeNames';
import SocialButton from '../../components/Buttons/SocialButton';
import { submitLogin } from '../../redux/actions/auth';
import Error from '../../components/Error';
import MessageAlert from '../../components/shared/MessageAlert';

const data = inputs.filter(
  i =>
    i.label.toLowerCase().includes('email') || i.textContentType === 'password'
);

const Login = ({ navigation }) => {
  const { submitting, loginMessage, passwordSuccessMessage } = useSelector(
    state => state.auth
  );
  const [inputValues, setInputs] = useState({});
  const [checkEmail, setEmail] = useState({ status: true, error: 'required' });
  const [checkPassword, setPassword] = useState({
    status: true,
    error: 'required'
  });

  const [loginError, setError] = useState(null);
  const dispatch = useDispatch();

  const onLoginButton = async () => {
    setEmail({ status: true });
    setPassword({ status: true });
    const { emailAddress, password } = inputValues;
    if (!emailAddress || emailAddress.length < 1) {
      setEmail({
        status: false,
        error: 'Email is required'
      });
      return;
    }

    if (!password || password.length < 1) {
      setPassword({
        status: false,
        error: 'Password is required'
      });
      return;
    }

    const payload = { email: emailAddress, password };
    dispatch(submitLogin(payload))
      .then(res => {
        console.log(res);
        if (res.status && res.status === 200) {
          if (res.user && res.user.isActivated) {
            navigation.navigate(EVENTS);
          } else {
            navigation.navigate(WELCOME, {
              snackBar: {
                status: true,
                message: 'You have successfully logged in.'
              }
            });
          }
        }
      })
      .catch(err => {
        setError(loginMessage);
        console.log(err);
      });
  };

  return (
    <Container>
      <Container style={{ width: '91.7%' }}>
        <Title style={[styles.title]}>Sign In</Title>
        {data.map((input, index) => (
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
                ? checkEmail
                : checkPassword
            }
          />
        ))}
        {loginMessage && loginMessage.length > 1 ? (
          <Error text={`${loginMessage}, Please try again`} />
        ) : null}
        <LinkWithText
          text="Forgot password?"
          buttonLabel="reset"
          onPress={() => navigation.navigate(RESET)}
          textTransform="capitalize"
        />
        <Confirm
          style={{ marginVertical: 30 }}
          text="sign in"
          loading={submitting}
          disabled={submitting}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={() => onLoginButton()}
        />
        <LinkWithText
          text="New here? Get started"
          buttonLabel="sign up"
          onPress={() => navigation.navigate(SIGNUP)}
        />
        <Text
          style={{
            marginTop: 25,
            fontWeight: '500',
            lineHeight: 17,
            color: 'rgba(29, 57, 77, 0.7)',
            fontSize: 14
          }}>
          Login with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
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
      </Container>
      {passwordSuccessMessage && passwordSuccessMessage.length > 0 ? (
        <MessageAlert visible message={passwordSuccessMessage} />
      ) : null}
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Login);
