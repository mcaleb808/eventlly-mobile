import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Title, Subheading, Text, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import Confirm from '../Buttons/Confirm';
import airtel from '../../assets/img/airtel.png';
import visa from '../../assets/img/visa.png';
import mtn from '../../assets/img/mtn.png';
import masterCard from '../../assets/img/masterCard.png';
import shareStyles from '../shared/styles';
import styles from './checkoutStyles';
import { UPCOMING } from '../../constants/routeNames';

const CheckOut = ({ navigation }) => {
  const [inputValues, setInputs] = useState({ submitting: false });
  return (
    <ScrollView
      style={{ width: '100%', backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}>
      <View style={{ width: '100%', padding: 20 }}>
        <View style={styles.total}>
          <View style={styles.tickets}>
            <View>
              <Title style={styles.title}>Jesus Band Concert</Title>
              <Subheading style={styles.subTitle}>
                Tickets for the event
              </Subheading>
            </View>
            <Text style={styles.amount}>100 $</Text>
          </View>
          <View style={styles.totalContainer}>
            <Subheading style={[styles.subTitle, { fontWeight: 'bold' }]}>
              Total
            </Subheading>
            <Text
              style={[
                styles.amount,
                { fontSize: 16, lineHeight: 19, fontWeight: 'bold' }
              ]}>
              100 $
            </Text>
          </View>
        </View>
        <Text style={styles.promo}>Apply promo code</Text>
        <View style={styles.payments}>
          <Title
            style={[
              styles.title,
              { fontSize: 14, lineHeight: 17, fontWeight: '500' }
            ]}>
            Add Payment Method
          </Title>
          <View style={styles.methods}>
            {Array.from([masterCard, visa, mtn, airtel], (item, index) => (
              <TouchableOpacity
                key={Number(index)}
                activeOpacity={0.9}
                onPress={() => {}}>
                <Image
                  source={item}
                  resizeMethod="scale"
                  resizeMode="contain"
                  style={[{ width: 80 }]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {[
          { label: 'Card Name' },
          {
            label: 'Card Number'
          }
        ].map((input, index) => (
          <TextInput
            style={[
              shareStyles.input,
              { marginTop: index === 0 ? 25 : 0, fontSize: 12 }
            ]}
            key={Number(index)}
            onChangeText={value =>
              setInputs({ ...inputValues, [input.label]: value })
            }
            value={inputValues[input.label]}
            {...input}
          />
        ))}
        <View style={styles.form}>
          {[
            { label: 'Expiry Date (MM/YY)' },
            {
              label: 'CCV Number'
            }
          ].map((input, index) => (
            <TextInput
              style={[shareStyles.input, { width: '48%', fontSize: 12 }]}
              key={Number(index)}
              onChangeText={value =>
                setInputs({ ...inputValues, [input.label]: value })
              }
              value={inputValues[input.label]}
              {...input}
            />
          ))}
        </View>
        <Confirm
          style={{ marginTop: 20 }}
          text="PROCEED WITH PAYMENT"
          loading={inputValues.submitting}
          contentStyle={{ height: 45 }}
          onPress={() => navigation.navigate(UPCOMING)}
        />
      </View>
    </ScrollView>
  );
};

CheckOut.propTypes = {
  navigation: PropTypes.any.isRequired
};

export default CheckOut;
