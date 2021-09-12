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
    <View>
      <Image
        height="272px"
        width="272px"
        borderRadius={10}
        source={{ uri: url }}
        alt={alt}
      />
      <Text my="2" fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text w="56">{discription}</Text>
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
