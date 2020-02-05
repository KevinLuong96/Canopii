/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
import React, { Fragment, useState } from "react";
import styles from "./styles";
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from "react-native";
import Button from "react-native-button";
import EStyleSheet from "react-native-extended-stylesheet";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Camera from "./camera";
import Choices from "./choices";
enum navTypes {
  Home,
  Profile,
  Settings,
  Map,
  Test,
}
const App = () => {
  EStyleSheet.build({
    $dgreen6: "#4BA55D",
  });
  const [navState, setNavState] = useState(navTypes.Home);
  return (
    <Fragment>
      {/* <StatusBar barStyle="light-content" hidden={false} translucent={false} /> */}
      <View style={appStyles.statusBar}>
        {navState == navTypes.Test && (
          <Text style={[styles.heading, appStyles.statusBarText]}>
            Identify Tree Species
          </Text>
        )}
      </View>
      <SafeAreaView style={[styles.all, styles.container, appStyles.container]}>
        {navState == navTypes.Home && <Camera />}
        {navState == navTypes.Test && <Choices />}
        {/* {<View style={styles.flex}>
          <ScrollView style={styles.scrollView} />
        </View>} */}
        <View style={appStyles.footer}>
          <Button
            onPress={() => setNavState(navTypes.Home)}
            style={
              navState == navTypes.Home
                ? [styles.flex, appStyles.selected]
                : styles.flex
            }
          >
            Home
          </Button>

          <Button
            onPress={() => setNavState(navTypes.Profile)}
            style={
              navState == navTypes.Profile
                ? [styles.flex, appStyles.selected]
                : styles.flex
            }
          >
            Profile
          </Button>
          <Button
            style={
              navState == navTypes.Settings
                ? [styles.flex, appStyles.selected]
                : styles.flex
            }
            onPress={() => setNavState(navTypes.Settings)}
          >
            Settings
          </Button>
          <Button
            onPress={() => setNavState(navTypes.Map)}
            style={
              navState == navTypes.Map
                ? [styles.flex, appStyles.selected]
                : styles.flex
            }
          >
            Map
          </Button>
          <Button
            onPress={() => setNavState(navTypes.Test)}
            style={
              navState == navTypes.Test
                ? [styles.button, appStyles.selected]
                : styles.button
            }
          >
            Test
          </Button>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const appStyles = EStyleSheet.create({
  container: {
    alignItems: "center",
  },
  footer: {
    height: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  view: { alignItems: "center" },
  highlight: {
    fontWeight: "700",
  },
  selected: { backgroundColor: "#add8e6", color: "#000" },
  statusBar: {
    backgroundColor: "$dgreen6",
    height: 100,
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  statusBarText: {
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
});
export default App;
