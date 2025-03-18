import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView, useColorScheme, Platform, StatusBar } from "react-native";

export const ScreenWrapper = ({ children, scrollEnabled = true }: { children: ReactNode; scrollEnabled?: boolean }) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const statusBarStyle = isDarkMode ? "light-content" : "dark-content";

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={false} barStyle={statusBarStyle} />
      {scrollEnabled ? (
        <ScrollView style={[styles.container]} contentContainerStyle={{ flexGrow: 1, gap: 20 }}>
          {children}
          <View style={styles.marginProvider} />
        </ScrollView>
      ) : (
        <View style={[styles.container]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marginProvider: {
    paddingBottom: Platform.OS === "android" ? 120 : 120
  }
});
