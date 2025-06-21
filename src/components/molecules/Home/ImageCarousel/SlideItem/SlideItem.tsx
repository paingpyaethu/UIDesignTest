import {BANNER_IMAGES, DETAIL_BANNER_IMAGES} from '@/constants/dummy';
import {config} from '@/theme';
import React, {memo, useMemo} from 'react';
import {
  ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
  StyleSheet,
  type ViewProps,
} from 'react-native';
import type {AnimatedProps} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

interface SlideItemProps extends AnimatedProps<ViewProps> {
  style?: StyleProp<ImageStyle>;
  index?: number;
  rounded?: boolean;
  source?: ImageSourcePropType;
  detailBanner?: boolean;
}

const SlideItem = (props: SlideItemProps) => {
  const {
    style,
    index = 0,
    rounded = false,
    detailBanner = false,
    ...animatedViewProps
  } = props;

  const source = useMemo(
    () =>
      props.source || detailBanner
        ? DETAIL_BANNER_IMAGES[index % DETAIL_BANNER_IMAGES.length]
        : BANNER_IMAGES[index % BANNER_IMAGES.length],
    [index, props.source, detailBanner],
  );

  return (
    <Animated.View style={{flex: 1}} {...animatedViewProps}>
      <Animated.Image
        style={[
          style,
          styles.container,
          rounded && {borderRadius: config.spacing[16]},
        ]}
        source={source}
        resizeMode="cover"
      />
    </Animated.View>
  );
};

export default memo(SlideItem);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
