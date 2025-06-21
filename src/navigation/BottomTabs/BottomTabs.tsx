import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '@/screens';
import {StyleSheet} from 'react-native';
import {
  colors,
  config,
  FONT_FAMILY,
  Images,
  scaledSize,
  scaleHeight,
} from '@/theme';
import {isIOS} from '@/utils/helper';
import {BottomTabParamList} from '../types';
import TabBarIcon from './TabBarIcon/TabBarIcon';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const renderTabBarIcon = (image: any) => () => <TabBarIcon image={image} />;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          ...styles.tabBarStyle,
          backgroundColor: colors.white,
          ...config.shadows.light,
        },
        tabBarItemStyle: {
          ...styles.tabBarItemStyle,
          backgroundColor: colors.white,
        },
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: renderTabBarIcon(Images.HOME),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          tabBarIcon: renderTabBarIcon(Images.WALLET),
        }}
      />
      <Tab.Screen
        name="More"
        component={HomeScreen}
        options={{
          tabBarIcon: renderTabBarIcon(Images.MORE),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: isIOS ? scaleHeight(80) : scaleHeight(80),
    paddingBottom: isIOS ? scaledSize(20) : 0,
  },
  tabBarItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabelStyle: {
    ...config.fonts.fs_12,
    fontFamily: FONT_FAMILY.Poppins_regular,
  },
});
