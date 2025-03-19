
import { IPurchaseDetails } from "@/interfaces/dataInterfaces";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const ShowInvestmentSuccess = ({ schemeId, name, amount, units }: IPurchaseDetails) => {
  return (
    <View style={styles.container}>
      <Text>Mututal fund Investment done successfully!</Text>
      <Text>{name}</Text>
      <Text>{units}</Text>
      <Text>{amount}</Text>
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

