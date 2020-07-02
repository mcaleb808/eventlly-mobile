import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { withTheme, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import Container from '../../components/Containers';
import StatusBarComponent from '../../components/shared/StatusBar';
import themes from '../../assets/themes';
import SmallButtons from '../../components/Buttons/SmallButtons';

const Following = ({ navigation }) => {
  const { colors } = themes;
  const styles = StyleSheet.create({
    Title: {
      fontSize: 14,
      lineHeight: 17,
      color: '#1D394D'
    }
  });

  return (
    <Container>
      {Platform.OS === 'ios' && <StatusBarComponent />}
      <View style={{ flex: 1, width: '100%', padding: 20 }}>
        <Title
          style={{
            color: colors.primary,
            fontWeight: 'bold'
          }}>
          Following 4
        </Title>
        {Array.from(
          [
            { title: 'Football Events' },
            {
              title: 'Church Boys'
            },
            {
              title: 'Always Party'
            },
            { title: 'Home Girlz' }
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
              <View style={{ flexDirection: 'row' }}>
                <Title style={styles.Title}>{item.title}</Title>
              </View>

              <SmallButtons
                onPress={() => navigation.navigate('route')}
                text="Following"
              />
            </View>
          )
        )}
      </View>
    </Container>
  );
};

Following.propTypes = {
  navigation: PropTypes.any.isRequired
};
export default withTheme(Following);
