import React from "react";
import { Box, Text, Pressable, HStack } from "native-base";
import { Logo } from "../../components/icons";
import { FontAwesome } from "@expo/vector-icons";
export default function Welcome() {
  return (
    <Box>
      <Logo height="32" width="32" />
      <Text>Welcome to airbnb</Text>
      <Pressable py="3" rounded={30} bg="white">
        <HStack justifyContent="center">
          <FontAwesome name="facebook-f" />
          <Text>Continue with Facebook</Text>
        </HStack>
      </Pressable>
    </Box>
  );
}
