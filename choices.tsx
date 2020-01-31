"use strict";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Choice from "./choice";

const Choices = () => {
  const [choices, setChoices] = useState([]);
  return (
    <View style={styles.container}>
      {/* <Choice message={"test"} onClick={() => {}}></Choice> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  }
});

export default Choices;
