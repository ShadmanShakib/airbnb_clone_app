import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RootTabs from "./RootTabs";
import { RootStackParamList } from "../types";

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={RootTabs}
      />
    </Stack.Navigator>
  );
}
