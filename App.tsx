import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/StackNavigation";
import { Linking } from "./navigations";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer linking={Linking}>
        <StackNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
