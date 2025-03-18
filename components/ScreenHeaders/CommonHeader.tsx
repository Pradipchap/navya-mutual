import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "@/components/Icons";
import { useRouter } from "expo-router";
import { HeaderWrapper } from "./HeaderWrapper";

export const CommonHeader = (props: any) => {
  const router = useRouter();
  const { headerTitle, headerImage, headerIcon, canGoBack, children, isLayoutHeader } = props;

  const onPress = () => {
    //
  };

  const goBack = () => {
    router.back();
  };

  return (
    <HeaderWrapper isLayoutHeader={isLayoutHeader}>
      <View style={styles.container}>
        {canGoBack && (
          <TouchableOpacity onPress={goBack}>
            <Icon name="PrevPage" size={35} />
          </TouchableOpacity>
        )}
        {headerImage && (
          <View style={styles.avatarContainer}>
            <Image source={{ uri: headerImage }} style={styles.avatar} />
          </View>
        )}
        {headerIcon && (
          <View style={[styles.avatarContainer, styles.iconAvatar]}>
            <Icon name={headerIcon} size={30} />
          </View>
        )}
        <Text onPress={onPress} style={styles.headerTitle}>
          {headerTitle}
        </Text>
        <View style={styles.rightContainer}>{children}</View>
      </View>
    </HeaderWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    gap: 10
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 20
  },
  iconAvatar: {
    backgroundColor: "#ff5722"
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    justifyContent: "flex-end"
  }
});
