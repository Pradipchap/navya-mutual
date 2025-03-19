import React from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
import { SchemeCard } from "@/components/Cards/SchemeCard";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { IScheme } from "@/interfaces/dataInterfaces";

interface ISchemeListProps {
  schemes: IScheme[];
  loading: boolean;
  loadMore: () => void;
}

export const SchemeListUI = ({ schemes, loading, loadMore }: ISchemeListProps) => {
  const renderItem = ({ item }: { item: IScheme }) => (
    <View style={{ height: 120 }}>
      <SchemeCard onPress={() => {}} {...item} />
    </View>
  );

  return (
    <SectionWrapper style={{ flex: 1 }} title="Latest Mutual Funds">
      {loading && schemes.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
      ) : schemes.length === 0 ? (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>No mutual funds available</Text>
      ) : (
        <FlatList
          pagingEnabled
          data={schemes}
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
