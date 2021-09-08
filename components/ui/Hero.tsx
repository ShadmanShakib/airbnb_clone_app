import React from "react";
import { Box, Text, Image, Flex } from "native-base";

export default function Hero() {
  return (
    <Box position="relative">
      <Image
        zIndex={1}
        h={500}
        w="100%"
        alt="HeroImage"
        source={{
          uri: "https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720",
        }}
      />
      <Flex
        w="100%"
        h={500}
        justifyContent="center"
        alignItems="center"
        direction="column"
        zIndex={2}
        position="absolute"
      >
        <Text fontWeight="bold">Not sure where to go?</Text>
        <Text fontWeight="bold">Perfect.</Text>
      </Flex>
    </Box>
  );
}
