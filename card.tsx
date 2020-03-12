"use strict";
import React from "react";
import { View } from "react-native";

const Card = props => {
  return (
    <View style={[props.style, cardStyles.card, { height: props.height }]}>
      {props.children}
    </View>
  );
};

const cardStyles = {
  card: {
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowColor: "black",
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
};

export default Card;
