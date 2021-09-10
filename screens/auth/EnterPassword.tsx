import React from "react";
import { Box, Input, Text, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/Buttons";
export default function EnterPassword({ navigation }: any) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <Box px="6" mt="10">
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={24} />
      </Pressable>
      <Text mt="5" fontSize="2xl" fontWeight="bold" mb="5">
        Log In
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
            type="password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="example@email.com"
          />
        )}
        name="email"
        defaultValue=""
      />
      <PrimaryButton>
        <Text color="white">Continue</Text>
      </PrimaryButton>
      <Text mt="5" fontWeight="bold" textAlign="center" underline={true}>
        Forgot password
      </Text>
    </Box>
  );
}
