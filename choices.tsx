"use strict";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";

const Choices = () => {
  const [choices, setChoices] = useState([]);
  return (
    <View style={styles.centered}>
      <View style={[styles.container, choiceStyles.container]}>
        <Choice message={"test"} onClick={() => {}}></Choice>
      </View>
    </View>
  );
};
const choiceStyles = StyleSheet.create({
  container: {
    backgroundColor: "red"
  }
});

export default Choices;
