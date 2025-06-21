import {ColorSchemeName} from 'react-native';

export const colors = {
  primary: '#A04747',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#808080',
  lightGray: '#f5f5f5',
  darkGray: '#505050',
};

export type Palette = (typeof colors)[keyof typeof colors];

export type Theme = ColorSchemeName | keyof typeof colors;
