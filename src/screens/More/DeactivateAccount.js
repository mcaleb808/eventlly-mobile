import React from 'react';
import { ScrollView } from 'react-native';
import { withTheme, HelperText, Title } from 'react-native-paper';
import { useFormik } from 'formik';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import { colors } from 'react-native-elements';

const DeactivateAccount = () => {
  const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password is incorrect';
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
        <Title
          style={[
            styles.title,
            {
              fontSize: 16,
              lineHeight: 19,
              color: colors.primary,
              marginVertical: 20
            }
          ]}>
          Hey John, it is sad to see you leave before you leave please
        </Title>
        <TextInput
          style={styles.input}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          error={errors.password && touched.password}
          label="Enter password"
        />

        {errors.password && touched.password ? (
          <HelperText style={styles.helperText} type="error">
            {errors.password}
          </HelperText>
        ) : null}
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

export default withTheme(DeactivateAccount);
