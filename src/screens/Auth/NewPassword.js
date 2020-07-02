import React, { useState } from 'react';
import { Title, withTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../../components/Containers';
import TextInput from '../../components/Inputs/TextInput';
import Confirm from '../../components/Buttons/Confirm';
import styles from '../../components/shared/styles';
import inputs from '../../constants/inputProps';
import MessageAlert from '../../components/shared/MessageAlert';
import Error from '../../components/Error';
import { submitNewPassword } from '../../redux/actions/auth';
import { LOGIN } from '../../constants/routeNames';

const passwordProps = inputs.find(i =>
  i.label.toLowerCase().includes('password')
);

const NewPassword = ({ navigation }) => {
  const { params } = navigation.state;
  const { token } = params;
  const [inputValues, setInputs] = useState({ submitting: false });
  const { submitting, changePwdMessage, successMessage } = useSelector(
    state => state.auth
  );

  const [validPassword, setValidPassword] = useState({
    status: true,
    error: 'Minimum 6 characters'
  });
  const [confirmPassword, setConfirm] = useState({
    status: true,
    error: 'required'
  });

  const dispatch = useDispatch();

  const onNewPwdSubmit = async () => {
    setValidPassword({ status: true });
    setConfirm({ status: true });
    const { newPassword, password } = inputValues;

    if (!password || password.length < 1) {
      setValidPassword({
        status: false,
        error: 'New password is required'
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
    dispatch(submitNewPassword({ password, token }))
      .then(res => {
        if (res.status && res.status === 200) {
          navigation.navigate(LOGIN);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Container style={{ width: '91.7%' }}>
        <Title style={[styles.title]}>New Password</Title>
        {[
          { ...passwordProps, label: 'Enter your new password' },
          {
            ...passwordProps,
            label: 'Repeat the same password',
            textContentType: 'newPassword'
          }
        ].map((input, index) => (
          <TextInput
            style={[styles.input, { marginTop: index === 0 ? 25 : 0 }]}
            key={Number(index)}
            onChangeText={value =>
              setInputs({ ...inputValues, [input.textContentType]: value })
            }
            value={inputValues[input.textContentType]}
            validInfo={
              input.textContentType === 'password'
                ? validPassword
                : confirmPassword
            }
            {...input}
          />
        ))}
        {changePwdMessage.length > 1 ? <Error text={changePwdMessage} /> : null}
        <Confirm
          style={{ marginTop: 20 }}
          text={submitting ? 'Please wait' : 'submit'}
          loading={submitting}
          disable={submitting}
          labelStyle={styles.confirmButton}
          contentStyle={{ height: 45 }}
          onPress={() => onNewPwdSubmit()}
        />
      </Container>
      {successMessage && successMessage.length > 0 ? (
        <MessageAlert visible={true} message={successMessage} />
      ) : null}
    </Container>
  );
};

export default withTheme(NewPassword);
