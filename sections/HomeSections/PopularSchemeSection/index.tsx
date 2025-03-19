import { SchemeCard } from "@/components/Cards/SchemeCard";
import { SectionWrapper } from "@/components/Wrappers/SectionWrapper";
import { IScheme } from "@/interfaces/dataInterfaces";
import { useSchemeStore } from "@/store/useSchemeStore";
import React, { useEffect } from "react";
import { Dimensions, FlatList, View, ActivityIndicator, Text } from "react-native";

const { width } = Dimensions.get("window");

export const PopularSchemeSection = () => {
  const { schemes, fetchSchemes, loading ,loadMore} = useSchemeStore();

  useEffect(() => {
    fetchSchemes();
  }, []);

  const onActionPress = () => {};

  const renderItem = ({ item }: { item: IScheme }) => {
    return (
      <View style={{ height: 120, width: 0.95 * width }}>
        <SchemeCard onPress={() => {}} {...item} />
      </View>
    );
  };

  return (
    <SectionWrapper title="Latest Mutual Funds" headerIcon="NextPage" headerText="View All" onActionPress={onActionPress}>
      {loading && schemes.length === 0 ? (
        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
      ) : schemes.length === 0 ? (
        <Text style={{ textAlign: "center", marginVertical: 20 }}>No mutual funds available</Text>
      ) : (
        <FlatList
          horizontal
          pagingEnabled
          data={schemes}
					onEndReached={loadMore}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10, gap: 5 }}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={loading ? <ActivityIndicator size="small" color="gray" style={{ marginLeft: 15 }} /> : null}
        />
      )}
    </SectionWrapper>
  );
};
