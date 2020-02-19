"use strict";
import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";

const Header = props => {
  return (
    <SafeAreaView style={[styles.centered, headerStyles.root]}>
      <View style={headerStyles.header}>{props.header}</View>
      <View style={[styles.centered, headerStyles.body]}>
        <View style={[styles.container, headerStyles.container]}>
          {props.content}
        </View>
      </View>
    </SafeAreaView>
  );
};
const headerStyles = EStyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "$dgreen6",
  },
  body: {
    backgroundColor: "#fff",
  },
  container: {
    width: "90%",
    height: "100%",
    marginTop: -35,
    alignItems: "center",
  },
  header: {
    width: "90%",
    marginTop: 40,
    paddingBottom: 50,
  },
});

export default Header;
