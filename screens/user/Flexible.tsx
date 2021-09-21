import React from "react";
import { Box, HStack, ScrollView, Text, View, Pressable } from "native-base";
import { LocationCard, RoomCard } from "../../components/Cards";
import { FlexibleHeader } from "../../components/ui";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
export default function Flexible({ navigation }: any) {
  const { height, width } = Dimensions.get("window");
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
      <Pressable
        bottom="10"
        left={width / 2 - 45}
        borderRadius={20}
        bg="black"
        position="absolute"
        onPress={() => navigation.navigate("MapView")}
      >
        <HStack h="10" alignItems="center" justifyContent="center" w="24">
          <Ionicons color="white" name="map" size={20} />
          <Text ml="2" color="white">
            Map
          </Text>
        </HStack>
      </Pressable>
    </Box>
  );
}
