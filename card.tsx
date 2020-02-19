"use strict";
import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={[props.style, cardStyles.card]}>{props.children}</View>;
};

const cardStyles = {
  card: {
    height: "20%",
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowColor: "black",
    marginVertical: 10,
    width: "100%",
  },
};

export default Card;
