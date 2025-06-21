import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, config, Images} from '@/theme';
import TicketCard from './TicketCard/TicketCard';

const Tickets = () => {
  return (
    <View style={styles.ticketsRowContainer}>
      <TicketCard
        title="My e-tickets"
        image={Images.TICKET}
        date="There aren't any yet."
        linkText="Retrieve here"
        hasOpacity
      />
      <TicketCard
        title="Park hours"
        image={Images.CLOCK}
        date={'Today, 13 Feb 10am - 5pm'}
        linkText="Plan my visit"
      />
    </View>
  );
};

export default Tickets;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  contentContainerStyle: {
    padding: config.spacing[16],
  },
  banner: {
    width: '100%',
    height: config.spacing[200],
    borderRadius: config.spacing[10],
  },
  ticketsRowContainer: {
    flexDirection: 'row',
    gap: config.spacing[16],
  },
});
