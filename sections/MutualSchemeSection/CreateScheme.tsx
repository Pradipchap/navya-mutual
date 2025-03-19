import { Button } from "@/components/Buttons";
import CustomInput from "@/components/Inputs/CustomInput";
import { STATUS } from "@/constants/misc";
import React from "react";
import { StyleSheet, View } from "react-native";

export const CreateScheme = () => {
  return (
    <View style={styles.container}>
      <CustomInput label="Mutual Fund Scheme Name" placeholder="Enter scheme name" style={styles.input} required />
      <CustomInput
        label="Initial Price Per Unit"
        placeholder="Enter price per unit"
        style={styles.input}
        required
        inputMode="numeric"
      />
      <CustomInput
        label="Minimum Investment Amoount"
        placeholder="Enter minimum investment amount"
        style={styles.input}
        required
        inputMode="numeric"
      />
      <Button text="Create" iconProps={{ name: "Check" }} status={STATUS.IDLE} />
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
