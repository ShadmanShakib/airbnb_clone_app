import React from "react";
import { View, Text, ScrollView, FlatList, Image, HStack } from "native-base";
import { Locations } from "../../constants";

interface ImageCardProps {
  url: string;
}
const ImageCard = ({ url }: ImageCardProps) => {
  return (
    <Image
      borderRadius={10}
      alt="hello"
      width="366px"
      height="366px"
      source={{
        uri: url,
      }}
    />
  );
};

type LocationCardProps = {
  title?: string;
  price?: string;
  distance?: string;
};

export default function LocationCard(props: LocationCardProps) {
  const { title, price, distance } = props;
  return (
    <View mb="6">
      <ImageCard url={Locations[0]} />

      <HStack mt="2" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="lg">${price}/night</Text>
      </HStack>
      <Text>{distance} kilometer's way</Text>
    </View>
  );
}
