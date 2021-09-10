import React from "react";
import { HStack, Pressable, Text } from "native-base";
interface IWithButton {
  title: string;
  children: any;
  handlePress?: () => void;
}
export default function WithButton(props: IWithButton) {
  return (
    <Pressable
      onPress={props.handlePress}
      mb="3"
      px="8"
      rounded="lg"
      py="3"
      w="100%"
      borderWidth={2}
    >
      <HStack>
        {props.children}
        <Text textAlign="center" w="90%" color="gray.700">
          {props.title}
        </Text>
      </HStack>
    </Pressable>
  );
}
