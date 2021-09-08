import React from "react";
import { Text, Image, Box, ScrollView } from "native-base";

export default function ExploreScreen() {
  return (
    <ScrollView>
      <Text></Text>
      <Image
        height={500}
        width="100%"
        alt="Heroimage"
        source={{
          uri: "https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=720",
        }}
      />
    </ScrollView>
  );
}
