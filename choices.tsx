"use strict";
import React, { useState, useEffect } from "react";
import { Text, Animated, TouchableHighlight, View } from "react-native";
import styles from "./styles";
import Choice from "./choice";
import { decision, descriptions } from "./trees";
import leaves from "./leaves";
import Breadcrumb from "./breadcrumb";
import EStyleSheet from "react-native-extended-stylesheet";
import Header from "./header";
import HeaderLeftButton from "./headerLeftButton";
import { useSelector } from "react-redux";
import Leaf from "./leaf";
import ConiferousLeaf from "./coniferousLeaf";

const Choices = ({ route, navigation }) => {
  const { treeType, leaves } = route.params;
  const [choices, setChoices] = useState([treeType]);
  // const [question, setQuestion] = useState("");
  const predictedTrees = useSelector(state => state.predictedTrees);
  let reachedLeaves = leaves ? true : false;
  let question = "";

  navigation.setOptions({
    headerStyle: {
      backgroundColor: "#65B876",
    },
    headerLeft: navigation => (
      <HeaderLeftButton
        color="#fff"
        onPress={() => {
          choices.length === 1
            ? navigation.onPress()
            : setChoices(choices.slice(0, choices.length - 1));
        }}
        underlayColor="rgba(140, 140, 140, 0.25)"
      />
    ),
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
  if (leaves) {
    for (let leaf of leaves) {
      choicesToRender.push({ ID: leaf.ID });
    }
  } else if (temp.hasOwnProperty("trees")) {
    choicesToRender = temp["trees"];
    reachedLeaves = true;
  } else {
    for (let key in temp) {
      if (key == "Question") {
        // setQuestion(key);
        question = temp[key];
      } else {
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
    <>
      <View style={{ width: "100%", height: "100%", marginBottom: 200 }}>
        <Header
          header={
            <>
              <Breadcrumb crumb={choices} onPress={setChoices} />
              <Text style={[styles.title, choiceStyles.title]}>
                Identify Species
              </Text>
              <Text style={[styles.heading, choiceStyles.heading]}>
                {question && question}
                {!question &&
                  (reachedLeaves
                    ? "Click to view more information about each species."
                    : "Which feature best describes your tree?")}
              </Text>
            </>
          }
          content={
            <View
              style={{
                marginBottom: 180,
                marginHorizontal: "5%",
              }}
            >
              <Animated.ScrollView
                style={{
                  display: "flex",
                  width: "100%",
                  marginHorizontal: "10%",
                  flex: 1,
                  transform: [{ translateX: slideValue }],
                  paddingBottom: 10,
                  backgroundColor: "transparent",
                }}
              >
                {!reachedLeaves &&
                  choicesToRender.map(choice => (
                    <Choice
                      key={choice}
                      choice={choice}
                      height={descriptions?.[choice]?.image ? 150 : 80}
                      image={descriptions?.[choice]?.image}
                      text={descriptions?.[choice]?.text}
                      onPress={() => animate(choice)}
                    ></Choice>
                  ))}
                {reachedLeaves &&
                  choicesToRender.map(leaf => {
                    if (choices[0] == "Coniferous") {
                      return (
                        <ConiferousLeaf
                          treeID={leaf.ID}
                          key={leaf.ID}
                          choices={choices}
                          navigate={(location, data) =>
                            navigation.navigate(location, data)
                          }
                        ></ConiferousLeaf>
                      );
                    } else {
                      return (
                        <Leaf
                          treeID={leaf.ID}
                          choices={choices}
                          key={leaf.ID}
                          navigate={(location, data) =>
                            navigation.navigate(location, data)
                          }
                        ></Leaf>
                      );
                    }
                  })}
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("Search");
                  }}
                  style={{ width: "100%", marginTop: 20, marginBottom: 10 }}
                  underlayColor={"rgba(140,140,140,0.6)"}
                >
                  <Text style={[styles.body, choiceStyles.search]}>
                    {reachedLeaves
                      ? "Search for species instead"
                      : "Search for tree species"}
                  </Text>
                </TouchableHighlight>
              </Animated.ScrollView>
            </View>
          }
        />
      </View>
    </>
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
  search: {
    color: "$dgreen6",
    textAlign: "center",
  },
});

export default Choices;
