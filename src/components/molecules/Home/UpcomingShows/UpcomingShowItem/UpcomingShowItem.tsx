import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {ThemedCard, ThemedText} from '@/components/atoms';
import {upcomingShows} from '@/constants/dummy';
import {colors, config, Images} from '@/theme';
import {scaled} from '@/utils/helper';

const UpcomingShowItem = ({item}: {item: (typeof upcomingShows)[0]}) => {
  return (
    <ThemedCard cardContainerStyle={styles.cardContainerStyle}>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.contentContainer}>
          <View style={styles.timeRow}>
            <Image
              source={Images.SHOWTIME}
              style={{...scaled(20)}}
              resizeMode="contain"
            />
            <ThemedText>{item.time}</ThemedText>
          </View>
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <ThemedText color="white" opacity={0.8}>
              {item.title}
            </ThemedText>
          </View>
        </View>
      </ImageBackground>
    </ThemedCard>
  );
};

export default UpcomingShowItem;

const styles = StyleSheet.create({
  cardContainerStyle: {
    width: scaled(250).width,
    marginBottom: config.spacing[20],
  },
  timeRow: {
    width: '31%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: config.spacing[4],
  },
  image: {
    width: '100%',
    height: config.spacing[140],
    borderRadius: config.spacing[10],
    overflow: 'hidden',
  },
  contentContainer: {
    flex: 1,
    padding: config.spacing[8],
  },
});
