"use strict";
import React, { useState, useEffect } from "react";
import { Text, Animated } from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";
import Breadcrumb from "./breadcrumb";
import Icon from "react-native-vector-icons/AntDesign";
import EStyleSheet from "react-native-extended-stylesheet";
import Card from "./card";
import Header from "./header";
import { ScrollView } from "react-native-gesture-handler";

const Choices = ({ route, navigation }) => {
  const { treeType } = route.params;
  const [choices, setChoices] = useState([treeType]);
  let reachedLeaves = false;

  navigation.setOptions({
    // headerTransparent: true,
    headerStyle: {
      backgroundColor: "#65B876",
    },
    headerLeft: navigation => {
      return (
        navigation.canGoBack && (
          <Icon.Button
            name="arrowleft"
            size={24}
            color="#fff"
            backgroundColor="transparent"
            onPress={() => {
              console.log(choices);
              choices.length === 1
                ? navigation.onPress()
                : setChoices(choices.slice(0, choices.length - 1));
            }}
          />
        )
      );
    },
  });

  let slideValue;
  slideValue = new Animated.Value(choices.length === 0 ? 0 : 1000);

  useEffect(() => {
    Animated.timing(slideValue, {
      toValue: 0,
      duration: 200,
    }).start();
  }, [choices]);

  let choicesToRender = [];
  let temp: Object = decision;

  for (let choice of choices) {
    temp = temp[choice];
  }

  // reached the leaves
  if (temp.hasOwnProperty("trees")) {
    choicesToRender = temp["trees"];
    reachedLeaves = true;
  } else {
    for (let key in temp) {
      choicesToRender.push(key);
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
    <Header
      header={
        <>
          <Breadcrumb crumb={choices} onPress={setChoices} />
          <Text style={[styles.title, choiceStyles.title]}>
            Identify Species
          </Text>
          <Text style={[styles.heading, choiceStyles.heading]}>
            {reachedLeaves
              ? "Select the correct species"
              : "Which feature best describes your tree?"}
          </Text>
        </>
      }
      content={
        <Animated.ScrollView
          style={{
            height: "100%",
            transform: [{ translateX: slideValue }],
            width: "100%",
          }}
        >
          {!reachedLeaves &&
            choicesToRender.map(choice => (
              <Choice
                key={choice}
                choice={choice}
                height={150}
                image={descriptions[choice].image}
                text={descriptions[choice].text}
                onPress={() => animate(choice)}
              ></Choice>
            ))}
          {reachedLeaves && console.log(choicesToRender)}
          {reachedLeaves &&
            choicesToRender.map(leaf => (
              <Choice
                key={leaf.sciName}
                choice={leaf.name}
                text={leaf.sciName}
                height={100}
                image={descriptions["Heart Base"].image}
                onPress={() => {
                  console.log("hi");
                }}
              />
            ))}
        </Animated.ScrollView>
      }
    />
  );
};
const choiceStyles = EStyleSheet.create({
  heading: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
});

export default Choices;
