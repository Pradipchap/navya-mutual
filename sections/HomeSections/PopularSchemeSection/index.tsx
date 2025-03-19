import { SchemeCard } from "@/components/Cards/SchemeCard";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { useOpenCreateInvestment } from "@/hooks/componentHooks/useOpenCreateInvestment";
import { IScheme } from "@/interfaces/dataInterfaces";
import { useSchemeStore } from "@/store/useSchemeStore";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, FlatList, View, ActivityIndicator, Text } from "react-native";

const { width } = Dimensions.get("window");

export const PopularSchemeSection = () => {
  const { schemes, fetchSchemes, loading, loadMore } = useSchemeStore();
  const { openCreateInvestmentModal } = useOpenCreateInvestment();
  const router = useRouter();
  useEffect(() => {
    fetchSchemes();
  }, []);

  const onActionPress = () => {
    router.navigate("/(tabs)/schemes");
  };

  const renderItem = ({ item }: { item: IScheme }) => {
    return (
      <View style={{ paddingHorizontal: 10, width: 0.9 * width }}>
        <SchemeCard
          onPress={() => {
            openCreateInvestmentModal(item);
          }}
          {...item}
        />
      </View>
    );
  };

  return (
    <SectionWrapper title="Latest Mutual Funds" headerIcon="NextPage" headerText="View All" onActionPress={onActionPress}>
      {loading && schemes?.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
      ) : schemes?.length === 0 ? (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>No mutual funds available</Text>
      ) : (
        <FlatList
          horizontal
          pagingEnabled
          data={schemes}
          onEndReached={loadMore}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          // contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={loading ? <ActivityIndicator size="small" color="gray" style={{ marginLeft: 15 }} /> : null}
        />
      )}
    </SectionWrapper>
  );
};
