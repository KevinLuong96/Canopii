/*
 * @format
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Image, Text, View, Platform } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from "@react-navigation/native";

const Photo = ({ route, navigation }) => {
  const { photo } = route.params;
  navigation.setOptions({
    // headerTransparent: true,
    headerLeft: navigation => {
      return (
        navigation.canGoBack && (
          <Icon.Button
            name="arrowleft"
            size={24}
            color="#000"
            backgroundColor="transparent"
            onPress={() => navigation.onPress()}
          />
        )
      );
    },
  });
  // const [isPending, setPending]: [boolean, Function] = useState(false);
  // const [data, setData] = useState(null);
  // async function fetchData() {
  //   const formData = new FormData();
  //   formData.append("Upload", {
  //     type: photo.type ? photo.type : `image/${photo.uri.split(".").pop()}`,
  //     name: photo.name ? photo.name : "UNCLASSIFIED_IMAGE",
  //     uri:
  //       Platform.OS === "android"
  //         ? photo.uri
  //         : photo.uri.replace("file://", ""),
  //   });
  //   const options = {
  //     method: "POST",
  //     headers: { "Content-Type": "multipart/form-data" },
  //     body: formData,
  //   };
  //   const res = await fetch("http://387ace07.ngrok.io/uploadleaf", options);
  //   console.log("res", res);
  //   if (res.ok) {
  //     const resJson = await res.json();
  //     setData(resJson);
  //   }
  //   setPending(false);
  // }

  // useEffect(() => {
  //   if (isPending) {
  //     fetchData();
  //   }
  // }, [isPending]);

  return (
    <>
      {/* {isPending && (
        <View style={styles.pending}>
          <Text>PENDING</Text>
        </View>
      )} */}
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: photo.uri }}
          style={styles.image}
        />
      </View>
      <View style={styles.next}>
        <Icon.Button
          name="arrowright"
          size={48}
          color="#000"
          backgroundColor="transparent"
          onPress={() => navigation.navigate("Choices", route.params)}
        ></Icon.Button>
      </View>
      {/* {data && data.species && data.species[0] && (
        <View style={styles.data}>
          <Text>{data.species[0]}</Text>
        </View>
      )} */}
      {/* <View style={styles.clear}>
        <Button onPress={() => clear()} title="Delete" style={styles.clear} />
      </View>
      <View style={styles.verify}>
        <Button
          onPress={() => {
            setPending(true);
          }}
          title="Verify"
          style={styles.clear}
        />
      </View> */}
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
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 2,
  },
  data: {
    width: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    top: 50,
    display: "flex",
    alignItems: "center",
  },
  verify: {
    backgroundColor: "#fff",
    position: "absolute",
    color: "#fff",
    bottom: 25,
    right: 25,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    backgroundColor: "#fff",
  },
  clear: {
    backgroundColor: "#fff",
    position: "absolute",
    color: "#fff",
    bottom: 25,
    left: 25,
  },
  next: {
    position: "absolute",
    right: 50,
    bottom: 50,
  },
});

export default Photo;
