"use strict";
import React, { useState } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";

const Choices = () => {
  const [choices, setChoices] = useState([]);

  const choicesToRender = [];
  if (choices == []) {
    for (let key in choices) {
      choicesToRender.push(key);
    }
  } else {
    let temp: Object = decision;
    for (let choice in choices) {
      temp = temp[choice];
    }

    // reached the leaves
    if (temp.hasOwnProperty("trees")) {
      // do something
    } else {
      for (let key in temp) {
        choicesToRender.push(key);
      }
    }
  }

  return (
    <View style={styles.centered}>
      <View style={[styles.container, choiceStyles.container]}>
        {choicesToRender.map(choice => (
          <Choice
            key={choice}
            choice={choice}
            text={descriptions[choice].text}
            onClick={() => setChoices([...choices, choice])}
          ></Choice>
        ))}
      </View>
    </View>
  );
};
const choiceStyles = StyleSheet.create({
  container: {
    // justifyContent: "space-evenly"
    // backgroundColor: "red"
  },
});

export default Choices;
