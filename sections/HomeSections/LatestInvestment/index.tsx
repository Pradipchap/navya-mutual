import { InvestmentCard } from "@/components/Cards/InvestmentCard";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { IPurchaseDetails } from "@/interfaces/dataInterfaces";
import { useInvestmentStore } from "@/store/useInvestmentStore";
import React, { useEffect } from "react";
import { FlatList, ActivityIndicator, Text } from "react-native";

export const LatestInvestment = () => {
  const { investments, fetchInvestments, loading, loadMore } = useInvestmentStore();

  useEffect(() => {
    fetchInvestments();
  }, []);

  const onActionPress = () => {};

  const renderItem = ({ item }: { item: IPurchaseDetails }) => {
    return <InvestmentCard onPress={() => {}} {...item} />;
  };

  return (
    <SectionWrapper title="Latest Mutual Funds" headerIcon="NextPage" headerText="View All" onActionPress={onActionPress}>
      {loading && investments.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
      ) : investments.length === 0 ? (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>No investments available</Text>
      ) : (
        <FlatList
          data={investments}
          renderItem={renderItem}
          onEndReached={loadMore}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={loading ? <ActivityIndicator size="small" color="gray" style={{ marginLeft: 15 }} /> : null}
        />
      )}
    </SectionWrapper>
  );
};
