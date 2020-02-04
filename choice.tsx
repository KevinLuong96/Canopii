"use strict";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import styles from "./styles";

const Choice = props => {
  // const [choices, setChoices] = useState([]);
  // return <View style={styles.container}></View>;
  return <Button onPress={() => props.onClick} title={props.message}></Button>;
};

export default Choice;
