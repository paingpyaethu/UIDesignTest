/* eslint-disable react-hooks/exhaustive-deps */
import {colors, config, FONT_FAMILY} from '@/theme';
import React, {useEffect} from 'react';
import {Text, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedParagraphs = () => {
  const opacity1 = useSharedValue(0);
  const translateY1 = useSharedValue(10);
  const opacity2 = useSharedValue(0);
  const translateY2 = useSharedValue(10);

  useEffect(() => {
    opacity1.value = withTiming(1, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });
    translateY1.value = withTiming(0, {
      duration: 600,
      easing: Easing.out(Easing.ease),
    });

    setTimeout(() => {
      opacity2.value = withTiming(1, {
        duration: 600,
        easing: Easing.out(Easing.ease),
      });
      translateY2.value = withTiming(0, {
        duration: 600,
        easing: Easing.out(Easing.ease),
      });
    }, 500);
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => ({
    opacity: opacity1.value,
    transform: [{translateY: translateY1.value}],
  }));

  const animatedStyle2 = useAnimatedStyle(() => ({
    opacity: opacity2.value,
    transform: [{translateY: translateY2.value}],
  }));

  return (
    <>
      <AnimatedText style={[styles.paragraph, animatedStyle1]}>
        With its wide, alligator-like snout and razor-sharp teeth, it’s easy to
        see how this fish acquired its name. Despite its ferocious appearance,
        the alligator gar poses little threat to human beings. They prefer to
        lie and wait for unsuspecting prey within reach, before lunging forward
        to grab their prey.
      </AnimatedText>

      <AnimatedText style={[styles.paragraph, animatedStyle2]}>
        As the largest species in the gar family, the alligator gar can reach up
        to 3 metres in length. Scientists have traced this species in fossil
        records dating back to 100 million years ago, hence they are also known
        as living fossils!
      </AnimatedText>
    </>
  );
};

export default AnimatedParagraphs;

const styles = StyleSheet.create({
  paragraph: {
    fontFamily: FONT_FAMILY.Poppins_regular,
    color: colors.black,
    marginBottom: config.spacing[20],
    ...config.fonts.fs_14,
  },
});
