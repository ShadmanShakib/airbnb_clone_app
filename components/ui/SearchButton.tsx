import React from "react";
import { Button, Flex, HStack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
export default function SearchButton() {
  return (
    <Flex pos="absolute" top="5" zIndex={2} w="100%" alignItems="center">
      <Button bg="white" w="80%" borderRadius={30}>
        <HStack justifyContent="center">
          <Feather name="search" color="#FF385C" size={20} />
          <Text>Where are you going?</Text>
        </HStack>
      </Button>
    </Flex>
  );
}
