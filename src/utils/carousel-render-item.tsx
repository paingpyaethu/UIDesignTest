import {SlideItem} from '@/components/molecules';
import {ImageStyle, StyleProp} from 'react-native';
import {CarouselRenderItem} from 'react-native-reanimated-carousel';

interface Options {
  rounded?: boolean;
  detailBanner?: boolean;
  style?: StyleProp<ImageStyle>;
}

export const carouselRenderItem =
  ({
    rounded = false,
    detailBanner = false,
    style,
  }: Options = {}): CarouselRenderItem<any> =>
  ({index}: {index: number}) =>
    (
      <SlideItem
        key={index}
        index={index}
        rounded={rounded}
        detailBanner={detailBanner}
        style={style}
      />
    );
