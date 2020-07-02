import React from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { withTheme, Paragraph } from 'react-native-paper';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';

const Settings = () => {
  const styles = StyleSheet.create({
    main: {
      width: '100%',
      backgroundColor: 'white',
      flex: 1,
      padding: 20,
      marginBottom: 30
    },
    text: {
      fontSize: 14,
      lineHeight: 17,
      fontWeight: '500',
      color: '#1D394D',
      marginVertical: 10
    },
    form: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  });

  return (
    <Container>
      {Platform.OS === 'ios' && <StatusBarComponent />}
      <ScrollView style={styles.main}>
        <View style={styles.form}>
          <Paragraph style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </Paragraph>
          <Paragraph style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </Paragraph>
          <Paragraph style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate
          </Paragraph>
        </View>
      </ScrollView>
    </Container>
  );
};

export default withTheme(Settings);
