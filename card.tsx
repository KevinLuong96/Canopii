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
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    width: "95%",
  },
};

export default Card;
