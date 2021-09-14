import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "native-base";
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
};

export default function LocationCard(props: LocationCardProps) {
  return (
    <View h="366px" w="366px">
      <ScrollView horizontal={true}>
        <ImageCard url={Locations[0]} />
      </ScrollView>
    </View>
  );
}
