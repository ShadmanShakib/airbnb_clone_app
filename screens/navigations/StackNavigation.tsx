import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Welcome } from "../auth";
export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}
