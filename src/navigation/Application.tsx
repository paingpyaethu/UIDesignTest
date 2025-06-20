import type {RootStackParamList} from '@/navigation/types';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Paths} from '@/navigation/paths';
import {DetailScreen, HomeScreen} from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen component={HomeScreen} name={Paths.Home} />
          <Stack.Screen component={DetailScreen} name={Paths.Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
