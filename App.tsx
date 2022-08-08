import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import Navigation from "./src/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./src/Overmind/helper";

// Init overmind
const overmind = createOvermind(config, {
  devtools: true,
});

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <Provider value={overmind}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
