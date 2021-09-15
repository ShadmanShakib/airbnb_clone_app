import React from "react";
import {
  Text,
  Box,
  HStack,
  Button,
  FlatList,
  Pressable,
  Image,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { SettingIcon } from "../icons";
import { MenuData } from "../../constants";

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
            px="3"
            borderBottomWidth={2}
            borderColor={activeMenu === item.title ? "black" : "white"}
            onPress={() => setActiveMenu(item.title)}
          >
            <HStack py="3" alignItems="center">
              <Box>
                <Image
                  alt={item.title}
                  h="5"
                  w="5"
                  source={{ uri: item.url }}
                />
              </Box>
              <Text pl="2" fontWeight="bold">
                {item.title}
              </Text>
            </HStack>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        data={MenuData}
      />
    </Box>
  );
}
