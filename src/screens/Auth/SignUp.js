/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Title, withTheme, HelperText } from 'react-native-paper';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import LinkWithText from '../../components/Buttons/LinkWithText';
import { LOGIN } from '../../constants/routeNames';
import signUp from '../../redux/actions/auth/signUp';
import EventlyMessage from '../../components/Message';

import SocialAuthView from './SocialAuth';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.user.location.data);
  const { data, error, loading } = useSelector(state => state.user.signUp);
  const { userEmail } = useSelector(state => state.user.checkUserExists);
  useEffect(() => {
    if (data && data.user) {
      navigation.navigate(LOGIN, data);
    }
  }, [data]);

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Please enter a valid email address';
    }
    if (!values.firstName) {
      errors.firstName = 'FirstName is required';
    }
    if (!values.lastName) {
      errors.lastName = 'LastName is required';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password should be least 6 characters long';
    }
    return errors;
  };

  const handleSignUpSubmit = values => {
    const userData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      phone: '',
      location
    };
    signUp(userData)(dispatch);
  };

  const formik = useFormik({
    initialValues: { email: '', firstName: '', lastName: '', password: '' },
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

  useEffect(() => {
    if (error && error.status === 409) {
      formik.setFieldError(
        'email',
        'This email address is already in use,please choose an new one'
      );
    }
  }, [error]);

  return (
    <Container>
      <Container style={{ width: '91.7%' }}>
        <Title style={[styles.title]}>Sign Up</Title>

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
          onChangeText={handleChange('firstName')}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          error={errors.firstName && touched.firstName}
          label="Enter your FirstName"
        />
        {errors.firstName && touched.firstName ? (
          <HelperText style={styles.helperText} type="error">
            {errors.firstName}
          </HelperText>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          error={errors.lastName && touched.lastName}
          label="Enter your LastName"
        />

        {errors.lastName && touched.lastName ? (
          <HelperText style={styles.helperText} type="error">
            {errors.lastName}
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

        <Confirm
          style={{ marginVertical: 30 }}
          text={loading ? 'Please wait' : 'sign up'}
          disabled={loading}
          loading={loading}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={handleSubmit}
        />
        <LinkWithText
          text="Do you have an account?"
          buttonLabel="log in"
          disabled={loading}
          onPress={() => navigation.navigate(LOGIN)}
        />
        <SocialAuthView />
      </Container>
    </Container>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(SignUp);
