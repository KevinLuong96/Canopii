"use strict";
import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import DeviceInfo from "react-native-device-info";
import treeIDMap from "./dec_dat";
import { clear } from "./actions";

const deviceId = DeviceInfo.getUniqueId();

const Review = ({ navigation }) => {
  const dispatch = useDispatch();
  const {
    entryID,
    treeID,
    location,
    treeName,
    treeType,
    photoURI,
  } = useSelector(state => state);
  console.log(entryID, treeID, location, treeType, photoURI);
  const { name, sciName } = treeIDMap?.[treeID];

  async function submitData() {
    const data = {
      entry_id: entryID,
      device_id: deviceId,
      lat: location.latitude,
      long: location.longitude,
      addr: location.address,
      species_id: treeID,
      tree_type: treeType,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch("http://canopii.net/dataent", options);
    if (res.ok) {
      const resJson = await res.json();
      console.log(resJson);
    }
  }

  return (
    <Header
      header={
        <View style={reviewStyles.header}>
          <Text style={[styles.title, reviewStyles.title]}>Review Details</Text>
          <Text style={[styles.heading, reviewStyles.heading]}>
            Tap on a section to make any changes.
          </Text>
        </View>
      }
      content={
        <View style={[styles.container, reviewStyles.content]}>
          <TouchableHighlight
            style={reviewStyles.body}
            onPress={() => {
              dispatch(clear());
              navigation.navigate("Camera");
            }}
          >
            <>
              <Text style={reviewStyles.subtitle}>Image</Text>
              <View style={reviewStyles.imageContainer}>
                {photoURI &&
                  photoURI.map(photo => (
                    <Image
                      source={{ uri: photo }}
                      key={photo}
                      style={reviewStyles.image}
                    ></Image>
                  ))}
              </View>
            </>
          </TouchableHighlight>

          <TouchableHighlight
            style={reviewStyles.body}
            onPress={() =>
              navigation.navigate("Tree", {
                sciName,
                name,
                ID: treeID,
              })
            }
          >
            <>
              <Text style={reviewStyles.subtitle}>Species</Text>
              <Text style={styles.body}>{`${name} (${sciName})`}</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={reviewStyles.body}
            onPress={() => navigation.navigate("Location")}
          >
            <>
              <Text style={reviewStyles.subtitle}>Location</Text>
              <Text style={styles.body}>{location?.address}</Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={reviewStyles.body}
            onPress={() => navigation.navigate("TreeType")}
          >
            <>
              <Text style={reviewStyles.subtitle}>Type</Text>
              <Text style={styles.body}>{treeType}</Text>
            </>
          </TouchableHighlight>
          <View style={reviewStyles.button}>
            <TouchableHighlight
              style={reviewStyles.touchable}
              onPress={() => {
                submitData();
              }}
            >
              <Text
                style={[styles.body, { color: "white", textAlign: "center" }]}
              >
                This information is correct
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      }
    />
  );
};
const reviewStyles = EStyleSheet.create({
  header: {
    marginBottom: -15,
  },
  heading: {
    color: "#fff",
  },
  content: {
    marginTop: 45,
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    color: "$gray7",
    fontSize: 16,
  },
  body: {
    borderBottomColor: "$gray7",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  button: {
    width: "80%",
    left: "10%",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -100,
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
  imageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  image: {
    height: 175,
    width: 175,
  },
});

export default Review;