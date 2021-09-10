import React from "react";
import { Box, Text, Input } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { WithButton } from "../../components/ui";
import { AntDesign } from "@expo/vector-icons";
import { Google } from "../../components/icons";
import { PrimaryButton } from "../../components/Buttons";

export default function EmailModal() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Box>
      <Text></Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            type="email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        defaultValue=""
      />
      <PrimaryButton>
        <Text color="white">Continue</Text>
      </PrimaryButton>
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
