/*
 * @format
 */

import React from 'react';
import { StyleSheet, Button, Image, View } from 'react-native';

type PhotoProps = {
  path: string;
  clear: Function;
};

const Photo = ({ path, clear }: PhotoProps) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: path }}
          style={styles.image}
        />
      </View>
      <View style={styles.clear}>
        <Button onPress={() => clear()} title="Delete" style={styles.clear} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
      flex: 1,
      width: null,
      height: null,
      flexShrink: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    backgroundColor: '#fff',
  },
  clear: {
    backgroundColor: '#fff',
    position: 'absolute',
    color: '#fff',
    bottom: 25,
    left: 25,
  },
  test: { color: '#fff' },
});

export default Photo;

export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
