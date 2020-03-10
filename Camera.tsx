"use strict";
import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import ImagePicker from "react-native-image-picker";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./header";
import EStyleSheet from "react-native-extended-stylesheet";

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
    // <View style={[styles.all, styles.container, cameraStyles.container]}>
    <>
      <Header
        header={
          <>
            <Text style={[styles.title, cameraStyles.title]}>
              Take Leaf Photo
            </Text>
            <Text style={[styles.heading, cameraStyles.heading]}>
              Please capture a single leaf centered below. The leaf should be
              flat, and pointing downward with a natural background
            </Text>
          </>
        }
        content={
          <View style={cameraStyles.camera}>
            <RNCamera
              style={[
                cameraStyles.preview,
                { width: Dimensions.get("screen").width },
              ]}
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
                  <View style={cameraStyles.buttonContainer}>
                    <View style={cameraStyles.button}>
                      <Icon
                        name="circle-thin"
                        size={60}
                        color={"#fff"}
                        backgroundColor="transparent"
                        onPress={() => takePicture(camera)}
                        containerStyle={{ backgroundColor: "red" }}
                        // style={cameraStyles.button}
                      />
                    </View>
                  </View>
                );
              }}
            </RNCamera>
          </View>
        }
        fullWidth={true}
      />
      <TouchableOpacity
        onPress={() =>
          ImagePicker.launchImageLibrary({ tintColor: "#fff" }, response => {
            console.log("Response = ", response);

            if (response.didCancel) {
              console.log("User cancelled image picker");
            } else if (response.error) {
              console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
              console.log("User tapped custom button: ", response.customButton);
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
  );

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      navigation.navigate("Photo", { ...route.params, photo: data });
    }
  }
};
const cameraStyles = EStyleSheet.create({
  button: {
    backgroundColor: "$dgreen6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    borderRadius: 35,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#fff",
    height: 90,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    zIndex: 2,
  },
  imagePicker: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 25,
    bottom: 25,
  },
  preview: {
    display: "flex",
    flex: 1,
    width: "100%",
    marginBottom: 160,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  title: {
    color: "white",
    marginBottom: 10,
  },
  heading: {
    color: "white",
    marginBottom: 15,
  },
  camera: {
    width: "100%",
    display: "flex",
    flex: 1,
    height: "100%",
  },
});

export default Camera;
