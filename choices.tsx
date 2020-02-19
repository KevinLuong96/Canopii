"use strict";
import React, { useState, useEffect } from "react";
import { View, Text, Animated, SafeAreaView } from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";
import Breadcrumb from "./breadcrumb";
import Icon from "react-native-vector-icons/AntDesign";
import EStyleSheet from "react-native-extended-stylesheet";
import Card from "./card";

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
    <SafeAreaView style={[styles.centered, choiceStyles.root]}>
      <View style={choiceStyles.header}>
        <Breadcrumb crumb={choices} onPress={setChoices} />
        <Text style={[styles.title, choiceStyles.title]}>Identify Species</Text>
        <Text style={[styles.heading, choiceStyles.heading]}>
          {reachedLeaves
            ? "Select the correct species"
            : "sWhich feature best describes your tree?"}
        </Text>
      </View>
      <View style={[styles.centered, choiceStyles.body]}>
        <View style={[styles.container, choiceStyles.container]}>
          {/* <View style={choiceStyles.container}> */}

          <Animated.View
            style={{
              height: "100%",
              transform: [{ translateX: slideValue }],
            }}
          >
            {!reachedLeaves &&
              choicesToRender.map(choice => (
                <Choice
                  key={choice}
                  choice={choice}
                  image={descriptions[choice].image}
                  text={descriptions[choice].text}
                  onPress={() => animate(choice)}
                ></Choice>
              ))}
            {reachedLeaves &&
              choicesToRender.map(leaf => (
                <Card key={leaf}>
                  <Text>{leaf}</Text>
                </Card>
              ))}
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const choiceStyles = EStyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "$dgreen6",
  },
  body: {
    backgroundColor: "#fff",
  },
  container: {
    width: "90%",
    height: "100%",
    marginTop: -35,
    alignItems: "center",
  },
  heading: {
    // width: "70%",
    // textAlign: "center",
    // fontSize: 20,
    color: "#fff",
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
  header: {
    width: "90%",
    // height: 250,
    // backgroundColor: "$dgreen6",
    marginTop: 40,
    paddingBottom: 50,
    // marginBottom: -50,
    // marginBottom: -50,
  },
});

export default Choices;
