import { Button } from "@/components/Buttons";
import CustomInput from "@/components/Inputs/CustomInput";
import { useCreateInvestment } from "@/hooks/mutations/useCreateInvestment";
import { IScheme } from "@/interfaces/dataInterfaces";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IErrors {
  amount?: string;
  units?: string;
}
interface IFormData {
  amount: string;
  units: string;
}
export const CreateInvestment = ({ name, id, pricePerUnit, minimumInvestment }: IScheme) => {
  const { status, createInvestment } = useCreateInvestment();
  const [formData, setFormData] = useState<IFormData>({
    amount: "",
    units: ""
  });

  const [errors, setErrors] = useState<IErrors>({
    amount: undefined,
    units: undefined
  });

  const validate = () => {
    let valid = true;
    let newErrors: IErrors = { amount: undefined, units: undefined };

    if (!formData.amount.trim() || isNaN(Number(formData.amount))) {
      newErrors.amount = "Amount must be greater than 0";
      valid = false;
    }
    if (!formData.units.trim() || isNaN(Number(formData.units)) || Number(formData.units) < minimumInvestment) {
      newErrors.units = "Valid number of units is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      createInvestment({ amount: Number(formData.amount), units: Number(formData.units), name, schemeId: id });
    }
  };

  const handleUnitsChange = (numberText: string) => {
    if (!isNaN(numberText)) {
      if (Number(numberText) < minimumInvestment) {
        setErrors(err => ({ ...err, units: "Units bought should be greater that minimum investment" }));
      } else {
        setErrors(err => ({ ...err, units: undefined }));
      }
      setFormData({ ...formData, units: numberText, amount: (Number(numberText) * pricePerUnit).toString() });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.schemeDetails}>
        <Text style={styles.schemeTitle}>Scheme Details</Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailLabel}>Scheme Name: </Text>
          {name}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailLabel}>Price per Unit: </Text>
          {pricePerUnit}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.detailLabel}>Minimum Units to Buy: </Text>
          {minimumInvestment}
        </Text>
      </View>
      <CustomInput label="Mutual Fund Scheme Name" placeholder="Enter scheme name" value={name} editable={false} />
      <CustomInput
        label="How many units to buy?"
        placeholder="Enter number of units"
        value={formData.units}
        onChangeText={handleUnitsChange}
        inputMode="numeric"
        error={errors.units}
      />
      <CustomInput label="Total Amount" editable={false} value={formData.amount} inputMode="numeric" error={errors.amount} />
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
  schemeDetails: {
    backgroundColor: "#f8f9fa",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    width: "100%"
  },
  schemeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333"
  },
  detailText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4
  },
  detailLabel: {
    fontWeight: "bold",
    color: "#222"
  }
});
