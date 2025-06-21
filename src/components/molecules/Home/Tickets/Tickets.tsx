import React from 'react';
import {View, StyleSheet} from 'react-native';
import {config, Images} from '@/theme';
import TicketCard from './TicketCard/TicketCard';
import AnimatedListItemView from '@/components/atoms/common/AnimatedView/AnimatedListItemView/AnimatedListItemView';

const Tickets = () => {
  return (
    <AnimatedListItemView>
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
    </AnimatedListItemView>
  );
};

export default Tickets;

const styles = StyleSheet.create({
  ticketsRowContainer: {
    flexDirection: 'row',
    paddingHorizontal: config.spacing[16],
    gap: config.spacing[16],
  },
});
