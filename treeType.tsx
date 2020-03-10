"use strict";
import React, { useState } from "react";
import { Text, View, TouchableHighlight } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import { useDispatch } from "react-redux";
import Header from "./header";
import Card from "./card";
import { setTreeType } from "./actions";

const TreeType = ({ navigation }) => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  return (
    <Header
      header={
        <>
          <Text style={[styles.title, treeTypeStyles.title]}>Tree Type</Text>
          <Text style={[styles.heading, treeTypeStyles.heading]}>
            Please select the correct tree type.
          </Text>
        </>
      }
      content={
        <>
          <Card>
            <TouchableHighlight
              onPress={() => setSelected("RESIDENTIAL")}
              underlayColor="rgba(140,140,140,0.4)"
              style={{ borderRadius: 10 }}
            >
              <View
                style={
                  selected === "RESIDENTIAL"
                    ? [
                        treeTypeStyles.cardContainer,
                        { backgroundColor: "rgba(140,140,140,0.4)" },
                      ]
                    : [treeTypeStyles.cardContainer]
                }
              >
                <Text style={[styles.heading, treeTypeStyles.cardText]}>
                  Residential
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
          <Card>
            <TouchableHighlight
              onPress={() => setSelected("PARK")}
              underlayColor="rgba(140,140,140,0.4)"
              style={{ borderRadius: 10 }}
            >
              <View
                style={
                  selected === "PARK"
                    ? [
                        treeTypeStyles.cardContainer,
                        { backgroundColor: "rgba(140,140,140,0.4)" },
                      ]
                    : [treeTypeStyles.cardContainer]
                }
              >
                <Text style={[styles.heading, treeTypeStyles.cardText]}>
                  Park
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
          <Card>
            <TouchableHighlight
              onPress={() => setSelected("STREET")}
              underlayColor="rgba(140,140,140,0.4)"
              style={{ borderRadius: 10 }}
            >
              <View
                style={
                  selected === "STREET"
                    ? [
                        treeTypeStyles.cardContainer,
                        { backgroundColor: "rgba(140,140,140,0.4)" },
                      ]
                    : [treeTypeStyles.cardContainer]
                }
              >
                <Text style={[styles.heading, treeTypeStyles.cardText]}>
                  Street
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
          <Card>
            <TouchableHighlight
              onPress={() => setSelected("CEMETERY")}
              underlayColor="rgba(140,140,140,0.4)"
              style={{ borderRadius: 10 }}
            >
              <View
                style={
                  selected === "CEMETERY"
                    ? [
                        treeTypeStyles.cardContainer,
                        { backgroundColor: "rgba(140,140,140,0.4)" },
                      ]
                    : [treeTypeStyles.cardContainer]
                }
              >
                <Text style={[styles.heading, treeTypeStyles.cardText]}>
                  Cemetery
                </Text>
              </View>
            </TouchableHighlight>
          </Card>
          <View style={treeTypeStyles.button}>
            <TouchableHighlight
              style={
                selected != null
                  ? [treeTypeStyles.touchable]
                  : [treeTypeStyles.touchable, { backgroundColor: "#8C8C8C" }]
              }
              onPress={() => {
                if (selected != null) {
                  dispatch(setTreeType(selected));
                  navigation.navigate("Review");
                }
              }}
            >
              <Text
                style={[styles.body, { color: "white", textAlign: "center" }]}
              >
                {selected != null
                  ? "This is the right tree type"
                  : "Please select a tree type"}
              </Text>
            </TouchableHighlight>
          </View>
        </>
      }
    />
  );
};
const treeTypeStyles = EStyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    height: 60,
    borderRadius: 10,
  },
  heading: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
  button: {
    width: "95%",
    left: "2.5%",
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 220,
    zIndex: 1,
  },
  touchable: {
    backgroundColor: "$dgreen6",
    width: "100%",
    height: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default TreeType;
