import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { DataTable, Text, withTheme } from 'react-native-paper';
import { StackedBarChart } from 'react-native-chart-kit';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './styles';
import { genColor } from '../../../assets/themes';

const justify = (list, index) => {
  if (index === 0) return 'flex-start';
  if (index + 1 === list.length) return 'flex-end';
  return 'center';
};

const SoldTickets = ({ theme, event, navigation, next }) => {
  const { attendees = [] } = event;
  const { colors, dimensions } = theme;

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sar', 'Sun'],
    legend: ['VIP', 'VVIP', 'REG'],
    data: [[40, 55, 40], [50, 90, 40], [60, 88, 40], [10, 100, 30], [20, 90, 10], [30, 90, 20], [40, 90, 80]],
    barColors: [colors.chartPurple, colors.chartGreen, colors.chartYellow]
  };

  const pageItems = 4;
  const [tableConfig, setTableConfig] = useState({
    page: 0,
    pageCount: Math.ceil(attendees.length / pageItems),
    headerTitles: ['Full name', 'Tickets count', 'Date booked']
  });
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 10
      }}
      showsVerticalScrollIndicator={false}>
      <StackedBarChart
        data={data}
        width={dimensions(95).width}
        height={dimensions(40).height}
        chartConfig={{
          backgroundColor: colors.accent,
          backgroundGradientFrom: colors.accent,
          backgroundGradientTo: colors.accent,
          decimalPlaces: 1,
          color: (opacity = 0.5) => genColor(opacity).text
        }}
        barPercentage={90}
        bezier
        segments={4}
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      />
      <Text style={[styles.tableTitle, { color: colors.primary }]}>
        List of sold tickets
      </Text>
      <DataTable style={{ backgroundColor: 'white' }}>
        <DataTable.Header>
          {tableConfig.headerTitles.map((head, i) => (
            <DataTable.Title
              key={Number(i)}
              style={{
                justifyContent: justify(tableConfig.headerTitles, i)
              }}
              numeric={Boolean(i)}>
              {head}
            </DataTable.Title>
          ))}
        </DataTable.Header>
        {attendees
          .slice(
            pageItems * tableConfig.page,
            pageItems * (tableConfig.page + 1)
          )
          .map((attendee, i) => {
            const timestamps = attendee.tickets.map(t => moment(t.bookedAt));
            return (
              <DataTable.Row
                onPress={() => navigation.navigate(next, { booking: attendee })}
                key={Number(i)}
                style={{
                  backgroundColor:
                    i % 2 === 0 ? colors.disabled : colors.accent,
                  borderColor: colors.disabled,
                  borderWidth: 0.2
                }}>
                <DataTable.Cell>{attendee.fullName}</DataTable.Cell>
                <DataTable.Cell numeric style={{ justifyContent: 'center' }}>
                  {attendee.tickets.length}
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  {moment(moment.min(timestamps))
                    .startOf('W')
                    .fromNow()}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
        <DataTable.Pagination
          page={tableConfig.page}
          numberOfPages={tableConfig.pageCount}
          onPageChange={page =>
            setTableConfig({
              ...tableConfig,
              page
            })
          }
          label={`Total count: ${attendees.length}\t\tPage: ${tableConfig.page +
            1} of ${tableConfig.pageCount}`}
          style={{ marginVertical: 15 }}
        />
      </DataTable>
    </ScrollView>
  );
};

SoldTickets.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any).isRequired,
  event: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  next: PropTypes.string.isRequired
};

export default withTheme(SoldTickets);
