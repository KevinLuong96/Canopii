/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
import React, { Fragment, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Button from 'react-native-button';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Footer from './Footer';
import Camera from './Camera';

enum navTypes {
  Home,
  Profile,
  Settings,
  Map,
}

const App = () => {
  const [navState, setNavState]: [navTypes, Function] = useState(navTypes.Home);
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.view}>
        {navState == navTypes.Home ? (
          <Camera />
        ) : (
          <View style={styles.innerView}>
            <ScrollView style={styles.scrollView}>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
              <Text>Hello world</Text>
            </ScrollView>
          </View>
        )}
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
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  button: { display: 'flex', flex: 1 },
  footer: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  innerView: { flex: 1 },
  view: { flex: 1 },
  highlight: {
    fontWeight: '700',
  },
  selected: { backgroundColor: '#add8e6', color: '#000' },
});
export default App;
