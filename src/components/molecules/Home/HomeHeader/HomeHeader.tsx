import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ThemedText} from '@/components/atoms';
import {Images, scaleHeight, scaleWidth} from '@/theme';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <ThemedText />
      <Image source={Images.LOGO} style={styles.logo} resizeMode="contain" />
      <Image
        source={Images.NOTI}
        style={styles.notiLogo}
        resizeMode="contain"
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleWidth(16),
  },
  logo: {
    width: scaleWidth(200),
    height: scaleHeight(80),
  },
  notiLogo: {
    width: scaleWidth(24),
    height: scaleHeight(24),
  },
});
