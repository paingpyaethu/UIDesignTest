import React, {ReactNode} from 'react';
import {StatusBar, StyleProp, View, ViewStyle} from 'react-native';
import {isAndroid} from '@/utils/helper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '@/theme';

const SafeScreen = ({
  children,
  containerStyle,
}: {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  const {top} = useSafeAreaInsets();

  const $containerStyle: StyleProp<ViewStyle> = {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : top,
    backgroundColor: colors.white,
  };

  return <View style={[$containerStyle, containerStyle]}>{children}</View>;
};

export default SafeScreen;
