import React from "react";
import { StatusBar } from "expo-status-bar";
import Navigation from "./src/Navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./src/Overmind/helper";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { theme } from "./src/theme";
import { createIconsLibrary } from "./src/utils";

const customTheme = createTheme(theme);
// Init overmind
const overmind = createOvermind(config, {
  devtools: true,
});

// Setup library of fontawesome icons
createIconsLibrary();

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Provider value={overmind}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    </ThemeProvider>
  );
}
