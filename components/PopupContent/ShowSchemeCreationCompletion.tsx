import { IScheme } from "@/interfaces/dataInterfaces";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ShowSchemeSuccess = ({ name, minimumInvestment, pricePerUnit }: IScheme) => {
  return (
    <View style={styles.container}>
      <Text>Mututal fund scheme created successfully!</Text>
      <Text>{name}</Text>
      <Text>{minimumInvestment}</Text>
      <Text>{pricePerUnit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 10
  },
  input: {}
});
