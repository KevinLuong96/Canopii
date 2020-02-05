"use strict";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import styles from "./styles";

const Choice = props => {
  // const [choices, setChoices] = useState([]);
  console.log(props.text);

  return (
    <View style={choiceStyles.choice}>
      {/* <img src="./images/"></img> */}
      <View style={choiceStyles.textContainer}>
        <Text style={choiceStyles.title}>{props.choice}</Text>
        <Text style={choiceStyles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

const choiceStyles = {
  choice: {
    height: "20%",
    backgroundColor: "white",
    borderRadius: 5,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowColor: "black",
    marginVertical: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
  },
  textContainer: {
    paddingVertical: 10,
  },
};

export default Choice;
