import React from "react";
import { Box, Button, Input, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

export default function EnterPassword({ navigation }: Props) {
  return (
    <Box px="6" pt="20" h="100%" bg="blue.400">
      <Text mb="5" fontSize="3xl" color="white">
        Create a password
      </Text>
      <Text mb="5" color="white">
        Your passowrd must include at least one symbol and be 8 or more
        character long.
      </Text>
      <Text color="white">PASSWORD</Text>
      <Input
        variant="underlined"
        color="white"
        _focus={{ borderColor: "white" }}
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
        onPress={() => navigation.navigate("EnterPassword")}
      >
        <AntDesign name="rightcircle" size={40} color="white" />
      </Button>
    </Box>
  );
}
