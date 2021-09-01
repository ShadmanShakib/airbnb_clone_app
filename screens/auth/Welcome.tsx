import React from "react";
import { Box, Text, Pressable, HStack } from "native-base";
import { Logo } from "../../components/icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Welcome({ navigation }: any) {
  return (
    <Box h="100%" px="6" bg="blue.400">
      <Text mt="10" textAlign="right" color="white">
        Log in
      </Text>
      <Box mt="20">
        <Logo fill="current" color="white" height="40" width="40" />
      </Box>
      <Text mt="10" mb="10" fontSize="2xl" color="white">
        Welcome to Airbnb
      </Text>
      <Pressable mb="5" rounded={30} bg="white">
        <HStack pl="5" alignItems="center" justifyContent="">
          <FontAwesome color="blue" size={20} name="facebook-f" />
          <Text
            py="3"
            textAlign="center"
            ml="10"
            fontWeight="semibold"
            color="blue.400"
          >
            Continue with Facebook
          </Text>
        </HStack>
      </Pressable>

      <Pressable
        py="3"
        rounded={30}
        border={1}
        borderColor="white"
        bg="transparent"
        onPress={() => navigation.navigate("EnterName")}
      >
        <Text fontWeight="semibold" color="white" textAlign="center">
          Create Account
        </Text>
      </Pressable>
      <Pressable mt="10">
        <Text>More Options</Text>
      </Pressable>
    </Box>
  );
}
