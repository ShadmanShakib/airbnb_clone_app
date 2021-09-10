import React from "react";
import { Box, Text, Input, Pressable } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { WithButton } from "../../components/ui";
import { AntDesign, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { Google } from "../../components/icons";
import { PrimaryButton } from "../../components/Buttons";

export default function EmailModal({ navigation }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Box px="6" pt="10">
      <Pressable onPress={() => navigation.goBack()}>
        <Entypo name="cross" size={24} />
      </Pressable>
      <Text fontWeight="bold" my="5" fontSize="2xl">
        Log in or sign up to Airbnb
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            borderWidth={2}
            _focus={{ borderColor: "gray.500" }}
            mb="5"
            type="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="example@email.com"
          />
        )}
        name="email"
        defaultValue=""
      />
      <PrimaryButton onPress={() => navigation.navigate("EnterPassword")}>
        <Text color="white">Continue</Text>
      </PrimaryButton>
      <Text my="6" textAlign="center">
        or
      </Text>
      <WithButton
        title="Continue with Phone"
        children={
          <SimpleLineIcons name="screen-smartphone" size={24} color="black" />
        }
      />
      <WithButton
        title="Continue with Google"
        children={<Google height="20" width="20" />}
      />
      <WithButton
        children={<AntDesign name="facebook-square" size={24} color="blue" />}
        title="Continue with Facebook"
      />
      <WithButton
        children={<AntDesign name="apple1" size={24} color="black" />}
        title="Continue with Apple"
      />
    </Box>
  );
}
