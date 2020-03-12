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
        cardStyle: {
          backgroundColor: "#f9f9f9",
        },
      }}
    >
      <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
      <Stack.Screen name="FAQ" component={FAQ}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingsTab;
