import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text } from "react-native";
import { IPurchaseDetails } from "@/interfaces/dataInterfaces";

export const InvestmentCard = ({ name, amount, id, units, onPress }: IPurchaseDetails & { onPress: () => void }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <View style={styles.ppContainer}>
        <Text style={styles.ppUnit}>{units}</Text>
        <Text style={styles.ppLabel}>units</Text>
      </View>
      <View style={styles.secondSection}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.investmentContainer}>
            <Text>Toatal Amount</Text>
            <Text style={styles.minInvestment}>{amount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const getStyles = (theme: ReactNavigation.Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: theme.colors.card,
      borderRadius: 10,
      borderColor: theme.colors.border,
      borderWidth: 1,
      elevation: 0.1,
      minHeight: 90,
      alignItems: "center",
      gap: "5%"
    },
    nameContainer: {
      flex: 1,
      height: "100%",
      justifyContent: "space-evenly"
    },
    ppContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      backgroundColor: "green",
      borderBottomStartRadius: 10,
      borderTopStartRadius: 10,
      width: "20%"
    },
    secondSection: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    name: {
      fontSize: 16,
      gap: "5%",
      fontWeight: "600"
    },
    minInvestment: {
      paddingHorizontal: "5%",
      paddingVertical: "2%",
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
      color: "white"
    },
    ppUnit: {
      fontSize: 20,
      fontWeight: "600",
      color: "white"
    },
    ppLabel: {
      fontWeight: "600",
      color: "white"
    },
    investmentContainer: {
      flexDirection: "row",
      gap: "5%",
      alignItems: "center"
    },
    buyContainer: {
      backgroundColor: "green",
      flexDirection: "row",
      color: "white",
      paddingHorizontal: 6,
      paddingVertical: 8,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.colors.border,
      elevation: 0.1
    }
  });
};
