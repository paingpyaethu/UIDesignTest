import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface IProps {
  index?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}
