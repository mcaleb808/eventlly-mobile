/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Title, withTheme, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import LinkWithText from '../../components/Buttons/LinkWithText';
import { SIGNUP, RESET, APP } from '../../constants/routeNames';
import EventlyMessage from '../../components/Message';
import login from '../../redux/actions/auth/login';
import SocialAuthView from './SocialAuth';

const Login = ({ navigation }) => {
  const { data } = useSelector(state => state.user.signUp);
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.user.login);

  const { userEmail } = useSelector(state => state.user.checkUserExists);
  const { error, loading } = loginData;

  const { msg } = useSelector(({ user }) => user.setNewPassword);

  useEffect(() => {
    if (
      loginData.data &&
      loginData.data.status &&
      loginData.data.status === 200 &&
      loginData.data.user
    ) {
      navigation.navigate(APP, loginData.data.user);
    }
  }, [loginData]);

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Please enter a valid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const handleSignUpSubmit = values => {
    const userData = {
      email: values.email,
      password: values.password
    };

    login(userData)(dispatch);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validate,
    onSubmit: values => {
      handleSignUpSubmit(values);
    }
  });
  useEffect(() => {
    if (userEmail) {
      formik.setFieldValue('email', userEmail);
    }
  }, [userEmail]);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values
  } = formik;
  return (
    <Container>
      <ScrollView style={{ width: '91.7%' }}>
        <Title style={[styles.title]}>Sign In</Title>

        {data && data.user && data.status && data.status === 201 && (
          <EventlyMessage
            style={{ marginTop: 30 }}
            title="Success!"
            error={false}
            message={`We sent a confirmation email to ${data.user.email.toLowerCase()},please click the link in your mail box to confirm your account`}
          />
        )}

        {msg && (
          <EventlyMessage
            style={{ marginTop: 30 }}
            title="Success!"
            error={false}
            message={msg}
          />
        )}
        <TextInput
          style={[styles.input, { marginTop: 25 }]}
          error={errors.email && touched.email}
          label="Enter your Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {errors.email && touched.email ? (
          <HelperText style={styles.helperText} type="error">
            {errors.email}
          </HelperText>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password && touched.password}
          label="Enter your password"
        />

        {errors.password && touched.password ? (
          <HelperText style={styles.helperText} type="error">
            {errors.password}
          </HelperText>
        ) : null}
        {error && error.status !== 409 && (
          <EventlyMessage title="Error" message={error.error} />
        )}
        <LinkWithText
          text="Forgot password?"
          buttonLabel="reset"
          disabled={loading}
          onPress={() => navigation.navigate(RESET)}
          textTransform="capitalize"
        />
        <Confirm
          style={{ marginVertical: 30 }}
          text={loading ? 'Verifying' : 'sign in'}
          disabled={loading}
          loading={loading}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={handleSubmit}
        />

        <LinkWithText
          text="New here? Get started"
          disabled={loading}
          buttonLabel="sign up"
          onPress={() => navigation.navigate(SIGNUP)}
        />
        <SocialAuthView />
      </ScrollView>
    </Container>
  );
};

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Login);
