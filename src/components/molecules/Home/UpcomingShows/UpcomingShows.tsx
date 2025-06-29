import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import UpcomingShowItem from './UpcomingShowItem/UpcomingShowItem';
import {ThemedText} from '@/components/atoms';
import {upcomingShows} from '@/constants/dummy';
import {config} from '@/theme';

const UpcomingShows = () => {
  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof upcomingShows)[0];
    index: number;
  }) => <UpcomingShowItem item={item} index={index} />;

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <ThemedText size="fs_18">Upcoming Shows</ThemedText>
        <TouchableOpacity>
          <ThemedText color="primary">View all</ThemedText>
        </TouchableOpacity>
      </View>
      <FlatList
        data={upcomingShows}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: config.spacing[10],
          gap: config.spacing[10],
        }}
      />
    </View>
  );
};

export default UpcomingShows;

const styles = StyleSheet.create({
  container: {
    paddingTop: config.spacing[24],
    paddingHorizontal: config.spacing[16],
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: config.spacing[16],
  },
});
