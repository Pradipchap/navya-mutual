import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@/components/Icons";

export interface ISectionWrapperProps {
  children: ReactNode;
  title?: string;
  headerText?: string;
  headerIcon?: string;
  onActionPress?: () => void;
  style?: any; 
}

export const SectionWrapper = ({
  children,
  title,
  headerIcon,
  headerText,
  onActionPress,
  style,
  ...rest
}: ISectionWrapperProps) => {
  return (
    <View style={[styles.sectionWrapper, style]} {...rest}>
      <View style={styles.header}>
        {title && <Text style={styles.title}>{title}</Text>}
        {onActionPress && (
          <TouchableOpacity
            onPress={() => {
              onActionPress?.();
            }}
          >
            <View style={styles.actionContainer}>
              {headerText && <Text style={styles.headerText}>{headerText}</Text>}
              {headerIcon && <Icon color={styles.headerText.color} name={headerIcon || ""} size={30} />}
            </View>
          </TouchableOpacity>
        )}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    marginVertical: 16,
    gap: 5,
    marginHorizontal: 16
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    fontWeight: "600",
    fontSize: 19
  },
  actionContainer: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 20
  }
});
