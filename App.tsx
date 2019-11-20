/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Footer from './Footer';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.view}>
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
        <Footer />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  innerView: { flex: 1 },
  view: { flex: 1 },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
