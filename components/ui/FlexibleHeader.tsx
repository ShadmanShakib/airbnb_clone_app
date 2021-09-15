import React from "react";
import {
  View,
  Text,
  Box,
  HStack,
  Button,
  ScrollView,
  FlatList,
  Pressable,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { SettingIcon } from "../icons";

const Options = [
  "Treehouses",
  "Amazing Pool",
  "Kezhan",
  "Shoping ",
  "Beachfront",
  "Ryokans",
  "Tiny homes",
  "Islands",
  "Cabins",
  "Domes",
  "Farms",
  "Castles",
  "Yurts",
  "Campers",
  "Houseboats",
  "Boats",
];

interface FlexibleHeaderProps {
  handleGoBack: () => void;
}

export default function FlexibleHeader(props: FlexibleHeaderProps) {
  const { handleGoBack } = props;
  const [activeMenu, setActiveMenu] = React.useState("Treehouses");
  return (
    <Box position="fixed" bg="white" w="100%" pt="6" zIndex={1}>
      <HStack px="6" alignItems="center" justifyContent="space-between">
        <Pressable onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <Box py="1" borderRadius={20} px="3" bg="gray.100">
          <HStack alignItems="center">
            <Button variant="unstyled">Any time</Button>
            <Button variant="unstyled">Add Guests</Button>
          </HStack>
        </Box>
        <SettingIcon />
      </HStack>

      <FlatList
        showsHorizontalScrollIndicator={false}
        pl="6"
        horizontal={true}
        renderItem={({ item }) => (
          <Pressable
            borderBottomWidth={2}
            borderColor={activeMenu === item ? "black" : "white"}
            onPress={() => setActiveMenu(item)}
          >
            <Text fontWeight="bold" mx="3" my="3">
              {item}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item, index) => item + index}
        data={Options}
      />
    </Box>
  );
}
