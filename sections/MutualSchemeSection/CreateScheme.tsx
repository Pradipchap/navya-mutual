import { Button } from "@/components/Buttons";
import CustomInput from "@/components/Inputs/CustomInput";
import { useCreateScheme } from "@/hooks/mutations/useCreateScheme";
import { IScheme } from "@/interfaces/dataInterfaces";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

interface IErrors {
  name?: string;
  pricePerUnit?: string;
  minimumInvestment?: string;
}
export const CreateScheme = () => {
  const { status, createScheme } = useCreateScheme();
  const [formData, setFormData] = useState<Omit<IScheme, "id">>({
    name: "",
    pricePerUnit: "",
    minimumInvestment: ""
  });

  const [errors, setErrors] = useState<IErrors>({
    name: undefined,
    pricePerUnit: undefined,
    minimumInvestment: undefined
  });

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", pricePerUnit: "", minimumInvestment: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Scheme name is required";
      valid = false;
    }
    if (!formData.pricePerUnit.trim() || isNaN(Number(formData.pricePerUnit))) {
      newErrors.pricePerUnit = "Valid price per unit is required";
      valid = false;
    }
    if (!formData.minimumInvestment.trim() || isNaN(Number(formData.minimumInvestment))) {
      newErrors.minimumInvestment = "Valid minimum investment amount is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      createScheme(formData);
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        label="Mutual Fund Scheme Name"
        placeholder="Enter scheme name"
        style={styles.input}
        value={formData.name}
        onChangeText={text => setFormData({ ...formData, name: text })}
        error={errors.name}
      />
      <CustomInput
        label="Initial Price Per Unit"
        placeholder="Enter price per unit"
        style={styles.input}
        value={formData.pricePerUnit}
        onChangeText={text => setFormData({ ...formData, pricePerUnit: text })}
        inputMode="numeric"
        error={errors.pricePerUnit}
      />
      <CustomInput
        label="Minimum Investment Amount"
        placeholder="Enter minimum investment amount"
        style={styles.input}
        value={formData.minimumInvestment}
        onChangeText={text => setFormData({ ...formData, minimumInvestment: text })}
        inputMode="numeric"
        error={errors.minimumInvestment}
      />
      <Button text="Create" iconProps={{ name: "Check" }} status={status} onPress={handleSubmit} />
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
