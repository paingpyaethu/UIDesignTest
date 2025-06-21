import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {Categories, Tickets} from '@/components/molecules';
import {colors, config, Images} from '@/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {/* Banner */}
        <Image
          source={Images.BANNER}
          style={styles.banner}
          resizeMode="cover"
        />

        {/* Categories */}
        <Categories />

        {/* Tickets Section */}
        <Tickets />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

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
