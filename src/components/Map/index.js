import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import Confirm from '../Buttons/Confirm';
import { EVENT_TICKETS } from '../../constants/routeNames';

const Map = ({ event, navigation }) => {
  console.log(event.flyer);
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -1.9477655,
          longitude: 30.105424663315624,
          latitudeDelta: 0.0043,
          longitudeDelta: 0.0034
        }}
        style={styles.mapStyle}>
        <MapView.Marker
          coordinate={{
            latitude: -1.9477655,
            longitude: 30.105424663315624
          }}
          title="Christian Life Assembly"
        />
      </MapView>
      <Confirm
        style={{ position: 'absolute', width: '100%', top: 13 }}
        text="Tickets"
        onPress={() =>
          navigation.navigate(EVENT_TICKETS, { event: { ...event } })
        }
      />
    </View>
  );
};

export default Map;

Map.propTypes = {
  event: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F0F8FF',
    height: 200,
    marginBottom: 20
  },
  mapStyle: {
    width: '100%',
    height: '100%'
  }
});
