/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import TagTree from "./tagTree";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

enum navTypes {
  Home,
  Profile,
  Settings,
  Map,
  Test,
}

const Tab = createBottomTabNavigator();

const App = () => {
  EStyleSheet.build({
    $dgreen6: "#65B876",
    $gray7: "#8C8C8C",
  });
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Camera" component={Camera}></Tab.Screen> */}
        <Tab.Screen name="Add" component={TagTree}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
