import HomeScreen from "./screens/HomeScreen/HomeScreen";
import NewScreen from "./screens/NewScreen/NewScreen";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: "#17B486",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="NewScreen" component={NewScreen} />
    </Stack.Navigator>
  );
}
