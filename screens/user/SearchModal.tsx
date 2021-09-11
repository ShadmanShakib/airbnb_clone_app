import React from "react";
import { Box, Text, Input, ScrollView, Button } from "native-base";
import { GooglePlacesInput } from "../../components/ui";
export default function SearchModal() {
  return (
    <Box pt="10" h="100%">
      <GooglePlacesInput />
      <Text>GO ANYWHERE, ANYTIME</Text>
      <Button bg="white" shadow={3} rounded={4}>
        <Text>I'm flexible</Text>
      </Button>
      <ScrollView></ScrollView>
    </Box>
  );
}
