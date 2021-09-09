import React from "react";
import { Text, Image, Box, ScrollView, Button } from "native-base";
import { Hero } from "../../components/ui";

export default function ExploreScreen({ navigation }: any) {
  const handlePress = () => {
    navigation.navigate("SearchModal");
  };
  return (
    <ScrollView>
      <Hero handlePress={handlePress} />
    </ScrollView>
  );
}
