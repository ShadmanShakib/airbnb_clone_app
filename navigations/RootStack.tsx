import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RootTabs from "./RootTabs";
import { RootStackParamList } from "../types";
import { AuthModal } from "../screens/auth";
import { SearchModal } from "../screens/user";
import EmailModal from "../screens/auth/EmailModal";

export default function RootStack() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={RootTabs}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="AuthModal"
          component={AuthModal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchModal"
          component={SearchModal}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="EmailModal" component={EmailModal} options={{}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
