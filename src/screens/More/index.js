import React from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { withTheme, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';
import Icon from '../../components/Icons';
import SmallButtons from '../../components/Buttons/SmallButtons';
import {
  EDIT_PROFILE,
  HOME,
  CHAT,
  SETTINGS,
  SIGNUP,
  FOLLOWING
} from '../../constants/routeNames';

const More = ({ navigation }) => {
  const styles = StyleSheet.create({
    Title: {
      marginLeft: 20,
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      color: '#1D394D'
    }
  });

  return (
    <Container>
      {Platform.OS === 'ios' && <StatusBarComponent />}
      <View style={{ flex: 1, width: '100%', padding: 20 }}>
        {Array.from(
          [
            { title: 'John Gabriel', icon: 'user', type: 'simple-line-icon' },
            {
              title: 'Following',
              icon: 'account-group-outline',
              type: 'material-community',
              route: FOLLOWING
            },
            {
              title: 'Tickets',
              icon: 'ticket',
              type: 'font-awesome',
              route: HOME
            },
            { title: 'Chat', icon: 'chat', type: 'entypo', route: CHAT },
            {
              title: 'Settings',
              icon: 'settings',
              type: 'feather',
              route: SETTINGS
            },
            {
              title: 'Log Out',
              icon: 'logout',
              type: 'simple-line-icon',
              route: SIGNUP
            }
          ],
          (item, index) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginVertical: 15
              }}
              key={Number(index)}>
              {index === 0 ? (
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    type={item.type}
                    size={19}
                    color="#1D394D"
                    name={item.icon}
                  />
                  <Title style={styles.Title}>{item.title}</Title>
                </View>
              ) : (
                <TouchableOpacity
                  style={{ flexDirection: 'row' }}
                  onPress={() => navigation.navigate(item.route)}>
                  <Icon
                    type={item.type}
                    size={19}
                    color="#1D394D"
                    name={item.icon}
                  />
                  <Title style={styles.Title}>{item.title}</Title>
                </TouchableOpacity>
              )}
              {index === 0 && (
                <SmallButtons
                  onPress={() => navigation.navigate(EDIT_PROFILE)}
                  text="Edit Profile"
                />
              )}
            </View>
          )
        )}
      </View>
    </Container>
  );
};

More.propTypes = {
  navigation: PropTypes.any.isRequired
};
export default withTheme(More);
