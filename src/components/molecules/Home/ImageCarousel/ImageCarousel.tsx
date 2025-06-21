import React from 'react';
import {View, Dimensions} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import {BANNER_IMAGES} from '@/constants/dummy';
import {carouselRenderItem} from '@/utils/carousel-render-item';
import {colors, config} from '@/theme';
import {scaled} from '@/utils/helper';
import {AnimatedListItemView} from '@/components/atoms';

const {width} = Dimensions.get('window');

const ImageCarousel = () => {
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
        mode="parallax"
        data={BANNER_IMAGES}
        renderItem={carouselRenderItem({rounded: true})}
      />
      <Pagination.Basic
        progress={progress}
        data={BANNER_IMAGES.map(color => ({color}))}
        dotStyle={{
          width: scaled(30).width,
          height: scaled(4).height,
          backgroundColor: colors.white,
          borderRadius: config.spacing[10],
        }}
        activeDotStyle={{
          overflow: 'hidden',
          backgroundColor: colors.primary,
        }}
        containerStyle={{
          gap: config.spacing[10],
          position: 'absolute',
          bottom: config.spacing[40],
        }}
        horizontal
      />
    </AnimatedListItemView>
  );
};

export default ImageCarousel;
