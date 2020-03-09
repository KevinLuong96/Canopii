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
import Icon from "react-native-vector-icons/EvilIcons";
import rootReducer from "./reducer/reducers";
import Geolocation from "@react-native-community/geolocation";

const Tab = createBottomTabNavigator();
const $dgreen6 = "#65B876";
const $gray7 = "#8C8C8C";
const store = createStore(rootReducer);
Geolocation.setRNConfiguration({
  authorizationLevel: "whenInUse",
  skipPermissionRequests: false,
});
const App = () => {
  EStyleSheet.build({
    $dgreen6,
    $gray7,
  });
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Add") {
                iconName = "camera";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }
              return <Icon name={iconName} size={48} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: $dgreen6,
            inactiveTintColor: "#fff",
            showLabel: false,
            style: {
              paddingTop: 10,
              height: 70,
              paddingBottom: 20,
            },
          }}
        >
          <Tab.Screen name="Add" component={addTreeTab}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
