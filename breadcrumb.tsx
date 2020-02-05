"use strict";
import React from "react";
import { Text, View, TouchableHighlight, TextStyle } from "react-native";
import styles from "./styles";
import Card from "./card";

const Breadcrumb = props => {
  const elementsToRender = [];
  if (props.crumb.length === 0) {
    elementsToRender.push(
      <Text style={breadcrumbStyles.container} key={0}>
        All Southern Ontario Trees
      </Text>
    );
  } else {
    for (let i in props.crumb) {
      if (+i !== 0) {
        elementsToRender.push(<Text key={`${i}arrow`}>{" > "}</Text>);
      }
      elementsToRender.push(
        <Text
          onPress={() => {
            props.onPress(props.crumb.slice(0, i));
          }}
          key={i}
          style={{ color: "blue", textAlign: "center" }}
        >
          {props.crumb[i]}
        </Text>
      );
    }
  }
  return (
    <Text style={breadcrumbStyles.container}>
      {elementsToRender.map(element => element)}
    </Text>
  );
};

const breadcrumbStyles = {
  touchableStyles: {
    height: "100%",
    width: "100%",
    paddingVertical: 20,
  },
  container: {
    marginTop: 15,
  },
};

export default Breadcrumb;
