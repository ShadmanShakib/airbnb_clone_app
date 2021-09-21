import React from "react";
import { Text, ScrollView, Box, FlatList } from "native-base";
import { Hero } from "../../components/ui";
import { PlaceCard, DiscoverCard, NearbyCard } from "../../components/Cards";
import { PlacesData, DiscoverData, NearbyData } from "../../constants";
import TryHosting from "../../components/Cards/TryHosting";
import { StyleSheet } from "react-native";
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
      <Hero
        handleFelxible={() => navigation.navigate("Flexible")}
        handlePress={handlePress}
      />
      <Text mt="6" ml="6" fontSize="xl" fontWeight="bold">
        Explore Nearby
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pl="6"
        horizontal={true}
        my="5"
      >
        <FlatList
          numColumns={3}
          pb="3"
          data={NearbyData}
          renderItem={NearbyCard}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <Box mt="6">
        <Text ml="6" mb="4" fontWeight="bold" fontSize="2xl">
          Live anywhere
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          pb="3"
          pl="6"
          ItemSeparatorComponent={() => <Box width="5" />}
          horizontal={true}
          data={PlacesData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Box>
      <TryHosting />
      <Box mt="6">
        <Text ml="6" mb="4" fontSize="2xl" fontWeight="bold">
          Discover things to do
        </Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          pb="3"
          horizontal={true}
          data={DiscoverData}
          renderItem={DiscoverCard}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "transparent",
  },
});
