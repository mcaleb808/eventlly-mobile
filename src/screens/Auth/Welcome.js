import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Title, Paragraph, withTheme, Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from '../../components/shared/styles';
import logo from '../../assets/img/logo.png';

const Welcome = ({ theme, navigation }) => {
  const { params } = navigation.state;
  const { snackBar } = params;

  console.log(snackBar);

  const [visible, setVisible] = useState(snackBar.status);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
        marginHorizontal: '5%'
      }}>
      <Image source={logo} resizeMode="contain" />
      <Title
        style={[
          styles.titleIcon,
          {
            fontSize: 40,
            lineHeight: 40,
            color: theme.colors.primaryLight,
            marginTop: '20%'
          }
        ]}>
        Welcome
      </Title>
      <Paragraph
        style={[
          styles.textIcon,
          {
            textAlign: 'center',
            marginTop: '5%',
            fontWeight: '500',
            fontSize: 20,
            lineHeight: 20,
            color: theme.colors.primaryDark
          }
        ]}>
        Please check your email to confirm your registration.
      </Paragraph>
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        style={{
          backgroundColor: 'green',
          color: theme.colors.white,
          paddingLeft: '10%'
        }}>
        {snackBar.message}
      </Snackbar>
    </View>
  );
};

Welcome.propTypes = {
  theme: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired
};

export default withTheme(Welcome);
