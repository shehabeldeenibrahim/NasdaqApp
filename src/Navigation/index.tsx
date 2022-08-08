import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ColorSchemeName } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TickersScreen from "../Screens/TickersScreen";
import TickerDetailsScreen from "../Screens/TickerDetailsScreen";

/**
 * Navigation configuration component
 * @param  colorScheme
 */
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Tickers">
      <Stack.Screen name="Tickers" component={TickersScreen} />
      <Stack.Screen name="TickerDetails" component={TickerDetailsScreen} />
    </Stack.Navigator>
  );
}
