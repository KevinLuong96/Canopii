"use strict";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import ImagePicker from "react-native-image-picker";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "lightgreen",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const Camera = ({ route, navigation }) => {
  return (
    <View style={[styles.all, styles.container, cameraStyles.container]}>
      <>
        <RNCamera
          style={cameraStyles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel",
          }}
          captureAudio={false}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== "READY") return <PendingView />;
            return (
              // <View
              // style={{
              // flex: 0,
              // flexDirection: "row",
              // justifyContent: "center",
              // }}
              // >
              <Icon.Button
                name="circle"
                size={60}
                color="#fff"
                backgroundColor="transparent"
                borderRadius={25}
                padding={0}
                margin={0}
                onPress={() => takePicture(camera)}
              />
              // <TouchableOpacity
              //   onPress={() => takePicture(camera)}
              //   style={cameraStyles.capture}
              // >
              //   <Icon name="circle" size={48}></Icon>
              //   {/* <Text style={{ fontSize: 14 }}> SNAP </Text> */}
              // </TouchableOpacity>
              // </View>
            );
          }}
        </RNCamera>
        <TouchableOpacity
          onPress={() =>
            ImagePicker.launchImageLibrary({ tintColor: "#fff" }, response => {
              console.log("Response = ", response);

              if (response.didCancel) {
                console.log("User cancelled image picker");
              } else if (response.error) {
                console.log("ImagePicker Error: ", response.error);
              } else if (response.customButton) {
                console.log(
                  "User tapped custom button: ",
                  response.customButton
                );
              } else {
                navigation.navigate("Photo", {
                  ...route.params,
                  photo: response,
                });
              }
            })
          }
          style={cameraStyles.imagePicker}
        >
          <Text>Pick Image</Text>
        </TouchableOpacity>
      </>
    </View>
  );

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      navigation.navigate("Photo", { ...route.params, photo: data });
    }
  }
};
const cameraStyles = StyleSheet.create({
  imagePicker: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 25,
    bottom: 25,
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    height: "100%",
  },
});

export default Camera;
