/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import { withTheme } from 'react-native-paper';
import Confirm from '../Buttons/Confirm';

const Category = ({ theme: { colors } }) => (
  <SafeAreaView
    style={{
      width: '100%',
      marginBottom: '3%',
      paddingHorizontal: '3%',
      paddingVertical: 4,
      backgroundColor: colors.accent
    }}>
    <View style={{ flexDirection: 'row' }}>
      <Confirm
        style={{ marginRight: '5%' }}
        text="Categories"
        labelStyle={[
          {
            color: colors.primary,
            backgroundColor: colors.white,
            fontSize: 12,
            height: 14
          }
        ]}
        uppercase={false}
        mode="outlined"
        contentStyle={{ height: 25 }}
      />
      <Confirm
        style={{}}
        text="Following"
        labelStyle={[
          {
            color: '#2256B050',
            backgroundColor: colors.white,
            fontSize: 12,
            height: 14
          }
        ]}
        uppercase={false}
        mode="outlined"
        contentStyle={{ height: 25 }}
      />
    </View>
    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array.from(
          ['All', 'Concert', 'Conference', 'Meet-Up', 'check this out'],
          (key, index) => (
            <Confirm
              key={Number(index)}
              style={{
                height: 35,
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: index === 0 ? colors.redPrimary : '#FCA18D',
                marginHorizontal: 3,
                borderColor: 'white',
                borderWidth: 2
              }}
              text={key}
              labelStyle={[
                {
                  color: colors.accent,
                  fontSize: 12,
                  height: 14,
                  fontWeight: '600'
                }
              ]}
              uppercase={false}
              contentStyle={{ height: 25 }}
            />
          )
        )}
      </ScrollView>
    </View>
  </SafeAreaView>
);

export default withTheme(Category);

const styles = StyleSheet.create({});
