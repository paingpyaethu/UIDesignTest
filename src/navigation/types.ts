import type {StackScreenProps} from '@react-navigation/stack';
import {Paths} from './paths';

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type RootStackParamList = {
  [Paths.Home]: undefined;
  [Paths.Detail]: undefined;
};
