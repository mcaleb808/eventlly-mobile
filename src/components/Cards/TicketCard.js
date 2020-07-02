import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ticketStyles';
import Confirm from '../Buttons/Confirm';
import { CHECKOUT } from '../../constants/routeNames';

const TicketCard = ({ event, navigation }) => {
  const [count, setCount] = useState({
    regular: 0,
    vip: 0,
    vvip: 0,
    table: 0
  });

  const [total, setTotal] = useState(0);

  const onIncrements = (type, action, price) => {
    if (action === 'increment') {
      setCount({ ...count, [type]: count[type] + 1 });
      return setTotal(total + price);
    }
    if (count[type] > 0) {
      setCount({ ...count, [type]: count[type] - 1 });
      return setTotal(total - price);
    }
    return count;
  };

  return (
    <View>
      {Object.keys(event.prices).map((key, index) => (
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          key={Number(index)}>
          <View
            style={[
              styles.main,
              { backgroundColor: count[key] > 0 ? '#E74C3C' : '#E74C3C40' }
            ]}>
            <Text
              style={{
                color: 'white',
                marginVertical: '10%',
                marginLeft: '10%',
                fontSize: 12
              }}>
              {`${key} ${event.prices[key]} ${event.currency}`}
            </Text>
            <Text
              style={{
                color: 'white',
                marginVertical: '10%',
                fontSize: 12
              }}>
              {count[key]}
            </Text>
            <View style={styles.leftCircle} />
            <View style={styles.dashedMain}>
              <View
                style={[
                  styles.dashed,
                  { backgroundColor: count[key] > 0 ? '#E74C3C' : '#E74C3C40' }
                ]}
              />
            </View>
            <Text
              style={{
                position: 'absolute',
                top: 3,
                right: '8%',
                color: 'white',
                fontSize: 6,
                lineHeight: 7
              }}>
              Number
            </Text>
            <View style={styles.rightCircle} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              marginVertical: 15
            }}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => onIncrements(key, 'minus', event.prices[key])}>
              <Text style={styles.iconText}>-</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                lineHeight: 25,
                color: '#2256B0',
                marginLeft: 15
              }}>
              {count[key]}
            </Text>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => onIncrements(key, 'increment', event.prices[key])}>
              <Text style={styles.iconText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.main}>
          <Text
            style={{
              color: 'white',
              marginVertical: '10%',
              marginLeft: '10%',
              fontSize: 12,
              fontWeight: 'bold'
            }}>
            {`Total    ${total} ${event.currency}`}
          </Text>
          <View style={styles.leftCircle} />
          <View style={styles.dashedMain}>
            <View style={styles.dashed} />
          </View>
          <View style={styles.rightCircle} />
        </View>
        <Confirm
          text="Check Out"
          onPress={() => navigation.navigate(CHECKOUT)}
          style={{ height: '50%' }}
        />
      </View>
    </View>
  );
};

TicketCard.propTypes = {
  event: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired
};

export default TicketCard;
