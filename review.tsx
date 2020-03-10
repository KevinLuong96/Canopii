"use strict";
import React, { useState } from "react";
import { Text } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";

const Review = ({ navigation }) => {
  const { entryID, treeID, location, treeName, treeType } = useSelector(
    state => state
  );
  console.log(entryID, treeID, location, treeName, treeType);

  return (
    <Header
      header={
        <>
          <Text style={[styles.title, reviewStyles.title]}>Tree Type</Text>
          <Text style={[styles.heading, reviewStyles.heading]}>
            Please select the correct tree type.
          </Text>
        </>
      }
      content={<Text>HI</Text>}
    />
  );
};
const reviewStyles = EStyleSheet.create({
  heading: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
});

export default Review;
