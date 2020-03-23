import { createStackNavigator } from "@react-navigation/stack";
import Camera from "./camera";
import Photo from "./photo";
import Choices from "./choices";
import TagTree from "./tagTree";
import React from "react";
import Tree from "./tree";
import Location from "./location";
import HeaderLeftButton from "./headerLeftButton";
import TreeType from "./treeType";
import Review from "./review";
import Thank from "./thank";
import Search from "./search";

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
        cardStyle: {
          backgroundColor: "#f9f9f9",
        },
      }}
    >
      <Stack.Screen name="TagTree" component={TagTree}></Stack.Screen>
      <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
      <Stack.Screen name="Photo" component={Photo}></Stack.Screen>
      <Stack.Screen name="Choices" component={Choices}></Stack.Screen>
      <Stack.Screen name="Tree" component={Tree}></Stack.Screen>
      <Stack.Screen name="Location" component={Location}></Stack.Screen>
      <Stack.Screen name="TreeType" component={TreeType}></Stack.Screen>
      <Stack.Screen name="Review" component={Review}></Stack.Screen>
      <Stack.Screen name="Thank" component={Thank}></Stack.Screen>
      <Stack.Screen name="Search" component={Search}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default addTreeTab;
