"use strict";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import DeviceInfo from "react-native-device-info";
import treeIDMap from "./dec_dat";
import conIDMap from "./con_dat";
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
  let name, sciName;
  if (treeID) {
    name = treeIDMap?.[treeID]?.name;
    sciName = treeIDMap?.[treeID]?.sciName;
  }
  if (!name && !sciName) {
    name = conIDMap?.[treeID]?.name;
    sciName = conIDMap?.[treeID]?.sciName;
  }

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
    console.log(options);
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
        <ScrollView style={[styles.container, reviewStyles.content]}>
          <TouchableHighlight
            style={[reviewStyles.body, { borderBottomWidth: 0 }]}
            onPress={() => {
              dispatch(clear());
              navigation.navigate("Camera");
            }}
            underlayColor={"rgba(140, 140, 140, 0.25)"}
          >
            <>
              <Text style={reviewStyles.subtitle}>Image</Text>
              <View style={reviewStyles.imageContainer}>
                {photoURI && (
                  <Image
                    source={{ uri: photoURI }}
                    key={photoURI}
                    style={reviewStyles.image}
                  ></Image>
                )}
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
            underlayColor={"rgba(140, 140, 140, 0.25)"}
          >
            <>
              <Text style={reviewStyles.subtitle}>Species</Text>
              {name && sciName && (
                <Text
                  style={[styles.body, reviewStyles.bodyText]}
                >{`${name} (${sciName})`}</Text>
              )}
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={reviewStyles.body}
            onPress={() => navigation.navigate("Location")}
            underlayColor={"rgba(140, 140, 140, 0.25)"}
          >
            <>
              <Text style={reviewStyles.subtitle}>Location</Text>
              <Text style={[styles.body, reviewStyles.bodyText]}>
                {location?.address}
              </Text>
            </>
          </TouchableHighlight>
          <TouchableHighlight
            style={reviewStyles.body}
            onPress={() => navigation.navigate("TreeType")}
            underlayColor={"rgba(140, 140, 140, 0.5)"}
          >
            <>
              <Text style={reviewStyles.subtitle}>Type</Text>
              <Text style={[styles.body, reviewStyles.bodyText]}>
                {treeType}
              </Text>
            </>
          </TouchableHighlight>
          <View style={reviewStyles.button}>
            <TouchableHighlight
              style={reviewStyles.touchable}
              onPress={() => {
                submitData();
                navigation.navigate("Thank");
              }}
              underlayColor={"rgba(140, 140, 140, 0.25)"}
            >
              <Text
                style={[styles.body, { color: "white", textAlign: "center" }]}
              >
                Tag tree
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
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
    marginBottom: 125,
    // paddingBottom: 100,
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    color: "$gray7",
    fontSize: 16,
    fontFamily: "Muli",
  },
  body: {
    borderBottomColor: "rgba(140,140,140,0.25)",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  button: {
    width: "80%",
    left: "10%",
    backgroundColor: "transparent",
    // position: "absolute",
    // bottom: 100,
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
    justifyContent: "center",
    marginTop: 5,
  },
  image: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  bodyText: {
    fontFamily: "Muli",
    fontSize: 16,
    paddingTop: 4,
  },
});

export default Review;
