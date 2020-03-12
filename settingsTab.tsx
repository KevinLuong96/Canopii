import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HeaderLeftButton from "./headerLeftButton";
import Settings from "./settings";
import FAQ from "./faq";

const Stack = createStackNavigator();
const SettingsTab = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: navigation => {
          return (
            navigation.canGoBack && (
              <HeaderLeftButton
                color={"#4b4b4b"}
                onPress={navigation.onPress}
              />
            )
          );
        },
        headerSyle: {
          underlayColor: "rgba(140, 140, 140, 0.25)",
        },
      }}
    >
      <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
      <Stack.Screen name="FAQ" component={FAQ}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingsTab;
