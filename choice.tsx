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

const Choice = props => {
  return (
    <Card>
      <TouchableHighlight
        onPress={props.onPress}
        style={choiceStyles.touchableStyles}
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

const choiceStyles = {
  title: {
    marginBottom: 15,
  },
  image: {
    width: "30%",
    height: "100%",
    resizeMode: "cover",
  } as ImageStyle,
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  } as ViewStyle,
  textContainer: {
    width: "70%",
    marginLeft: 10,
  },
  touchableStyles: {
    height: "100%",
    width: "100%",
    paddingVertical: 20,
  },
};

export default Choice;
