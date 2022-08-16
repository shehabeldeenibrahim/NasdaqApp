import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import ExploreScreen from "../Screens/Explore/Explore";
import TickerDetailsScreen from "../Screens/StockDetails/StockDetails";
import { colors } from "../theme";

/**
 * Navigation configuration component
 * @param  none
 */
export default function Navigation({}) {
  const MyTheme = {
    ...DefaultTheme,
    colors: colors,
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tickers"
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTitleStyle: { color: "white" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        contentStyle: { borderRadius: 90 },
      }}
    >
      <Stack.Screen
        name="Tickers"
        component={ExploreScreen}
        options={{ title: "Explore" }}
      />
      <Stack.Screen
        name="TickerDetails"
        component={TickerDetailsScreen}
        options={({ route }) => ({ title: route?.params?.headerTitle })}
      />
    </Stack.Navigator>
  );
}
