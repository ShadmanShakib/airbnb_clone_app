import React from "react";
import { Box, Text, Image, HStack } from "native-base";

interface INearbyCard {
  url: string;
  alt: string;
  city: string;
  distance: string;
}

export function Card(props: INearbyCard) {
  const { url, alt, city, distance } = props;
  return (
    <HStack w="64" mb="4" alignItems="center">
      <Image
        mr="3"
        h="20"
        w="20"
        borderRadius={10}
        alt={alt}
        source={{ uri: url }}
      />
      <Box>
        <Text mb="1" fontWeight="bold">
          {city}
        </Text>
        <Text>{distance}</Text>
      </Box>
    </HStack>
  );
}

export default function NearbyCard({ item }: { item: INearbyCard }) {
  return (
    <Card
      city={item.city}
      distance={item.distance}
      url={item.url}
      alt={item.alt}
    />
  );
}
