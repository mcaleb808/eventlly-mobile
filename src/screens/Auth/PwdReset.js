import React, { useState } from 'react';
import { Title, withTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { isEmail } from 'validator';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import inputs from '../../constants/inputProps';
import LinkWithText from '../../components/Buttons/LinkWithText';
import { LOGIN, NEW_PASSWORD } from '../../constants/routeNames';
import { submitResetPwd } from '../../redux/actions/auth';
import Error from '../../components/Error';
import MessageAlert from '../../components/shared/MessageAlert';

const input = inputs.find(i => i.label.includes('Email'));
const Reset = ({ navigation }) => {
  const [inputValues, setInputs] = useState({ submitting: false });

  const { submitting, resetPwdMessage, resetSuccessMessage } = useSelector(
    state => state.auth
  );

  const dispatch = useDispatch();

  const [validEmail, setValidEmail] = useState({
    status: true,
    error: 'Email is required'
  });

  const onResetPassword = async () => {
    setValidEmail({ status: true });
    const { emailAddress } = inputValues;

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

    dispatch(
      submitResetPwd({
        email: emailAddress
      })
    );
  };

  return (
    <Container>
      <Container style={{ width: '91.7%' }}>
        <Title style={[styles.title, { marginBottom: 30 }]}>
          Reset Password
        </Title>
        <TextInput
          style={[styles.input, { marginTop: 25 }]}
          key={Number(1)}
          onChangeText={value =>
            setInputs({ ...inputValues, [input.textContentType]: value })
          }
          value={inputValues[input.textContentType]}
          validInfo={validEmail}
          {...input}
        />
        {resetPwdMessage && resetPwdMessage.length > 1 ? (
          <Error text={resetPwdMessage} />
        ) : null}
        <Confirm
          style={{ marginBottom: 40, marginTop: 20 }}
          text={submitting ? 'Please wait' : 'submit'}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          loading={submitting}
          disabled={submitting}
          onPress={() => onResetPassword()}
        />
        <LinkWithText
          text="Do you have an account?"
          buttonLabel="log in"
          onPress={() => navigation.navigate(LOGIN)}
        />
      </Container>
      {resetSuccessMessage && resetSuccessMessage.length > 0 ? (
        <MessageAlert visible={true} message={resetSuccessMessage} />
      ) : null}
    </Container>
  );
};

Reset.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(Reset);
