import React from "react";
import { View, Text, Image, Flex, Button } from "native-base";

export default function TryHosting() {
  return (
    <View my="10" mx="6">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        w="100%"
        p="32px"
        zIndex={2}
        position="absolute"
      >
        <Text
          mb="3"
          fontWeight="bold"
          textAlign="center"
          fontSize="2xl"
          color="white"
        >
          Try hosting
        </Text>
        <Text mb="3" color="white" textAlign="center">
          Earn extra income and unlock new opportunities by sharing your space.
        </Text>
        <Button _pressed={{ opacity: 0.7, bg: "white" }} bg="white">
          Learn more
        </Button>
      </Flex>

      <Image
        borderRadius={10}
        alt="hosting"
        height="460px"
        w="100%"
        source={{
          uri: "https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=720",
        }}
      />
      <Text></Text>
    </View>
  );
}
