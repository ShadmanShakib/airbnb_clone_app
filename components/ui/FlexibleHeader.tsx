import React from "react";
import { View, Text, Box, HStack, Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { SettingIcon } from "../icons";
export default function FlexibleHeader() {
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <AntDesign name="arrowleft" size={24} color="black" />
      <Box py="1" borderRadius={20} px="3" bg="gray.200">
        <HStack alignItems="center">
          <Button variant="unstyled">Any time</Button>
          <Button variant="unstyled">Add Guests</Button>
        </HStack>
      </Box>
      <SettingIcon />
    </HStack>
  );
}
