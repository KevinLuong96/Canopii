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
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStore } from "redux";
import { Provider } from "react-redux";
import addTreeTab from "./addTreeTab";
import Settings from "./settings";
import Home from "./home";
import AntDesign from "react-native-vector-icons/AntDesign";
import Material from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import rootReducer from "./reducer/reducers";
import Geolocation from "@react-native-community/geolocation";
import SettingsTab from "./settingsTab";

const Tab = createBottomTabNavigator();
const $dgreen6 = "#65B876";
const $gray7 = "#8C8C8C";
const $lightGray = "#f9f9f9";
const store = createStore(rootReducer);
Geolocation.setRNConfiguration({
  authorizationLevel: "whenInUse",
  skipPermissionRequests: false,
});
const App = () => {
  EStyleSheet.build({
    $dgreen6,
    $gray7,
    $lightGray,
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Add") {
                return <Feather name="plus-circle" size={24} color={color} />;
              } else if (route.name === "Settings") {
                return <Feather name="settings" size={24} color={color} />;
              } else if (route.name === "Home") {
                return <AntDesign name="home" size={24} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: $dgreen6,
            inactiveTintColor: $gray7,
            showLabel: false,
            style: {
              paddingTop: 10,
              height: 90,
              paddingBottom: 20,
              backgroundColor: "#f9f9f9",
            },
          }}
          style={{
            backgroundColor: "#f9f9f9",
          }}
        >
          <Tab.Screen name="Home" component={Home}></Tab.Screen>
          <Tab.Screen name="Add" component={addTreeTab}></Tab.Screen>
          <Tab.Screen name="Settings" component={SettingsTab}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
