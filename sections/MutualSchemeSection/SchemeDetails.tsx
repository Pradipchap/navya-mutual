import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@/components/Icons";
import { useTheme } from "@react-navigation/native";
import { IScheme } from "@/interfaces/dataInterfaces";
import { useGetSchemeDetails } from "@/hooks/queries/useGetSchemeDetails";
import { useLocalSearchParams } from "expo-router";

const SchemeDetails = () => {
  const { id } = useLocalSearchParams();
  const theme = useTheme();

  const { schemeDetails } = useGetSchemeDetails({ id: typeof id === "string" ? id : id[0] });
  return (
    <LinearGradient
      colors={[theme.colors.primary, theme.colors.notification]}
      style={styles.gradientContainer}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>{schemeDetails?.name}</Text>
        <View style={styles.detailRow}>
          <Icon name="attach-money" size={20} color="#fff" />
          <Text style={styles.detailText}>Price Per Unit: ${schemeDetails?.pricePerUnit.toFixed(2)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Icon name="trending-up" size={20} color="#fff" />
          <Text style={styles.detailText}>Minimum Investment: ${schemeDetails?.minimumInvestment}</Text>
        </View>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Invest Now</Text>
        </TouchableOpacity> */}
      </View>
    </LinearGradient>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  gradientContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center"
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15
  },
  detailText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6a11cb"
  }
});

export default SchemeDetails;
