import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigations/RootStack";
import { Linking } from "./navigations";
import { theme } from "./components/ui";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer linking={Linking}>
        <RootStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
