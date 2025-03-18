import React, { ReactNode } from "react";
import { View, Dimensions, Platform, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

export const HeaderWrapper = ({ isLayoutHeader = true, children }: { children: ReactNode; isLayoutHeader: boolean }) => {
  return <View style={[styles.container, { marginTop: isLayoutHeader ? (isIOS ? height * 0.05 : 0) : 0 }]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingVertical: 5
  }
});
