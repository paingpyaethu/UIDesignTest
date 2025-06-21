import {BANNER_IMAGES} from '@/constants/dummy';
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
}

const SlideItem = (props: SlideItemProps) => {
  const {style, index = 0, rounded = false, ...animatedViewProps} = props;

  const source = useMemo(
    () => props.source || BANNER_IMAGES[index % BANNER_IMAGES.length],
    [index, props.source],
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
