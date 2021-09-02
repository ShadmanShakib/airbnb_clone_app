import React from "react";
import { Box, Text, Input, Button, Switch, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
export default function EnterEmail() {
  return (
    <Box h="100%" pt="20" px="5" bg="blue.400">
      <Text mb="10" color="white" fontSize="3xl">
        And, your email?
      </Text>
      <Text color="white">EMAIL ADDRESS</Text>
      <Input
        color="white"
        _focus={{ borderColor: "white" }}
        variant="underlined"
        mb="5"
      />
      <HStack
        direction="row"
        justifyContent="spece-between"
        alignItems="center"
      >
        <Text color="white">
          I would like to receive markenting and policy communication email from
          Aribnb
        </Text>
        <Switch ml="3" h="6" onTrackColor="blue.600" />
      </HStack>
      <Button w="10" h="10" bg="blue.400" rounded="full" p="0">
        <AntDesign name="rightcircle" size={36} color="white" />
      </Button>
    </Box>
  );
}
