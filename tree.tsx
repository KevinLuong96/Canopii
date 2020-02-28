"use strict";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import HeaderLeftButton from "./headerLeftButton";
import { TouchableHighlight } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { setTreeName } from "./actions";

const Tree = ({ navigation, route }) => {
  const { sciName, name, choices } = route.params;
  const dispatch = useDispatch();

  navigation.setOptions({
    headerLeft: navigation => (
      <HeaderLeftButton color="#000" onPress={navigation.onPress} />
    ),
  });

  return (
    <View style={[styles.centered, treeStyles.root]}>
      <StatusBar barStyle="light-content"></StatusBar>

      <View style={[styles.centered, { width: "90%" }]}>
        <View style={[styles.container, treeStyles.header]}>
          {/*TODO: REPLACE THIS WITH AN IAMGE!!!*/}
          <View style={{ width: "30%", backgroundColor: "blue" }}></View>
          <View style={treeStyles.headerText}>
            <Text style={[styles.heading, treeStyles.name]}>{name}</Text>
            <Text style={[styles.body, treeStyles.sciName]}>{sciName}</Text>
          </View>
        </View>
        <View style={[styles.container, treeStyles.container]}>
          {choices.map(choice => (
            <Text style={styles.body} key={choice}>
              {choice}
            </Text>
          ))}
        </View>
        <View style={[styles.container, treeStyles.container]}>
          <View
            style={{ height: 200, width: "100%", backgroundColor: "blue" }}
          ></View>
        </View>
        <View style={treeStyles.button}>
          <TouchableHighlight
            style={treeStyles.touchable}
            onPress={() => dispatch(setTreeName(sciName))}
          >
            <Text
              style={[styles.body, { color: "white", textAlign: "center" }]}
            >
              This is the correct tree
            </Text>
          </TouchableHighlight>
        </View>
        <View style={treeStyles.button}>
          <TouchableHighlight onPress={navigation.goBack}>
            <Text style={[styles.body, treeStyles.cancel]}>
              This is the correct tree
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const treeStyles = EStyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
  },
  button: {
    width: "90%",
    height: 50,
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  cancel: {
    color: "$dgreen6",
    textAlign: "center",
  },
  header: { flexDirection: "row" },
  headerText: {
    display: "flex",
    width: "70%",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 10,
  },
  root: {
    marginTop: 90,
  },
  name: {
    marginBottom: 10,
  },
  sciName: {
    color: "$gray7",
  },
  touchable: {
    backgroundColor: "$dgreen6",
    height: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default Tree;
