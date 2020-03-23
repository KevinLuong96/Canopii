"use strict";
import React, { useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { RNCamera } from "react-native-camera";
import ImagePicker from "react-native-image-picker";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import Header from "./header";
import { useSelector } from "react-redux";
import ImageEditor from "@react-native-community/image-editor";
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
    <>
      <Header
        header={
          <>
            <Text style={[styles.title, cameraStyles.title]}>
              Take Leaf Photo
            </Text>
            <Text style={[styles.heading, cameraStyles.heading]}>
              Capture a single leaf centered below. The leaf should be flat, and
              pointing downward in a natural background.
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
                // if (status !== "READY") return <PendingView />;
                return (
                  <View style={cameraStyles.buttonContainer}>
                    <View style={cameraStyles.button}>
                      <Icon
                        name="circle-thin"
                        size={60}
                        color={"#fff"}
                        backgroundColor="transparent"
                        onPress={() => takePicture(camera)}
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
            if (response.didCancel) {
              console.log("User cancelled image picker");
            } else if (response.error) {
              console.log("ImagePicker Error: ", response.error);
            } else if (response.customButton) {
              console.log("User tapped custom button: ", response.customButton);
            } else {
              ImageEditor.cropImage(response.uri, {
                offset: { x: 0, y: 0 },
                size: { width: response.width, height: response.width },
              }).then(url => {
                response.uri = url;
                navigation.navigate("Photo", {
                  ...route.params,
                  photo: response,
                });
              });
            }
          })
        }
        style={cameraStyles.imagePicker}
      >
        <AntIcon
          name="upload"
          size={24}
          color={"#8C8C8C"}
          backgroundColor="transparent"
        />
      </TouchableOpacity>
    </>
  );

  async function takePicture(camera) {
    if (camera) {
      const options = { quality: 0.05, base64: true };
      const data = await camera.takePictureAsync(options);
      ImageEditor.cropImage(data.uri, {
        offset: { x: 0, y: 0 },
        size: {
          width: Math.min(data.width, data.height),
          height: Math.min(data.width, data.height),
        },
      }).then(url => {
        data.uri = url;
        navigation.push("Photo", { ...route.params, photo: data });
      });
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
    backgroundColor: "#f9f9f9",
    height: 90,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 10,
    zIndex: 2,
  },
  imagePicker: {
    backgroundColor: "#fff",
    position: "absolute",
    left: 48,
    bottom: 24,
  },
  preview: {
    display: "flex",
    flex: 1,
    width: "100%",
    marginBottom: 155,
    position: "relative",
  },
  container: {
    height: "100%",
  },
  title: {
    color: "white",
    marginBottom: 16,
    fontSize: 28,
  },
  heading: {
    color: "white",
    fontSize: 18,
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
