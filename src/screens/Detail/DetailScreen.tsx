import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AnimatedListItemView, ThemedText} from '@/components/atoms';
import {ImageCarousel} from '@/components/molecules';
import AnimatedParagraphs from '@/components/molecules/Detail/AnimatedParagraphs/AnimatedParagraphs';
import {DETAIL_BANNER_IMAGES} from '@/constants/dummy';
import {colors, config, Images} from '@/theme';
import {isAndroid, scaled} from '@/utils/helper';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const DetailSceen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageCarousel
            data={DETAIL_BANNER_IMAGES}
            detailBanner
            mode="horizontal-stack"
            containerStyle={{
              left: config.spacing[14],
              bottom: config.spacing[16],
            }}
          />

          <Pressable
            style={[
              styles.closeButton,
              {marginTop: isAndroid ? StatusBar.currentHeight : top},
            ]}
            onPress={() => navigation.goBack()}>
            <Image
              source={Images.CROSS}
              style={{...scaled(24)}}
              resizeMode="contain"
            />
          </Pressable>
        </View>

        <View style={styles.content}>
          <AnimatedListItemView>
            <ThemedText color="gray">ZONE 1</ThemedText>
            <ThemedText size="fs_24" weight="Poppins_semibold">
              Alligator Gar
            </ThemedText>

            <View style={styles.locationRow}>
              <Image
                source={Images.MAPPIN}
                style={{...scaled(16)}}
                resizeMode="contain"
              />
              <ThemedText color="gray">410m away</ThemedText>
              <ThemedText marginLeft={config.spacing[2]} color="primary">
                Map
              </ThemedText>
            </View>
          </AnimatedListItemView>

          <AnimatedParagraphs />
        </View>
      </View>
    </>
  );
};

export default DetailSceen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
    height: config.spacing[240],
  },
  image: {
    width,
    height: config.spacing[240],
    resizeMode: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: config.spacing[20],
    left: config.spacing[20],
    backgroundColor: colors.white,
    borderRadius: config.spacing[20],
    padding: config.spacing[6],
    ...config.shadows.normal,
  },
  content: {
    padding: config.spacing[16],
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: config.spacing[12],
    borderWidth: config.spacing[1],
    borderColor: colors.lightGray,
    borderRadius: config.spacing[6],
    marginTop: config.spacing[8],
    padding: config.spacing[4],
    width: '35%',
    justifyContent: 'center',
  },
});
