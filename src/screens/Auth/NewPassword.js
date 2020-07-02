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
import login from '../../redux/actions/auth/login';
import EventlyMessage from '../../components/Message';
import LinkWithText from '../../components/Buttons/LinkWithText';
import { LOGIN } from '../../constants/routeNames';
import setNewPassword from '../../redux/actions/auth/setNewPassword';

const NewPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error, msg } = useSelector(
    ({ user }) => user.setNewPassword
  );

  useEffect(() => {
    if (msg) {
      navigation.navigate(LOGIN);
    }
  }, [msg]);

  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password should be least 6 characters long';
    }

    if (!values.password1) {
      errors.password1 = 'Password confirmation is required';
    } else if (values.password1.length < 6) {
      errors.password1 = 'Password should be least 6 characters long';
    } else if (values.password !== values.password1) {
      errors.password1 = 'Passwords do not match';
    }

    return errors;
  };

  const handleSetNewPassword = values => {
    const userData = {
      password: values.password,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkNyeWNldHJ1bHlAZ21haWwuY29tIiwiaWF0IjoxNTg0MjA5NjEwLCJleHAiOjE1ODQyOTYwMTB9.w-kjAy7VcugiZyYakg9UN8DAxr_R4mwYb6GZoVZDzOU'
    };
    setNewPassword(userData)(dispatch);
  };

  const formik = useFormik({
    initialValues: { password1: '', password: '' },
    validate,
    onSubmit: values => {
      handleSetNewPassword(values);
    }
  });

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
      <Container style={{ width: '91.7%' }}>
        <Title style={[styles.title]}>New Password</Title>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password && touched.password}
          label="Enter your new password"
        />

        {errors.password && touched.password ? (
          <HelperText style={styles.helperText} type="error">
            {errors.password}
          </HelperText>
        ) : null}

        <TextInput
          style={styles.input}
          onChangeText={handleChange('password1')}
          onBlur={handleBlur('password1')}
          value={values.password1}
          error={errors.password1 && touched.password1}
          label="Repeat the same password"
        />

        {errors.password1 && touched.password1 ? (
          <HelperText style={styles.helperText} type="error">
            {errors.password1}
          </HelperText>
        ) : null}

        {error && error.status !== 409 && (
          <EventlyMessage title="Error" message={error.error} />
        )}
        <Confirm
          style={{ marginTop: 20 }}
          text={loading ? 'Please wait' : 'submit'}
          disabled={loading}
          loading={loading}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={handleSubmit}
        />
        <LinkWithText
          text="Want to Login?"
          buttonLabel="log in here"
          onPress={() => navigation.navigate(LOGIN)}
        />
      </Container>
    </Container>
  );
};

export default withTheme(NewPassword);
