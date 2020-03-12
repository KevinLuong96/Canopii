"use strict";
import React, { FunctionComponent } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";

interface HeaderProps {
  header: Element;
  content: Element;
  fullWidth?: boolean;
}
const Header = (props: HeaderProps) => {
  const contentStyles = props.fullWidth
    ? [styles.container, headerStyles.container, { width: "100%" }]
    : [styles.container, headerStyles.container];
  return (
    <SafeAreaView style={[styles.centered, headerStyles.root]}>
      <View style={headerStyles.header}>{props.header}</View>
      <View style={[styles.centered, headerStyles.body]}>
        <View style={contentStyles}>{props.content}</View>
      </View>
    </SafeAreaView>
  );
};
const headerStyles = EStyleSheet.create({
  root: {
    display: "flex",
    flex: 1,
    backgroundColor: "$dgreen6",
  },
  body: {
    backgroundColor: "$lightGray",
  },
  container: {
    width: "90%",
    height: "100%",
    marginTop: -35,
    alignItems: "center",
  },
  header: {
    width: "90%",
    marginTop: 60,
    paddingBottom: 50,
  },
});

export default Header;
