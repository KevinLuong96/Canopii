"use strict";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

const HeaderLeftButton = props => {
  return (
    <Icon.Button
      name="arrowleft"
      size={24}
      color={props.color}
      onPress={() => props.onPress()}
      backgroundColor="transparent"
    />
  );
};

export default HeaderLeftButton;
