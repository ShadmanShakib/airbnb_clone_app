import React from "react";
import { Box, Text, Input, Button } from "native-base";
import { TextInput, StyleSheet } from "react-native";
import { buttonStyle } from "styled-system";
import { AntDesign } from "@expo/vector-icons";

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
        pos="absolute"
        bottom="4"
        right="6"
        w="10"
        h="10"
        bg="blue.400"
        rounded="full"
        p="0"
        onPress={() => navigation.navigate("EnterEmail")}
      >
        <AntDesign name="rightcircle" size={40} color="white" />
      </Button>
    </Box>
  );
}
