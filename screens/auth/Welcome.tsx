import React from "react";
import { Box, Text, Pressable, HStack, Button } from "native-base";
import { Logo } from "../../components/icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Welcome({ navigation }: any) {
  return (
    <Box h="100%" px="6" bg="blue.400">
      <Text my="10" textAlign="right" color="white">
        Log in
      </Text>

      <Logo color="white" height="40" width="40" />

      <Text mt="10" mb="10" fontSize="2xl" color="white">
        Welcome to Airbnb
      </Text>
      <Button mb="5" bg="white" _text={{ color: "blue.500" }} borderRadius={30}>
        Continue with Facebook
      </Button>
      <Button
        onPress={() => navigation.navigate("EnterName")}
        bg="transparent"
        border={1}
        borderColor="white"
        borderRadius={30}
      >
        Create Account
      </Button>
    </Box>
  );
}
