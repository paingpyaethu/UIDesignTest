import type {RootStackParamList} from '@/navigation/types';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import BottomTabs from './BottomTabs/BottomTabs';
import {View} from 'react-native';
import {colors} from '@/theme';
import {DetailScreen} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={'BottomTab'} component={BottomTabs} />
            <Stack.Screen name={'Detail'} component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
};

export default ApplicationNavigator;
