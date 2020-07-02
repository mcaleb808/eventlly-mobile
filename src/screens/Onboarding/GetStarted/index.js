/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';
import { Title, withTheme, Paragraph, HelperText } from 'react-native-paper';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from '../../../components/Inputs/TextInput';
import Img3 from '../../../assets/img/car_pic.png';
import Confirm from '../../../components/Buttons/Confirm';
import Container from '../../../components/Containers';
import { APP, SIGNUP } from '../../../constants/routeNames';
import styles from '../../../components/shared/styles';
import checkUserExists from '../../../redux/actions/auth/checkUserExists';
import EventlyMessage from '../../../components/Message';

import SocialAuthView from '../../Auth/SocialAuth';

const GetStarted = ({
  navigation,
  theme: {
    colors: { darkBlue }
  }
}) => {
  const style = StyleSheet.create({
    wrapperOuter: {
      flex: 1,
      width: Dimensions.get('window').width,
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 0,
      backgroundColor: 'white'
    },
    image: {
      width: '100%',
      top: 0,
      position: 'absolute',
      height: '50%',
      marginBottom: 12
    },
    title: {
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
      marginBottom: 11
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      color: 'black'
    },
    textsWrapper: {
      paddingHorizontal: 21
    },

    mainContent: {
      position: 'relative',
      width: '100%',
      height: Dimensions.get('window').height / 2.5,
      paddingHorizontal: 24,
      marginTop: 380
    },

    going: {
      fontFamily: 'SFProText',
      fontStyle: 'normal',
      width: '60%',
      lineHeight: 28,
      fontSize: 24,
      color: darkBlue,
      fontWeight: 'bold',
      marginBottom: 11
    },
    inputs: {}
  });

  const slide = {
    title: 'Lets get started',
    text: 'Signup or sign in to create and manage events',
    image: Img3,
    key: 2
  };

  const dispatch = useDispatch();

  const { userEmail, loading, error } = useSelector(
    state => state.user.checkUserExists
  );
  useEffect(() => {
    if (userEmail) {
      navigation.navigate(SIGNUP, { userEmail });
    }
    return () => {};
  }, [userEmail, navigation]);
  const validate = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please enter your email address';
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
    checkUserExists(userData)(dispatch);
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validate,
    onSubmit: values => {
      handleSignUpSubmit(values);
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
    <Container style={style.wrapperOuter}>
      <ScrollView
        style={{ width: '100%', flex: 1 }}
        showsVerticalScrollIndicator={false}>
        <StatusBar hidden />
        <Image style={style.image} source={slide.image} resizeMode="cover" />
        <View style={style.mainContent}>
          <Title style={style.going}>Lets Get Started</Title>
          <Paragraph
            disabled={loading}
            onPress={() => {
              navigation.navigate(APP);
            }}
            style={{
              fontSize: 19,
              position: 'absolute',
              top: -330,
              right: 30
            }}>
            Skip for now
          </Paragraph>

          <TextInput
            mode="flat"
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
          {error && error.status !== 409 && (
            <EventlyMessage title="Error" message={error.error} />
          )}
          <Confirm
            style={{ marginTop: 30 }}
            text={loading ? 'Please wait...' : 'GET STARTED'}
            disabled={loading}
            loading={loading}
            labelStyle={style.confirmButton}
            contentStyle={{ height: 45 }}
            onPress={handleSubmit}
          />

          <SocialAuthView />
        </View>
      </ScrollView>
    </Container>
  );
};

export default withTheme(GetStarted);
