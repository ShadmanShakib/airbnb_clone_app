import React from "react";
import { Box, Text, Image, Flex, Button } from "native-base";
import SearchButton from "./SearchButton";
interface IHero {
  handlePress: () => void;
  handleFelxible: () => void;
}
export default function Hero(props: IHero) {
  return (
    <Box position="relative">
      <Image
        zIndex={1}
        h={550}
        w="100%"
        alt="HeroImage"
        source={{
          uri: "https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720",
        }}
      />

      <SearchButton handlePress={() => props.handlePress()} />
      <Flex
        w="100%"
        h={550}
        justifyContent="center"
        alignItems="center"
        direction="column"
        zIndex={2}
        position="absolute"
      >
        <Text fontSize="lg" fontWeight="bold">
          Not sure where to go?
        </Text>
        <Text fontSize="lg" mb="4" fontWeight="bold">
          Perfect.
        </Text>
        <Button
          _pressed={{ opacity: 0.6, bg: "white" }}
          shadow={5}
          _text={{ color: "#6F019C", fontSize: "lg" }}
          bg="white"
          px="8"
          rounded={20}
          onPress={props.handleFelxible}
        >
          I'm flexible
        </Button>
      </Flex>
    </Box>
  );
}
