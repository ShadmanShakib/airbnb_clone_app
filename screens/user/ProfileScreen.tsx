import React from "react";
import { Box, Text, Button, ScrollView, HStack, Flex } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
interface Props {
  title: string;
  children?: any;
}
const MenuItem = (props: Props) => {
  return (
    <Box mb="1">
      <Flex py="4" direction="row" justifyContent="space-between">
        <Text fontSize="lg">{props.title}</Text>
        {props.children}
      </Flex>
      <Box bg="gray.300" h="1px" w="100%" />
    </Box>
  );
};
export default function ProfileScreen() {
  return (
    <ScrollView pt="20" px="6">
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Your Profile
        </Text>
        <Text>Log in to start planning your next trip.</Text>
        <Button my="5" bg="#FF385F" _text={{ color: "white" }}>
          Log in
        </Button>
      </Box>
      <HStack mb="4">
        <Text>Don't have an account?</Text>
        <Text fontWeight="bold" underline={true}>
          Sign up
        </Text>
      </HStack>
      <Box bg="gray.300" h="1px" w="100%" />
      <MenuItem
        children={<Ionicons name="settings-sharp" size={24} color="black" />}
        title="Setting"
      />
      <MenuItem
        children={
          <MaterialCommunityIcons
            name="home-plus-outline"
            size={24}
            color="black"
          />
        }
        title="Learn about hosting"
      />
      <MenuItem
        children={<Ionicons name="help" size={24} color="black" />}
        title="Get help"
      />
      <MenuItem
        children={
          <Ionicons name="ios-document-text-outline" size={24} color="black" />
        }
        title="Terms of Services"
      />
    </ScrollView>
  );
}
