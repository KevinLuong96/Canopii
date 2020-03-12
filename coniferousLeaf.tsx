"use strict";
import React from "react";
import { useDispatch } from "react-redux";
import Choice from "./choice";
import leaves from "./leaves";
import treeIDMap from "./dec_dat";
import conIDMap from "./con_dat";
import { setTree } from "./actions";

const ConiferousLeaf = ({ treeID, choices, navigate }) => {
  const dispatch = useDispatch();

  const sciName = conIDMap?.[treeID]?.sciName;
  const name = conIDMap?.[treeID]?.sciName;

  return (
    <Choice
      key={sciName}
      choice={name}
      text={sciName}
      height={100}
      image={/*TODO: ADD IMAGE*/ ""}
      onPress={() => {
        dispatch(setTree(sciName, treeID));
        navigate("Location");
      }}
    />
  );
};

export default ConiferousLeaf;
