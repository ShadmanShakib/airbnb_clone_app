import React from "react";
import { Box, Input, Text } from "native-base";

export default function EnterPassword() {
  return (
    <Box px="6" pt="20" h="100%" bg="blue.400">
      <Text fontSize="3xl" color="white">
        Create a password
      </Text>
      <Text color="white">
        Your passowrd must include at least one symbol and be 8 or more
        character long.
      </Text>
      <Text color="white">PASSWORD</Text>
      <Input
        variant="underlined"
        color="white"
        _focus={{ borderColor: "white" }}
      />
    </Box>
  );
}
