import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.button}>Penis</Text>
      <Text style={styles.button}>Penis</Text>
      <Text style={styles.button}>Penis</Text>
      <Text style={styles.button}>Penis</Text>
      <Text style={styles.button}>Penis</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { flex: 1 },
  footer: {
    height: 20,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Footer;
