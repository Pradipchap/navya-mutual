import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { useGetInvestments } from "@/hooks/queries/useGetInvestments";
import { useTheme } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const colors = [
  "#FF5733", // Vivid Coral
  "#33FF57", // Bright Lime
  "#3357FF", // Deep Azure
  "#F1C40F", // Golden Yellow
  "#8E44AD", // Amethyst Purple
  "#2ECC71", // Emerald Green
  "#E74C3C", // Alizarin Crimson
  "#3498DB", // Dodger Blue
  "#F39C12", // Saffron Orange
  "#9B59B6" // Wisteria Purple
];

//isPage props is used to redirect to a new page to show full index in a page
export const InvestmentChart = ({ isPage }: { isPage?: boolean }) => {
  const { investments } = useGetInvestments({ query: {} });
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const router = useRouter();
  const onShowMoreClick = () => {
    router.navigate("/investmentDistribution");
  };

  if (investments.length === 0) {
    return null;
  }
  const transformedData = investments.map((investment, index) => ({
    color: colors[index],
    value: investment.amount,
    text: investment.name
  }));
  return (
    <SectionWrapper title="Investment Distribution" style={styles.container}>
      <PieChart
        data={transformedData}
        donut
        showGradient
        sectionAutoFocus
        showTooltip
        focusOnPress
        showValuesAsTooltipText
        toggleFocusOnPress
      />
      <View style={styles.legendContainer}>
        {investments.slice(0, 4).map((investment, index) => (
          <View key={investment.id} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: colors[index % colors.length] }]} />
            <Text>
              {investment.name}: NPR {investment.amount}
            </Text>
          </View>
        ))}
      </View>
      {!isPage && investments.length > 3 && (
        <TouchableOpacity onPress={onShowMoreClick} style={styles.showMoreButton}>
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      )}
    </SectionWrapper>
  );
};

const getStyles = (theme: ReactNavigation.Theme) => {
  return StyleSheet.create({
    container: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    showMoreButton: {
      alignSelf: "center",
      marginHorizontal: "auto",
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10
    },
    showMoreText: {
      color: "white"
    },
    title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    legendContainer: { marginTop: 20 },
    legendItem: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
    colorBox: { width: 15, height: 15, marginRight: 10, borderRadius: 3 }
  });
};
