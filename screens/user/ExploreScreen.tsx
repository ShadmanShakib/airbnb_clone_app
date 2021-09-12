import React from "react";
import { Text, ScrollView, Box, FlatList } from "native-base";
import { Hero } from "../../components/ui";
import { PlaceCard, DiscoverCard } from "../../components/Cards";
import { PlacesData, DiscoverData } from "../../constants";
interface Item {
  title: string;
  alt: string;
  url: string;
}
const renderItem = ({ item }: { item: Item }) => (
  <PlaceCard title={item.title} url={item.url} alt={item.alt} />
);

export default function ExploreScreen({ navigation }: any) {
  const handlePress = () => {
    navigation.navigate("SearchModal");
  };

  return (
    <ScrollView bg="white">
      <Hero handlePress={handlePress} />
      <Box mt="6">
        <Text ml="6" mb="4" fontWeight="bold" fontSize="2xl">
          Live anywhere
        </Text>
        <FlatList
          pb="3"
          pl="6"
          ItemSeparatorComponent={() => <Box width="5" />}
          horizontal={true}
          data={PlacesData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Box>
      <Box mt="6">
        <Text ml="6" mb="4" fontSize="2xl" fontWeight="bold">
          Discover things to do
        </Text>
        <FlatList
          pl="6"
          pb="3"
          ItemSeparatorComponent={() => <Box width="5" />}
          horizontal={true}
          data={DiscoverData}
          renderItem={DiscoverCard}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </ScrollView>
  );
}
