"use strict";
import { Text, StatusBar, View } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import React from "react";
import Choice from "./choice";
import { descriptions } from "./trees";

const TagTree = ({ navigation }) => {
  return (
    <View style={[styles.centered, treeStyles.container]}>
      <StatusBar barStyle="light-content"> </StatusBar>
      <View style={treeStyles.content}>
        <Text style={[styles.title, treeStyles.title]}>Tag a Tree</Text>
        <Text style={[styles.heading, treeStyles.heading]}>
          What type of tree are you tagging?
        </Text>
        <Choice
          choice="Coniferous"
          tagTree
          image={descriptions["Coniferous"].image}
          height={150}
          text={descriptions["Coniferous"].text}
          onPress={() => navigation.push("Camera", { treeType: "Coniferous" })}
        ></Choice>
        <Choice
          choice="Deciduous"
          tagTree
          image={descriptions["Deciduous"].image}
          height={150}
          text={descriptions["Deciduous"].text}
          onPress={() => navigation.push("Camera", { treeType: "Deciduous" })}
        ></Choice>
      </View>
    </View>
  );
};

const treeStyles = EStyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "$dgreen6",
  },
  content: {
    width: "90%",
    height: "100%",
    marginTop: 100,
    marginBottom: 25,
  },
  title: {
    color: "white",
    marginBottom: 10,
  },
  heading: {
    color: "white",
    marginBottom: 15,
  },
});

export default TagTree;
