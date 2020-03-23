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
  const titleStyles = [choiceStyles.textContainer];
  props.tagTree && titleStyles.push({ marginLeft: 8 });
  !props.image && titleStyles.push({ width: "100%" });

  return (
    <Card height={props.height}>
      <TouchableHighlight
        onPress={props.onPress}
        style={choiceStyles.touchableStyles}
        underlayColor={"rgba(140, 140, 140, 0.25)"}
      >
        <View style={choiceStyles.container}>
          {props.image && (
            <Image
              source={props.image}
              style={
                props.tagTree
                  ? [choiceStyles.image, { marginLeft: 16 }]
                  : [choiceStyles.image]
              }
            ></Image>
          )}
          <View style={titleStyles}>
            <Text
              style={
                props.isSpecies
                  ? [styles.heading, choiceStyles.title, { marginBottom: 8 }]
                  : [styles.heading, choiceStyles.title]
              }
            >
              {props.choice}
            </Text>
            {props.text != "" && (
              <Text
                style={
                  props.isSpecies
                    ? [styles.body, { color: "#8c8c8c" }]
                    : [styles.body]
                }
              >
                {props.text}
              </Text>
            )}
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
    marginLeft: 8,
  } as ImageStyle,
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  } as ViewStyle,
  text: {
    // color: species ? "grey" : default
  },
  textContainer: {
    display: "flex",
    flexShrink: 1,
    width: "70%",
    marginLeft: 4,
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
