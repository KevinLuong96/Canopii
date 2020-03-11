/*
 * @format
 */

import React from "react";
import { StyleSheet, Image, View, Platform } from "react-native";
import { setEntryID, setPredictedTrees, setPhotoURI } from "./actions";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import DeviceInfo from "react-native-device-info";
import HeaderLeftButton from "./headerLeftButton";

const deviceId = DeviceInfo.getUniqueId();

const Photo = ({ route, navigation }) => {
  const { photo } = route.params;
  navigation.setOptions({
    headerLeft: navigation => (
      <HeaderLeftButton color="#000" onPress={navigation.onPress} />
    ),
  });

  const dispatch = useDispatch();

  async function sendPhoto(photo) {
    const formData = new FormData();
    formData.append("Upload", {
      type: photo.type ? photo.type : `image/${photo.uri.split(".").pop()}`,
      name: photo.name ? photo.name : photo.uri.split("/").pop(),
      uri:
        Platform.OS === "android"
          ? photo.uri
          : photo.uri.replace("file://", ""),
    });
    formData.append("device_id", deviceId);
    formData.append("noIP", true);
    const options = {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    };

    const res = await fetch("http://canopii.net/uploadleaf", options);
    if (res.ok) {
      res.json().then(resJson => {
        dispatch(setEntryID(resJson.entry_id));
        dispatch(setPredictedTrees(resJson.pred_spec_id));
        console.log(resJson);
      });
    }
  }

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
          onPress={() => {
            sendPhoto(photo);
            dispatch(setPhotoURI(photo.uri));
            navigation.navigate("Choices", route.params);
          }}
        ></Icon.Button>
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
