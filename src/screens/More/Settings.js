import React, { useState } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { withTheme, Title, Switch } from 'react-native-paper';
import PropTypes from 'prop-types';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';
import {
  CHANGE_PASSWORD,
  DEACTIVATE_ACCOUNT
} from '../../constants/routeNames';

const Settings = ({ theme, navigation }) => {
  const { colors } = theme;
  const [switchOn, setSwitchOn] = useState(false);

  const styles = StyleSheet.create({
    main: {
      width: '100%',
      backgroundColor: 'white',
      flex: 1,
      padding: 20,
      marginBottom: 30
    },
    title: {
      marginLeft: 20,
      fontSize: 14,
      lineHeight: 17,
      fontWeight: '500',
      color: colors.primary
    },
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      height: 60,
      width: 60,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: 'rgba(66, 110, 187, 0.8)'
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 0.4,
      borderBottomColor: 'rgba(29, 57, 77, 0.4)',
      paddingVertical: 5,
      marginVertical: 10
    }
  });

  return (
    <Container>
      {Platform.OS === 'ios' && <StatusBarComponent />}
      <View style={styles.main}>
        <View style={styles.form}>
          <Title style={styles.title}>Notifications</Title>
          <Switch
            value={switchOn}
            onValueChange={() => setSwitchOn(!switchOn)}
            color={colors.primary}
          />
        </View>
        {Array.from(
          [
            { name: 'Change Password', route: CHANGE_PASSWORD },
            { name: 'About Us', route: 'HOME' },
            { name: 'Rate Us', route: 'HOME' },
            { name: 'Deactivate Account', route: DEACTIVATE_ACCOUNT },
            { name: 'Eventlly Version 1.0.0.1', route: 'HOME' }
          ],
          (item, index) => (
            <TouchableOpacity
              style={styles.form}
              key={Number(index)}
              onPress={() => navigation.navigate(item.route)}>
              <Title style={styles.title}>{item.name}</Title>
            </TouchableOpacity>
          )
        )}
      </View>
    </Container>
  );
};

Settings.propTypes = {
  theme: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired
};
export default withTheme(Settings);
