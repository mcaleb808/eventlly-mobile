import React from 'react'
import { View, Dimensions } from 'react-native'
import PropTypes from 'prop-types';
import { Title, Card, Paragraph, Button, withTheme } from 'react-native-paper';

const Details = ({ booking, theme }) => {
  const { fullName, tickets } = booking;
  const { colors: { white, primary } } = theme;
  const ticketItems = [
    { countType: '1 Regular', amount: '20000ugx' },
    { countType: '3 VIP', amount: '90000ugx' },
    { countType: '1VVIP', amount: '20000ugx' }]

  const styles = {
    cardTitle: {
      color: primary,
    },
    wrapper: {
      paddingHorizontal: 10,
      marginVertical: 10,
      height: Dimensions.get('screen').height,
      backgroundColor: 'white'
    }
  }


  const TicketItem = () => <View>
    {ticketItems && ticketItems.map((ticketItem) =>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 100 }}>
        <Title>
          {ticketItem.countType}
        </Title>
        <Title>
          {ticketItem.amount}
        </Title>

      </View>
    )
    }
  </View>
  return (
    <View style={styles.wrapper}>

      <Card>
        <Card.Content>
          <Title style={styles.cardTitle}>{fullName}     {tickets.length} Tickets</Title>
          <TicketItem ticketItems />
          <Paragraph style={{ color: primary, marginTop: 5 }}>Paid using Credit Card on Feb 2rd 2020</Paragraph>
        </Card.Content>
      </Card>

      <Button style={{ width: 200, alignSelf: 'flex-end', backgroundColor: white, borderColor: primary, borderWidth: 1, marginTop: 20 }} mode="outlined" onPress={() => console.log('Pressed')}>
        Check Ticket
  </Button>
    </View>
  )
}

Details.propTypes = {
  booking: PropTypes.objectOf(PropTypes.any).isRequired,
  theme: PropTypes.objectOf(PropTypes.object).isRequired
}
export default withTheme(Details);
