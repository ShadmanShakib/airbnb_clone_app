import React from "react";
import { Box, Input, Text, Pressable } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { Controller, useForm } from "react-hook-form";
import { PrimaryButton } from "../../components/Buttons";
import firebase from "firebase/app";
import "firebase/auth";
import { AuthContext } from "../../context";

export default function EnterPassword({ navigation }: any) {
  type FormData = {
    password: string;
  };
  //AuthContext
  const { email } = React.useContext(AuthContext);

  //useForm hook of react-hook-form
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  //creating user with firebase
  const onSubmit = handleSubmit((data) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
      });
  });

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
        name="password"
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
