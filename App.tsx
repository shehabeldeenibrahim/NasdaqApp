import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import Navigation from "./src/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
}
