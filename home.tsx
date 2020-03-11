"use strict";
import React, { useState, useCallback } from "react";
import { Text, View, Switch } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import Header from "./header";

const Home = () => {
  const [useIP, setUseIP] = useState(null);
  const updateIPSettings = async value => {
    try {
      console.log(useIP);
      setUseIP(value);
      await AsyncStorage.setItem("IPSettings", value.toString());
    } catch (e) {
      console.log(e);
      // saving error
    }
  };
  const getData = async () => {
    try {
      const ipSettings = await AsyncStorage.getItem("IPSettings");
      setUseIP(ipSettings == "true");
      console.log(ipSettings);
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  useCallback(() => getData(), []);
  // getData();
  return (
    <Header
      header={<Text style={[styles.title, homeStyles.title]}>Home</Text>}
      content={
        <View>
          <Switch
            onValueChange={value => updateIPSettings(value)}
            value={useIP}
          ></Switch>
          <Text style={styles.heading}>IP!</Text>
          <Switch onValueChange={getData}></Switch>
        </View>
      }
    />
  );
};
const homeStyles = EStyleSheet.create({
  heading: {
    color: "#fff",
  },
  title: {
    color: "#fff",
  },
  header: {
    borderBottomColor: "rgba(140,140,140,0.3)",
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 10,
  },
  content: {
    flex: 1,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowColor: "black",
    marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    width: "100%",
    padding: 10,
    marginBottom: 125,
  },
});

export default Home;
