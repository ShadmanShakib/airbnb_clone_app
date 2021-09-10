import React, { Children } from "react";
import { View, Text } from "react-native";
import { AuthProvider } from "./AuthContext";

export default function MainProvider({ children }: any) {
  return <AuthProvider>{children}</AuthProvider>;
}
