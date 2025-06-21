import React from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {IProps} from './types';

const AnimatedListItemView = ({index = 0, children, style}: IProps) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(1000 * index).springify()}
      style={style}
      needsOffscreenAlphaCompositing={true}>
      {children}
    </Animated.View>
  );
};

export default AnimatedListItemView;
