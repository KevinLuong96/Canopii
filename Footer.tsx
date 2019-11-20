import React, { Fragment } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Button style={styles.button} title="penis" />
      <Button style={styles.button} title="penis" />
      <Button style={styles.button} title="penis" />
      <Button style={styles.button} title="penis" />
      <Button style={styles.button} title="penis" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: { display: 'flex', flex: 1 },
  footer: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Footer;
