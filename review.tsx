"use strict";
import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
import treeIDMap from "./dec_dat";

const Review = ({ navigation }) => {
  const {
    entryID,
    treeID,
    location,
    treeName,
    treeType,
    photoURI,
  } = useSelector(state => state);
  console.log(entryID, treeID, location, treeType, photoURI);
  const name = treeIDMap[treeID].com_name;
  const sciName = treeIDMap[treeID].sci_name;
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
          <View style={reviewStyles.body}>
            <Text style={reviewStyles.subtitle}>Image</Text>
          </View>
          <Image source={{ uri: photoURI }}></Image>
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
          <Text style={reviewStyles.subtitle}>Location</Text>
          <View style={reviewStyles.body}>
            <Text style={[styles.body, reviewStyles.body]}>
              {location.address}
            </Text>
          </View>
          <Text style={reviewStyles.subtitle}>Type</Text>
          <View style={reviewStyles.body}>
            <Text style={[styles.body, reviewStyles.body]}>{treeType}</Text>
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
});

export default Review;
