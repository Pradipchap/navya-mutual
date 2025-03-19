import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { View, StyleSheet, Text, TextInput, TextInputProps } from "react-native";

const CustomInput = ({
  error,
  style,
  label,
  required,
  ...props
}: TextInputProps & { error?: string; label?: string; required?: boolean }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {required && <Text style={styles.requiredIndicator}>*</Text>}
        </View>
      )}
      <TextInput style={[styles.input, style, error ? styles.inputError : {}]} {...props} />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const getStyles = (theme: ReactNavigation.Theme) => {
  return StyleSheet.create({
    container: {
      marginBottom: 10,
      width: "100%"
    },
    input: {
      width: "100%",
      height: 50,
      borderColor: theme.colors.border,
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: "2%"
    },
    inputError: {
      borderColor: "red"
    },
    errorText: {
      color: "red",
      fontSize: 12,
      marginTop: 5
    },
    label: {
      fontWeight: "500"
    },
    labelContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: "2%",
      marginBottom: 10
    },
    requiredIndicator: {
      color: "red"
    }
  });
};

export default CustomInput;
