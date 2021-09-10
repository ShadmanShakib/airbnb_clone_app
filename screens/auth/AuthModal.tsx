import React from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Select,
  ScrollView,
  HStack,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { Google } from "../../components/icons";
import { WithButton } from "../../components/ui";

export default function AuthModal({ navigation }: any) {
  const [phone, setPhone] = React.useState("");
  return (
    <Box>
      <ScrollView mt="5" px="5">
        <Pressable pt="5" onPress={() => navigation.goBack()} mb="2">
          <Entypo name="cross" size={24} color="black" />
        </Pressable>
        <Box>
          <Text fontWeight="bold" mb="6" fontSize="xl">
            Log in or sign up to Airbnb
          </Text>
          <Select
            selectedValue={phone}
            onValueChange={(item) => setPhone(item)}
            placeholder="country/region"
          >
            <Select.Item label="Autigua and Barbuda(+1)" value="+1" />
            <Select.Item label="Bangladesh (+088)" value="+088" />
          </Select>
          <Input
            borderWidth={2}
            _focus={{ borderColor: "gray.700", borderWidth: 2 }}
            placeholder="Phone number"
            type="number"
          />
          <Text my="2" color="gray.400" fontSize="sm">
            We'll call or text yo to confirm your number, Standard message and
            data rates apply.
          </Text>
          <Button
            mt="3"
            _pressed={{ bg: "#ff385f" }}
            _text={{ color: "white" }}
            bg="#FF385F"
          >
            Continue
          </Button>
        </Box>
        <Text my="5" textAlign="center">
          or
        </Text>
        <WithButton
          children={
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="black"
            />
          }
          title="Continue with Email"
          handlePress={() => navigation.navigate("EmailModal")}
        />
        <WithButton
          children={<AntDesign name="facebook-square" size={24} color="blue" />}
          title="Continue with Facebook"
        />
        <WithButton
          children={<Google height="20" width="20" />}
          title="Continue with Gooole"
        />
        <WithButton
          children={<AntDesign name="apple1" size={24} color="black" />}
          title="Continue with Apple"
        />
      </ScrollView>
    </Box>
  );
}
