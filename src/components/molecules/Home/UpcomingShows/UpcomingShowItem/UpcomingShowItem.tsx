import React, {useEffect} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {ThemedCard, ThemedText} from '@/components/atoms';
import {upcomingShows} from '@/constants/dummy';
import {colors, config, Images} from '@/theme';
import {scaled} from '@/utils/helper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
} from 'react-native-reanimated';

const UpcomingShowItem = ({
  item,
  index,
}: {
  item: (typeof upcomingShows)[0];
  index: number;
}) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withDelay(
      index * 100,
      withTiming(1, {
        duration: 1300,
        easing: Easing.bounce,
      }),
    );
  }, [index, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <Animated.View style={[styles.animatedCard, animatedStyle]}>
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
    </Animated.View>
  );
};

export default UpcomingShowItem;

const styles = StyleSheet.create({
  animatedCard: {
    width: scaled(250).width,
    marginBottom: config.spacing[20],
  },
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
