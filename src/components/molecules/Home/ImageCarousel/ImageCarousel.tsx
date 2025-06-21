import React from 'react';
import {Dimensions, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import {carouselRenderItem} from '@/utils/carousel-render-item';
import {colors, config} from '@/theme';
import {scaled} from '@/utils/helper';
import {AnimatedListItemView} from '@/components/atoms';

const {width} = Dimensions.get('window');

type ImageCarouselProps<T = any> = {
  data: T[];
  detailBanner?: boolean;
  mode?: 'parallax' | 'horizontal-stack' | 'vertical-stack' | undefined;
  containerStyle?: StyleProp<ViewStyle>;
};
const ImageCarousel = ({
  data,
  detailBanner,
  mode,
  containerStyle,
}: ImageCarouselProps) => {
  const progress = useSharedValue<number>(0);
  const baseOptions = {
    vertical: false,
    width: width,
    height: width * 0.6,
  } as const;

  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <AnimatedListItemView>
      <Carousel
        ref={ref}
        {...baseOptions}
        loop
        onProgressChange={progress}
        autoPlay
        autoPlayInterval={3000}
        style={{width: width}}
        mode={mode || 'parallax'}
        data={data}
        renderItem={carouselRenderItem({rounded: true, detailBanner})}
      />
      <Pagination.Basic
        progress={progress}
        data={data.map(color => ({color}))}
        dotStyle={styles.dotStyle}
        activeDotStyle={{
          overflow: 'hidden',
          backgroundColor: colors.primary,
        }}
        containerStyle={[styles.containerStyle, containerStyle]}
        horizontal
      />
    </AnimatedListItemView>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  containerStyle: {
    gap: config.spacing[10],
    position: 'absolute',
    bottom: config.spacing[40],
  },
  dotStyle: {
    width: scaled(30).width,
    height: scaled(4).height,
    borderRadius: config.spacing[10],
    backgroundColor: colors.white,
  },
});
