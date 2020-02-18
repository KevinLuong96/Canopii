"use strict";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  SafeAreaView,
  StatusBar,
} from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";
import Breadcrumb from "./breadcrumb";

const Choices = ({ navigation }) => {
  const [choices, setChoices] = useState([]);

  let slideValue;
  slideValue = new Animated.Value(choices.length === 0 ? 0 : 1000);

  useEffect(() => {
    Animated.timing(slideValue, {
      toValue: 0,
      duration: 200,
    }).start();
  }, [choices]);

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
        <SafeAreaView style={[styles.container, choiceStyles.container]}>
          <Text style={choiceStyles.heading}>
            Which picture best fits your leaf?
          </Text>
          {temp["trees"].map(tree => (
            <Text key={tree}>{tree}</Text>
          ))}
        </SafeAreaView>
      );
    } else {
      for (let key in temp) {
        choicesToRender.push(key);
      }
    }
  }

  const animate = choice => {
    Animated.timing(slideValue, {
      toValue: -1000,
      duration: 25,
    }).start(() => {
      setChoices([...choices, choice]);
    });
  };

  return (
    <SafeAreaView style={[styles.all, styles.centered]}>
      <View style={[styles.container, choiceStyles.container]}>
        {/* <View style={choiceStyles.container}> */}
        <Breadcrumb crumb={choices} onPress={setChoices} />
        <Text style={choiceStyles.heading}>
          Which of the following best describes your tree?
        </Text>
        <Animated.View
          style={{
            height: "100%",
            transform: [{ translateX: slideValue }],
          }}
        >
          {choicesToRender.map(choice => (
            <Choice
              key={choice}
              choice={choice}
              image={descriptions[choice].image}
              text={descriptions[choice].text}
              onPress={() => animate(choice)}
            ></Choice>
          ))}
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};
const choiceStyles = StyleSheet.create({
  container: {
    width: "90%",
    height: "100%",
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
