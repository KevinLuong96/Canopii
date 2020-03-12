"use strict";
import React from "react";
import { useDispatch } from "react-redux";
import Choice from "./choice";
import leaves from "./leaves";
import treeIDMap from "./dec_dat";
import conIDMap from "./con_dat";
import { setTree } from "./actions";

const Leaf = ({ treeID, choices, navigate }) => {
  const dispatch = useDispatch();

  const sciName = treeIDMap?.[treeID]?.sciName;
  const name = treeIDMap?.[treeID]?.sciName;
  const coniferous = conIDMap?.[treeID];
  if (coniferous) {
    console.log(coniferous?.sciName, treeID);
    dispatch(setTree(coniferous?.sciName, treeID));
    navigate("Location");
  }
  const lab = sciName && leaves[sciName.replace(/\s/g, "_").toLowerCase()]?.lab;

  return lab && sciName ? (
    <Choice
      key={sciName}
      choice={name}
      text={sciName}
      height={100}
      image={lab ?? ""}
      onPress={() => {
        navigate("Tree", {
          name: name,
          sciName: sciName,
          choices: choices,
          ID: treeID,
        });
      }}
    />
  ) : null;
};

export default Leaf;
