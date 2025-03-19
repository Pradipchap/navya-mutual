import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import Icon from "@/components/Icons";
import { useModalHandler } from "@/hooks/componentHooks/useModal";
import { CreateScheme } from "./CreateScheme";

export const CreateSchemeButton = () => {
  const theme = useTheme();
  const styles = useMemo(() => getStyles(theme), [theme]);
  const { handleOpen } = useModalHandler();

  const onPlusSchemeClick = () => {
    handleOpen(<CreateScheme />);
  };

  return (
    <SectionWrapper>
      <View style={styles.container}>
        <Text style={styles.text}>Create a new Mutual Fund Scheme</Text>
        <TouchableOpacity onPress={onPlusSchemeClick} style={styles.button}>
          <Icon name="Plus" color={"white"} size={30} />
        </TouchableOpacity>
      </View>
    </SectionWrapper>
  );
};

const getStyles = (theme: ReactNavigation.Theme) => {
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingHorizontal: 10,
      minHeight: 40,
      alignItems: "center",
      justifyContent: "space-between",
      gap: "5%"
    },
    button: {
      backgroundColor: theme.colors.primary,
      color: "white",
      fontWeight: "500",
      padding: 10,
      borderRadius: 10
    },
    text: {
      fontSize: 18,
      fontWeight: "500"
    }
  });
};
