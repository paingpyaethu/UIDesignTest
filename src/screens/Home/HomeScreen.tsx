import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors, config} from '@/theme';
import {HomeScreenItemWrapper} from '@/components/organisms';
import {SafeScreen} from '@/components/template';

const HomeScreen = () => {
  return (
    <SafeScreen>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <HomeScreenItemWrapper />
      </ScrollView>
    </SafeScreen>
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
