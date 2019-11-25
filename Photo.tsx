/*
 * @format
 */

import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

const Photo = props => {
  console.log(props.path);
  return <Image source={{ uri: props.path }} width={100} height={200} />;
};

const styles = StyleSheet.create({
  test: { color: '#fff' },
});

export default Photo;
