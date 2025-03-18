import React from "react";
import { View, StyleSheet, Text, TextInput, TextInputProps } from "react-native";

const CustomInput = ({ error, style, ...props }: TextInputProps & { error?: string }) => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.input, style, error ? styles.inputError : {}]} {...props} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    width: "100%"
  },
  input: {
    flex: 1,
    width: "100%"
  },
  inputError: {
    borderColor: "red"
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5
  }
});

export default CustomInput;
