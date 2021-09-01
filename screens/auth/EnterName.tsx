import React from "react";
import { Box, Text, Input } from "native-base";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  navigation: any;
}

export default function EnterName({ navigation }: Props) {
  return (
    <Box px="5" height="100%" bg="blue.400">
      <Text color="white" fontSize="3xl">
        What's your name
      </Text>
      <Text color="white"> FIRST NAME</Text>
      <Input
        variant="underlined"
        borderBottomWidth={2}
        _focus={{ borderColor: "white" }}
      />
      <Text color="white">LAST NAME</Text>
      <Input
        color="white"
        border={0}
        borderRadius={0}
        _focus={{ borderWidth: 0, shadow: "none", borderColor: "white" }}
      />
    </Box>
  );
}
