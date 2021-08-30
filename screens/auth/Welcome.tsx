import React from "react";
import { Box, Text, Pressable, HStack } from "native-base";
import { Logo } from "../../components/icons";
import { FontAwesome } from "@expo/vector-icons";
export default function Welcome() {
  return (
    <Box h="100%" bg="blue.300">
      <Logo fill="current" color="white" height="32" width="32" />
      <Text>Welcome to airbnb</Text>
      <Pressable py="3" rounded={30} bg="white">
        <HStack justifyContent="center">
          <FontAwesome color="blue" name="facebook-f" />
          <Text>Continue with Facebook</Text>
        </HStack>
      </Pressable>
      <Pressable py="3" rounded={30} bg="white">
        <Text textAlign="center">Create a new account</Text>
      </Pressable>
    </Box>
  );
}
