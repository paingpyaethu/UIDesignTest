import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {isTablet} from 'react-native-device-info';
import {config} from '@/theme';
import {scaled} from '@/utils/helper';

interface TabBarIconProps {
  image: ImageSourcePropType;
}

const TabBarIcon = ({image}: TabBarIconProps) => {
  return (
    <View
      style={{
        marginRight: isTablet() ? config.spacing[6] : 0,
        justifyContent: 'center',
      }}>
      <Image source={image} style={{...scaled(24)}} resizeMode="contain" />
    </View>
  );
};

export default TabBarIcon;
