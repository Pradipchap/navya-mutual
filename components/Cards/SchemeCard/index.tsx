import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import React, { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IScheme } from "@/interfaces/dataInterfaces";
import Icon from "@/components/Icons";
import { useRouter } from "expo-router";

export const SchemeCard = ({
  name,
  pricePerUnit,
  id,
  minimumInvestment,
  onPress
}: IScheme & { onPress: (id: number) => void }) => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const handleBuy = () => {
    onPress(id);
  };
  const router = useRouter();
  const handlePress = () => {
    router.navigate(`/(tabs)/schemes/${id}`);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.ppContainer}>
        <Text style={styles.ppUnit}>{pricePerUnit}</Text>
        <Text style={styles.ppLabel}>per</Text>
        <Text style={styles.ppLabel}>unit</Text>
      </View>
      <View style={styles.secondSection}>
        <View style={styles.nameContainer}>
          <Text numberOfLines={2} style={styles.name}>
            {name}
          </Text>
          <View style={styles.investmentContainer}>
            <Text>min investment</Text>
            <Text style={styles.minInvestment}>{minimumInvestment}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={handleBuy} style={styles.buyContainer}>
          <Text style={styles.buyText}>Buy</Text>
          <Icon name="Cart" color={"white"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
      minHeight: 95,
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
      backgroundColor: theme.colors.primary,
      borderBottomStartRadius: 10,
      borderTopStartRadius: 10,
      width: "20%"
    },
    secondSection: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 15,
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
    },
    buyText: {
      color: "white"
    }
  });
};
