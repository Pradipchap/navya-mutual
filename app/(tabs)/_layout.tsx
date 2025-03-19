import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Icon from "@/components/Icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute"
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen options={{ headerShown: false }} redirect name="index" />

      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => <Icon size={28} name="Home" />
        }}
      />

      <Tabs.Screen
        name="schemes"
        options={{
          title: "Scheme",
          tabBarIcon: () => <Icon size={28} name="Money" />
        }}
      />

      <Tabs.Screen
        name="investments"
        options={{
          title: "Investments",
          tabBarIcon: () => <Icon size={28} name="Investment" />
        }}
      />
    </Tabs>
  );
}
