import React from "react";
import { View, Text, Box, HStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
export default function FlexibleHeader() {
  return (
    <HStack>
      <AntDesign name="arrowleft" size={24} color="black" />
      <Box></Box>
    </HStack>
  );
}
