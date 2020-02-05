"use strict";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Card from "./card";

const Choice = props => {
  // const [choices, setChoices] = useState([]);
  return (
    <Card>
      <TouchableHighlight
        onPress={props.onPress}
        style={choiceStyles.touchableStyles}
      >
        {/* <img src="./images/"></img> */}
        <View style={choiceStyles.textContainer}>
          <Text style={choiceStyles.title}>{props.choice}</Text>
          <Text style={choiceStyles.text}>{props.text}</Text>
        </View>
      </TouchableHighlight>
    </Card>
  );
};

const choiceStyles = {
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
  touchableStyles: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
};

export default Choice;
