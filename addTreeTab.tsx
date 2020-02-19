import { createStackNavigator } from "@react-navigation/stack";
import Camera from "./camera";
import Icon from "react-native-vector-icons/AntDesign";
import Photo from "./photo";
import Choices from "./choices";
import TagTree from "./tagTree";
import React from "react";

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
              <Icon.Button
                name="arrowleft"
                size={24}
                onPress={() => navigation.onPress()}
                backgroundColor="transparent"
                // color="#900"
              />
            )
          );
        },
        headerLeftContainerStyle: {
          backgroundColor: "none",
        },
      }}
    >
      <Stack.Screen name="TagTree" component={TagTree}></Stack.Screen>
      <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
      <Stack.Screen name="Photo" component={Photo}></Stack.Screen>
      <Stack.Screen name="Choices" component={Choices}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default addTreeTab;
