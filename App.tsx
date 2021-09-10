import { StatusBar } from "expo-status-bar";
import React from "react";
import { NativeBaseProvider, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./navigations/RootStack";
import { Linking } from "./navigations";
import { theme } from "./components/ui";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWjpdfGbxfUtS41DCn1mBFxu8oAMBX6H4",
  authDomain: "airbnb-clone-shadmanshakib.firebaseapp.com",
  projectId: "airbnb-clone-shadmanshakib",
  storageBucket: "airbnb-clone-shadmanshakib.appspot.com",
  messagingSenderId: "159484575611",
  appId: "1:159484575611:web:6d9c808bd6a46dff9507de",
  measurementId: "G-5EBZ42Z7SP",
};

const app = firebase.initializeApp(firebaseConfig);
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
