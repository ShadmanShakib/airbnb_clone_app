import React from "react";
import { Box, ScrollView, Text, View } from "native-base";
import { LocationCard, RoomCard } from "../../components/Cards";
import { FlexibleHeader } from "../../components/ui";
export default function Flexible({ navigation }: any) {
  return (
    <Box bg="white">
      <FlexibleHeader handleGoBack={() => navigation.goBack()} />
      <View mt="32" px="6">
        <ScrollView>
          <LocationCard title="Munnar, Kerala" price="118" distance="2,074" />
          <LocationCard title="Munnar, Kerala" price="118" distance="2,074" />
          <LocationCard title="Munnar, Kerala" price="118" distance="2,074" />
          <LocationCard title="Munnar, Kerala" price="118" distance="2,074" />
          <LocationCard title="Munnar, Kerala" price="118" distance="2,074" />
        </ScrollView>
      </View>
    </Box>
  );
}
