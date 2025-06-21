import type {StackScreenProps} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  Detail: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Wallet: undefined;
  More: undefined;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
