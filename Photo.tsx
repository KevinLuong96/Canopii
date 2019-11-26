/*
 * @format
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Image, Text, View } from 'react-native';

type PhotoProps = {
  path: string;
  clear: Function;
};

const Photo = ({ path, clear }: PhotoProps) => {
  const [isPending, setPending]: [boolean, Function] = useState(false);
  const [data, setData] = useState(null);
  async function fetchData() {
    console.log('fetching');
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const resJson = await res.json();
    setPending(false);
    setData(resJson);
  }

  useEffect(() => {
    console.log('ispending', isPending);
    if (isPending) {
      fetchData();
    }
  }, [isPending]);

  return (
    <>
      {isPending&& (
        <View style={styles.pending}>
          {true && console.log('hello')}
          <Text>PENDING</Text>
        </View>
      )} 
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
      <View style={styles.verify}>
        <Button
          onPress={() => {
            console.log(isPending);
            setPending(true);
          }}
          title="Verify"
          style={styles.clear}
        />
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
  pending: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 2,
  },
  verify: {
    backgroundColor: '#fff',
    position: 'absolute',
    color: '#fff',
    bottom: 25,
    right: 25,
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
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
export default Photo;
