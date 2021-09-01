import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { EnterName, Welcome } from "../screens/auth";
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="EnterName"
        component={EnterName}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
