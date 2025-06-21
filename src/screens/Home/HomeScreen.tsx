import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {colors, config} from '@/theme';
import {HomeScreenItemWrapper} from '@/components/organisms';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <HomeScreenItemWrapper />
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
