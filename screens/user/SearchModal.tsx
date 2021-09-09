import React from "react";
import { Box, Text, Input, ScrollView, Button } from "native-base";
export default function SearchModal() {
  return (
    <Box h="100%">
      <Input />
      <Text>GO ANYWHERE, ANYTIME</Text>
      <Button bg="white" shadow={3} rounded={4}>
        <Text>I'm flexible</Text>
      </Button>
      <ScrollView></ScrollView>
    </Box>
  );
}
