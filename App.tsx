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
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from "react-native";
import Button from "react-native-button";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import Footer from "./Footer";
import Camera from "./camera";
import Choices from "./choices";
enum navTypes {
  Home,
  Profile,
  Settings,
  Map,
  Test
}
const App = () => {
  EStyleSheet.build({});
  const [navState, setNavState] = useState(navTypes.Home);
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.view}>
        {navState == navTypes.Home && <Camera />}
        {navState == navTypes.Test && <Choices />}
        {/* {<View style={styles.innerView}>
          <ScrollView style={styles.scrollView} />
        </View>} */}
        <View style={styles.footer}>
          <Button
            onPress={() => setNavState(navTypes.Home)}
            style={
              navState == navTypes.Home
                ? [styles.button, styles.selected]
                : styles.button
            }
          >
            Home
          </Button>

          <Button
            onPress={() => setNavState(navTypes.Profile)}
            style={
              navState == navTypes.Profile
                ? [styles.button, styles.selected]
                : styles.button
            }
          >
            Profile
          </Button>
          <Button
            style={
              navState == navTypes.Settings
                ? [styles.button, styles.selected]
                : styles.button
            }
            onPress={() => setNavState(navTypes.Settings)}
          >
            Settings
          </Button>
          <Button
            onPress={() => setNavState(navTypes.Map)}
            style={
              navState == navTypes.Map
                ? [styles.button, styles.selected]
                : styles.button
            }
          >
            Map
          </Button>
          <Button
            onPress={() => setNavState(navTypes.Test)}
            style={
              navState == navTypes.Test
                ? [styles.button, styles.selected]
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

const styles = StyleSheet.create({
  button: { display: "flex", flex: 1 },
  footer: {
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  scrollView: {
    backgroundColor: Colors.lighter
  },
  innerView: { flex: 1 },
  view: { flex: 1 },
  highlight: {
    fontWeight: "700"
  },
  selected: { backgroundColor: "#add8e6", color: "#000" }
});
export default App;
