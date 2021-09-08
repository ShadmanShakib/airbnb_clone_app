import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { EnterEmail, EnterName, EnterPassword, Welcome } from "../screens/auth";
import HomeTab from "./HomeTabs";
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeTab}
      />
    </Stack.Navigator>
  );
}
