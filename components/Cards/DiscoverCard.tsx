import React from "react";
import { View, Text, Image } from "native-base";

interface IDiscoverCard {
  title: string;
  url: string;
  alt: string;
  discription: string;
}

function Card(props: IDiscoverCard) {
  const { title, url, alt, discription } = props;
  return (
    <View ml="6">
      <Image
        height="256px"
        width="256px"
        borderRadius={10}
        source={{ uri: url }}
        alt={alt}
      />
      <Text my="2" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="sm">{discription}</Text>
    </View>
  );
}
interface Item {
  item: IDiscoverCard;
}
export default function DiscoverCard({ item }: Item) {
  return (
    <Card
      title={item.title}
      discription={item.discription}
      url={item.url}
      alt={item.alt}
    />
  );
}
