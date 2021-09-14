import React from "react";
import { Box, Text } from "native-base";
import { RoomCard } from "../../components/Cards";
import { FlexibleHeader } from "../../components/ui";
export default function Flexible() {
  return (
    <Box mt="6">
      <FlexibleHeader />
      <RoomCard />
    </Box>
  );
}
