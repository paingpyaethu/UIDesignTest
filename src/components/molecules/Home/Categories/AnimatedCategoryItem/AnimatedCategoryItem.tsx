import {ThemedText} from '@/components/atoms';
import {CategoryType} from '@/constants/dummy';
import {colors, config} from '@/theme';
import {scaled} from '@/utils/helper';
import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

type AnimatedCategoryItemProps = {
  item: CategoryType;
  index: number;
};
const AnimatedCategoryItem = ({item, index}: AnimatedCategoryItemProps) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withDelay(
      index * 100,
      withTiming(1, {duration: 1500, easing: Easing.out(Easing.ease)}),
    );
  }, [index, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.categoryItem, animatedStyle]}>
      <View style={styles.categoryImageContainer}>
        <Image
          source={item.image}
          style={{...scaled(24)}}
          resizeMode="contain"
        />
      </View>
      <ThemedText>{item.label}</ThemedText>
    </Animated.View>
  );
};

export default AnimatedCategoryItem;

const styles = StyleSheet.create({
  categoryItem: {
    width: '24%',
    alignItems: 'center',
    marginBottom: config.spacing[10],
  },
  categoryImageContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 999,
    padding: config.spacing[10],
    marginBottom: config.spacing[3],
  },
});
