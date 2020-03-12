"use strict";
import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ImageStyle,
  ViewStyle,
} from "react-native";
import styles from "./styles";
import Card from "./card";
import EStyleSheet from "react-native-extended-stylesheet";

const Choice = props => {
  return (
    <Card height={props.height}>
      <TouchableHighlight
        onPress={props.onPress}
        style={choiceStyles.touchableStyles}
        underlayColor={"rgba(140, 140, 140, 0.25)"}
      >
        <View style={choiceStyles.container}>
          <Image source={props.image} style={choiceStyles.image}></Image>
          <View style={choiceStyles.textContainer}>
            <Text style={[styles.heading, choiceStyles.title]}>
              {props.choice}
            </Text>
            <Text style={styles.body}>{props.text}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Card>
  );
};

const choiceStyles = EStyleSheet.create({
  title: {
    marginBottom: 12,
  },
  image: {
    width: "30%",
    height: "100%",
    resizeMode: "contain",
    marginLeft: 16,
  } as ImageStyle,
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  } as ViewStyle,
  textContainer: {
    display: "flex",
    flexShrink: 1,
    width: "70%",
    marginLeft: 10,
    marginRight: 20,
    justifyContent: "center",
  } as ViewStyle,
  touchableStyles: {
    height: "100%",
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default Choice;
