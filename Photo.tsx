/*
 * @format
 */

import React, { useCallback, useState, useEffect } from "react";
import { Image, View, Platform, TouchableHighlight, Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { setEntryID, setPredictedTrees, setPhotoURI } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import DeviceInfo from "react-native-device-info";
import HeaderLeftButton from "./headerLeftButton";
import jimp from "jimp";

const deviceId = DeviceInfo.getUniqueId();

const Photo = ({ route, navigation }) => {
  const { photo, treeType } = route.params;
  navigation.setOptions({
    headerLeft: navigation => (
      <HeaderLeftButton color="#000" onPress={navigation.onPress} />
    ),
  });
  console.log(treeType);

  const [manualIdentification, setManualIdentification] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("manualIdentification");
      if (value !== null) {
        // IP flow only for deciduous
        setManualIdentification(value == "true" || treeType == "Coniferous");
      }
    } catch (e) {
      // error reading value
    }
  };

  async function sendPhoto(photo) {
    if (!manualIdentification) {
      setLoading(true);
    }
    // const image = await jimp.read(photo.uri);
    // image.scaleToFit(300, 300);
    // const uri = await image.getBase64Async(image.getMIME());
    // image.writeAsync(photo.uri);
    // console.log(uri);

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
    // if (treeID) formData.append("tree_id", treeID);

    const options = {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    };

    const res = await fetch("http://canopii.net/uploadleaf", options);
    if (res.ok) {
      const resJson = await res.json();
      dispatch(setEntryID(resJson.entry_id));
      dispatch(setPredictedTrees(resJson.pred_spec_id));
      console.log(resJson);

      if (!manualIdentification) {
        const leaves =
          resJson?.pred_spec_id &&
          resJson.pred_spec_id.map(id => {
            return { ID: id };
          });

        navigation.navigate("Choices", {
          ...route.params,
          leaves,
        });
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);
  // getData();

  return (
    <>
      <View style={photoStyles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: photo.uri }}
          style={photoStyles.image}
        />
      </View>
      <View style={photoStyles.button}>
        <TouchableHighlight
          style={
            loading
              ? [photoStyles.touchable, { backgroundColor: "#8c8c8c" }]
              : [photoStyles.touchable]
          }
          onPress={() => {
            sendPhoto(photo);
            dispatch(setPhotoURI(photo.uri));
            manualIdentification && navigation.push("Choices", route.params);
          }}
        >
          <Text style={[styles.body, { color: "white", textAlign: "center" }]}>
            {loading ? "Extracting species..." : "Confirm photo"}
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

const photoStyles = EStyleSheet.create({
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
    backgroundColor: "#f9f9f9",
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
  button: {
    width: "80%",
    left: "10%",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 50,
    zIndex: 1,
  },
  touchable: {
    backgroundColor: "$dgreen6",
    width: "100%",
    height: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Photo;
