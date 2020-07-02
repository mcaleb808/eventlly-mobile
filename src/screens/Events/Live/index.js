/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { View } from 'react-native';
import { withTheme, FAB, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { events } from '../../../constants/dummyData';
import styles from '../../../components/shared/styles';
import { NEW_EVENT, LIVE_DETAILS } from '../../../constants/routeNames';
import EventsList from '../../../components/Lists/FlatList';
import { textShorthand } from '../../../helpers';
import EventlySnackbar from '../../../components/Messages/SnackBar';

const LiveEvents = ({ theme, navigation }) => {
  const { colors } = theme;
  const loginData = useSelector(state => state.user.login);
  const { data } = loginData;
  const [snackBarVisible, setSnackbarVisible] = useState(false);
  React.useEffect(() => {
    if (data && data.status === 200) {
      setSnackbarVisible(true);
    }
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {snackBarVisible && (
        <EventlySnackbar
          visible={snackBarVisible}
          message={`Welcome ${data.user.email}`}
        />
      )}
      <FAB
        style={[styles.fab, { backgroundColor: colors.primary }]}
        color={colors.accent}
        icon="plus"
        onPress={() => navigation.navigate(NEW_EVENT)}
      />
    </View>
  );
};

LiveEvents.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired
};
export default withTheme(LiveEvents);
