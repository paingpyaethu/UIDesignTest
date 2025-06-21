import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {
  Categories,
  ImageCarousel,
  Tickets,
  UpcomingShows,
} from '@/components/molecules';
import {colors, config} from '@/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {/* Banner */}
        <ImageCarousel />

        {/* Categories */}
        <Categories />

        {/* Tickets Section */}
        <Tickets />

        {/* Upcoming Shows Section */}
        <UpcomingShows />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  contentContainerStyle: {
    paddingVertical: config.spacing[16],
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
