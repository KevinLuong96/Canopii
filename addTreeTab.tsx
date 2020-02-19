import { createStackNavigator } from "@react-navigation/stack";
import Camera from "./camera";
import Photo from "./photo";
import Choices from "./choices";
import TagTree from "./tagTree";
import React from "react";
import Tree from "./tree";
import HeaderLeftButton from "./headerLeftButton";

const Stack = createStackNavigator();

const addTreeTab = () => {
  return (
    <Stack.Navigator
      //@ts-ignore
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: navigation => {
          return (
            navigation.canGoBack && (
              <HeaderLeftButton color={"#fff"} onPress={navigation.onPress} />
            )
          );
        },
      }}
    >
      <Stack.Screen name="TagTree" component={TagTree}></Stack.Screen>
      <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
      <Stack.Screen name="Photo" component={Photo}></Stack.Screen>
      <Stack.Screen name="Choices" component={Choices}></Stack.Screen>
      <Stack.Screen name="Tree" component={Tree}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default addTreeTab;
