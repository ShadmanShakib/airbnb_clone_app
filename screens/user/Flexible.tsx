import React from "react";
import { Box, Text } from "native-base";
import { LocationCard, RoomCard } from "../../components/Cards";
import { FlexibleHeader } from "../../components/ui";
export default function Flexible() {
  return (
    <Box px="6" mt="6">
      <FlexibleHeader />
      <LocationCard />
      {/* <RoomCard /> */}
    </Box>
  );
}
