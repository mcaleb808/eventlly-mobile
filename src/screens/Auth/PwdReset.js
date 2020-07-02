/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Title, withTheme, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import LinkWithText from '../../components/Buttons/LinkWithText';
import { LOGIN, NEW_PASSWORD } from '../../constants/routeNames';
import EventlyMessage from '../../components/Message';
import resetPwd from '../../redux/actions/auth/reset-pwd';
import { clearAuthState } from '../../redux/actions/auth/setNewPassword';

const Reset = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    state => state.user.resetPassword
  );

  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Please enter a valid email address';
    }

    return errors;
  };

  const handleSignUpSubmit = values => {
    const userData = {
      email: values.email
    };

    resetPwd(userData)(dispatch);
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validate,
    onSubmit: values => {
      handleSignUpSubmit(values);
    }
  });
  React.useEffect(
    () => () => {
      clearAuthState()(dispatch);
      if (formik.errors) {
        formik.setErrors(null);
      }
    },
    []
  );
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
        <Title style={[styles.title, { marginBottom: 30 }]}>
          Reset Password
        </Title>
        {data && (
          <EventlyMessage
            style={{ marginTop: 30 }}
            title="Success!"
            error={false}
            message="We sent you an email with instructions on how to reset your account password"
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
        {error && <EventlyMessage title="Error" message={error.error} />}
        <Confirm
          style={{ marginBottom: 40, marginTop: 20 }}
          labelStyle={styles.confirmButton}
          text={loading ? 'Please wait...' : 'Send'}
          disabled={loading}
          loading={loading}
          contentStyle={{ height: 45 }}
          onPress={handleSubmit}
        />
        <LinkWithText
          text="Want to Login?"
          buttonLabel="log in here"
          onPress={() => navigation.navigate(NEW_PASSWORD)}
        />
      </Container>
    </Container>
  );
};

Reset.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Reset);
