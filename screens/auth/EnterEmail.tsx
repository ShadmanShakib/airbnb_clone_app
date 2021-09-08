import React from "react";
import {
  Box,
  Text,
  Input,
  Button,
  Switch,
  HStack,
  KeyboardAvoidingView,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Platform } from "react-native";

interface Props {
  navigation: any;
}

export default function EnterEmail({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h="100%"
    >
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
            I would like to receive markenting and policy communication email
            from Aribnb
          </Text>
          <Switch ml="3" h="6" onTrackColor="blue.600" />
        </HStack>
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
    </KeyboardAvoidingView>
  );
}
