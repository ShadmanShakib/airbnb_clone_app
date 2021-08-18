import React from "react";
import { Box, Text, Pressable } from "native-base";
import { Logo } from "../../components/icons";
import { FontAwesome } from "@expo/vector-icons";
export default function Welcome() {
  return (
    <Box>
      <Logo height="32" width="32" />
      <Text>Welcome to airbnb</Text>
      <Pressable bg="white">
        <FontAwesome name="facebook-f" />
        <Text>Continue with Facebook</Text>
      </Pressable>
    </Box>
  );
}
