import { ICustomButtonProps } from "@/interfaces/componentInterfaces";
import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ShowStatus } from "../ShowStatusIcon";

export const Button = ({ text, iconProps, status, style, ...rest }: ICustomButtonProps) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <Text style={styles.text}>{text}</Text>
      <ShowStatus status={status} color={{ idle: "white" }} icon={{ idle: "" }} />
    </TouchableOpacity>
  );
};

const getStyles = (theme: ReactNavigation.Theme) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: theme.colors.primary,
      borderRadius: 10,
      minHeight: 50,
      justifyContent: "center",
      alignItems: "center",
      gap: "5%"
    },
    text: {
      color: "white",
      fontSize: 17,
      fontWeight: "500"
    },
    icon: {}
  });
};
