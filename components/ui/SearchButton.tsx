import React from "react";
import { Button, Flex, HStack, Text } from "native-base";
import { Feather } from "@expo/vector-icons";
interface ISearchButton {
  handlePress: () => void;
}
export default function SearchButton(props: ISearchButton) {
  return (
    <Button
      pos="absolute"
      left="10%"
      zIndex={3}
      top="5"
      onPress={props.handlePress}
      bg="white"
      w="80%"
      borderRadius={30}
      _pressed={{ bg: "white" }}
    >
      <HStack>
        <Feather name="search" color="#FF385C" size={20} />
        <Text ml="5" textAlign="center">
          Where are you going?
        </Text>
      </HStack>
    </Button>
  );
}
