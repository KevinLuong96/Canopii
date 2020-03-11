"use strict";
import React from "react";
import Choice from "./choice";
import leaves from "./leaves";
import treeIDMap from "./dec_dat";

const Leaf = ({ treeID, choices, navigate }) => {
  const { sciName, name } = treeIDMap?.[treeID];
  const lab = leaves[sciName.replace(/\s/g, "_").toLowerCase()]?.lab;
  return lab && sciName ? (
    <Choice
      key={sciName}
      choice={name}
      text={sciName}
      height={100}
      image={lab ?? ""}
      onPress={() =>
        navigate("Tree", {
          name: name,
          sciName: sciName,
          choices: choices,
          ID: treeID,
        })
      }
    />
  ) : null;
};

export default Leaf;
