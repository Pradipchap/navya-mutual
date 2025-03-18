import { Stack } from "expo-router";
import { Fragment } from "react";
import { StyleSheet, Text } from "react-native";

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Text>Route not Found</Text>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  }
});
