"use strict";
import React from "react";
import { Text, Dimensions, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const Thank = ({ navigate }) => {
  return (
    <LinearGradient
      colors={["#65B876", "#87DC65"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        position: "absolute",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <View style={[styles.container, thankStyles.container]}>
        <Text style={[styles.title, thankStyles.title]}>Thank You!</Text>
        <Text style={[styles.heading, thankStyles.heading]}>
          We have just added your tree to Kitchener's tree inventory! Thank you
          for helping us fight climate change. Fight together, win together!
        </Text>
      </View>
    </LinearGradient>
  );
  // return <Text> Thank</Text>;
};

const thankStyles = EStyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    paddingBottom: 12,
  },
  heading: {
    color: "#fff",
    paddingHorizontal: 12,
  },
});

export default Thank;
