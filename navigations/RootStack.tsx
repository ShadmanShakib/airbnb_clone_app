import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import RootTabs from "./RootTabs";
import { RootStackParamList } from "../types";
import { AuthModal, EnterPassword } from "../screens/auth";
import {
  Flexible,
  MapView,
  SearchModal,
  SingleLoaction,
} from "../screens/user";
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
      <Stack.Screen
        name="Flexible"
        options={{ headerShown: false }}
        component={Flexible}
      />
      <Stack.Screen
        name="SingleLoaction"
        component={SingleLoaction}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "containedModal" }}>
        <Stack.Screen name="MapView" component={MapView} />
      </Stack.Group>
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
        <Stack.Screen
          name="EmailModal"
          component={EmailModal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterPassword"
          component={EnterPassword}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
