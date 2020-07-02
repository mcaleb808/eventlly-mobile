import React from 'react';
import { ScrollView } from 'react-native';
import { withTheme, HelperText } from 'react-native-paper';
import { useFormik } from 'formik';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';

const ChangePassword = () => {
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

  const formik = useFormik({
    initialValues: { password1: '', password: '' },
    validate,
    onSubmit: {}
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
      <ScrollView
        style={{
          width: '100%',
          backgroundColor: 'white',
          flex: 1,
          padding: 20,
          marginBottom: 30
        }}>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password && touched.password}
          label="Enter old password"
        />

        {errors.password && touched.password ? (
          <HelperText style={styles.helperText} type="error">
            {errors.password}
          </HelperText>
        ) : null}
        <TextInput
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password && touched.password}
          label="Enter new password"
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
          label="Confirm password"
        />
        <Confirm
          style={{ marginTop: 20 }}
          text="submit"
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={handleSubmit}
        />
      </ScrollView>
    </Container>
  );
};

export default withTheme(ChangePassword);
