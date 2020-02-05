"use strict";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
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

    for (let choice of choices) {
      console.log(temp);
      temp = temp[choice];
    }

    // reached the leaves
    if (temp.hasOwnProperty("trees")) {
      // do something
      console.log("hi");
    } else {
      for (let key in temp) {
        choicesToRender.push(key);
      }
    }
  }

  return (
    <View style={[styles.container, choiceStyles.container]}>
      {choicesToRender.map(choice => (
        <Choice
          key={choice}
          choice={choice}
          image={descriptions[choice].image}
          text={descriptions[choice].text}
          onPress={() => {
            setChoices([...choices, choice]);
          }}
        ></Choice>
      ))}
    </View>
  );
};
const choiceStyles = StyleSheet.create({
  container: {
    width: "90%",
  },
});

export default Choices;
