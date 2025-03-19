import { InvestmentCard } from "@/components/Cards/InvestmentCard";
import { SchemeCard } from "@/components/Cards/SchemeCard";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { IPurchaseDetails, IScheme } from "@/interfaces/dataInterfaces";
import { useInvestmentStore } from "@/store/useInvestmentStore";
import { useSchemeStore } from "@/store/useSchemeStore";
import React, { useEffect } from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";

export const InvestmentList = () => {
  const { investments, fetchInvestments, loading, loadMore } = useInvestmentStore();

  useEffect(() => {
    fetchInvestments();
  }, []);

  const renderItem = ({ item }: { item: IPurchaseDetails }) => {
    return (
      <View style={{ height: 120 }}>
        <InvestmentCard onPress={() => {}} {...item} />
      </View>
    );
  };

  return (
    <SectionWrapper style={{ flex: 1 }} title="Investment History">
      {loading && investments?.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
      ) : investments?.length === 0 ? (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>No mutual funds available</Text>
      ) : (
        <FlatList
          pagingEnabled
          data={investments}
          onEndReached={loadMore}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingVertical: 10, gap: 10 }}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={loading ? <ActivityIndicator size="small" color="gray" style={{ marginLeft: 15 }} /> : null}
        />
      )}
    </SectionWrapper>
  );
};
