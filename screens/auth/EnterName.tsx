import React from "react";
import { Box, Text, Input, Button } from "native-base";
import { TextInput, StyleSheet } from "react-native";
import { buttonStyle } from "styled-system";

interface Props {
  navigation: any;
}

export default function EnterName({ navigation }: Props) {
  return (
    <Box pt="20" px="5" height="100%" bg="blue.400">
      <Text mb="10" color="white" fontSize="3xl">
        What's your name?
      </Text>
      <Text fontWeight="semibold" color="white">
        FIRST NAME
      </Text>
      <Input
        color="white"
        mb="8"
        variant="underlined"
        _focus={{ borderColor: "white" }}
      />
      <Text fontWeight="semibold" color="white">
        LAST NAME
      </Text>
      <Input
        color="white"
        _focus={{ borderBottomColor: "white" }}
        variant="underlined"
      />
      <Button
        mt="5"
        borderRadius={30}
        bg="white"
        _text={{ color: "blue.400" }}
        onPress={() => navigation.navigate("EnterEmail")}
      >
        Next
      </Button>
    </Box>
  );
}
