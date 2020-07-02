import React, { useState } from 'react';
import { View, StatusBar, TextInput as Input, ScrollView } from 'react-native';
import { withTheme, Subheading, Text, RadioButton } from 'react-native-paper';
import PropTypes from 'prop-types';
import TextInput from '../../../components/Inputs/TextInput';
import styles, { mediumText } from '../../../components/shared/styles';
import Confirm from '../../../components/Buttons/Confirm';

const inputProps = {
  textContentType: 'name',
  autoCapitalize: 'words',
  autoCompleteType: 'name',
  mode: 'outlined',
  autoCorrect: true
};
const style = {
  input: {
    width: 160,
    paddingHorizontal: 10,
    ...mediumText,
    textAlign: 'left',
    borderRadius: 5,
    borderWidth: 1
  }
};

const ContinueEdit = ({ theme }) => {
  const [inputValues, setInputs] = useState({
    version: 'free',
    submitting: false
  });
  const { colors } = theme;
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}>
      <View style={{ width: '100%', padding: 20 }}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        {Array.from(
          ['Give your event title', 'Music Concert'],
          (label, key) => (
            <View key={Number(key)}>
              <Subheading style={{ fontWeight: '600' }}>{label}</Subheading>
              <TextInput
                style={styles.input}
                onChangeText={value => setInputs({ ...inputValues, title: value })}
                value={inputValues.title}
                label={label}
                {...inputProps}
              />
            </View>
          )
        )}
        <TextInput
          style={[styles.input, { height: 160 }]}
          multiline
          scrollEnabled={false}
          numberOfLines={4}
          textAlignVertical="top"
          onChangeText={value => setInputs({ ...inputValues, title: value })}
          value={inputValues.title}
          label="Short description about your event"
          {...inputProps}
        />
        <View
          style={{
            alignSelf: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
          }}>
          {Array.from(
            ['Number of Days', 'Event Time', 'Start Date', 'Finish Date'],
            (label, index) => (
              <View key={Number(index)}>
                <Subheading style={{ fontWeight: '600' }}>{label}</Subheading>
                <TextInput
                  key={Number(index)}
                  style={[styles.input, { width: 160 }]}
                  onChangeText={value =>
                    setInputs({ ...inputValues, title: value })
                  }
                  value={inputValues.title}
                  {...inputProps}
                  label={label}
                />
              </View>
            )
          )}
        </View>
        <Subheading style={{ fontWeight: '600' }}>Event Location</Subheading>
        <TextInput
          style={styles.input}
          onChangeText={value => setInputs({ ...inputValues, title: value })}
          value={inputValues.title}
          label="Event Location"
          {...inputProps}
        />
        <RadioButton.Group
          onValueChange={value => setInputs({ version: value })}
          value={inputValues.version}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            {Array.from(['free', 'paid'], (version, index) => (
              <View
                key={Number(index)}
                style={{
                  marginRight: index === 0 ? 35 : 0,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                <Text
                  style={[
                    styles.tabTitle,
                    {
                      color: colors.primary,
                      textTransform: 'capitalize',
                      marginRight: 5
                    }
                  ]}>
                  {`${version} Event`}
                </Text>
                <RadioButton.Android
                  color={colors.primary}
                  value={version}
                  status={
                    inputValues.version === 'free' ? 'checked' : 'unchecked'
                  }
                />
              </View>
            ))}
          </View>
        </RadioButton.Group>
        {inputValues.version === 'paid' ? (
          <View>
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                marginTop: 31
              }}>
              <Text style={[styles.tabTitle, { color: colors.primary }]}>
                Ticket Category
              </Text>
              <Text style={[styles.tabTitle, { color: colors.primary }]}>
                Price $
              </Text>
            </View>
            {Array.from(['Regular', 'VIP', 'VVIP', 'Table'], (type, index) => (
              <View
                key={Number(index)}
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginTop: index === 0 ? 10 : 31
                }}>
                <Confirm
                  text={type}
                  labelStyle={[styles.confirmButton]}
                  uppercase={false}
                  mode="outlined"
                  disabled
                  contentStyle={{ height: 50, minWidth: 120 }}
                />
                <Input
                  style={[
                    styles.input,
                    style.input,
                    { color: colors.disabled, borderColor: colors.disabled }
                  ]}
                  onChangeText={value =>
                    setInputs({ ...inputValues, title: value })
                  }
                  value={inputValues.title}
                  {...inputProps}
                />
              </View>
            ))}
            <Confirm
              style={{ marginTop: 15, maxWidth: 120 }}
              text="ADD MORE"
              labelStyle={[styles.confirmButton, { color: colors.text }]}
              uppercase={false}
              mode="text"
              contentStyle={{ height: 45 }}
              onPress={() => { }}
            />
          </View>
        ) : null}
        <Confirm
          style={{ marginVertical: 21 }}
          text="Upload Event Poster"
          labelStyle={[styles.confirmButton, { color: colors.text }]}
          uppercase={false}
          mode="outlined"
          contentStyle={{ height: 45 }}
          onPress={() => { }}
        />
        <View
          style={{
            alignSelf: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            marginVertical: 21,
            justifyContent: 'space-between'
          }}>
          {Array.from(['Save', 'Post'], (btn, key) => (
            <Confirm
              key={key}
              text={`${btn} Event`}
              labelStyle={[styles.confirmButton]}
              uppercase={false}
              mode={key === 0 ? 'outlined' : 'contained'}
              contentStyle={{ height: 45 }}
              onPress={() => { }}
              loading={inputValues.submitting}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

ContinueEdit.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withTheme(ContinueEdit);
