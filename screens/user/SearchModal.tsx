import React from "react";
import { Box, Text, Input, ScrollView, Button } from "native-base";
export default function SearchModal() {
  const url =
    "/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=";
  const fetchPlaces = () => {
    fetch(
      "https://maps.google.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyBWjpdfGbxfUtS41DCn1mBFxu8oAMBX6H4",
      {
        headers: {},
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <Box pt="10" h="100%">
      <Text>GO ANYWHERE, ANYTIME</Text>
      <Button onPress={fetchPlaces} bg="white" shadow={3} rounded={4}>
        <Text>I'm flexible</Text>
      </Button>
      <ScrollView></ScrollView>
    </Box>
  );
}
