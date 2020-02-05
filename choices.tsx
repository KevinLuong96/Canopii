"use strict";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";
import Breadcrumb from "./breadcrumb";

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
      temp = temp[choice];
    }

    // reached the leaves
    if (temp.hasOwnProperty("trees")) {
      return (
        <View style={[styles.container, choiceStyles.container]}>
          <Text style={choiceStyles.heading}>
            Which picture best fits your leaf?
          </Text>
          {temp["trees"].map(tree => (
            <Text key={tree}>{tree}</Text>
          ))}
        </View>
      );
    } else {
      for (let key in temp) {
        choicesToRender.push(key);
      }
    }
  }
  console.log(descriptions["Opposite Branching"].image);

  return (
    <View style={[styles.container, choiceStyles.container]}>
      <Breadcrumb crumb={choices} onPress={setChoices} />
      <Text style={choiceStyles.heading}>
        Which of the following best describes your tree?
      </Text>
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
    alignItems: "center",
  },
  heading: {
    width: "70%",
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Choices;
