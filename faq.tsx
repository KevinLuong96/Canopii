"use strict";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import Header from "./header";

const FAQ = () => {
  return (
    <Header
      header={
        <Text style={[styles.title, faqStyles.title]}>
          Frequently Asked Questions
        </Text>
      }
      content={<View style={[styles.container]}></View>}
    />
  );
};
const faqStyles = EStyleSheet.create({
  heading: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
});

export default FAQ;
