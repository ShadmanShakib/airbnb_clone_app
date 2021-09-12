import React from "react";
import { Box, Text, Image } from "native-base";

interface IPlaceCard {
  url: string;
  alt: string;
  title: string;
}

export default function PlaceCard(props: IPlaceCard) {
  const { url, alt, title } = props;
  return (
    <Box>
      <Image
        borderRadius={10}
        height="272px"
        width="272px"
        alt={alt}
        source={{ uri: url }}
      />
      <Text mt="2" fontSize="lg" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
}
