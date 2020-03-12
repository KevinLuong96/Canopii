"use strict";
import React, { useState, useCallback, useEffect } from "react";
import { Text, View, Slider, Switch } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/Entypo";
import { TouchableHighlight } from "react-native-gesture-handler";

const Settings = ({ navigation }) => {
  const [manualIdentification, setManualIdentification] = useState(true);
  const updateManualSettings = async value => {
    try {
      setManualIdentification(value);
      await AsyncStorage.setItem("manualIdentification", value.toString());
    } catch (e) {
      console.log(e);
      // saving error
    }
  };
  const getManualSettings = async () => {
    try {
      const ipSettings = await AsyncStorage.getItem("manualIdentification");
      setManualIdentification(ipSettings == "true");
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  useEffect(() => {
    getManualSettings();
  }, []);

  return (
    <View style={[styles.container, settingStyles.container]}>
      <Text style={[styles.title, settingStyles.title]}>Settings</Text>
      <View style={[styles.container, settingStyles.contentContainer]}>
        <Text style={[styles.heading, settingStyles.leftPadded]}>
          Manual Identification
        </Text>
        <View style={settingStyles.rightPadded}>
          <Switch
            onValueChange={value => updateManualSettings(value)}
            value={manualIdentification}
            trackColor={{ false: "rgb(140,140,140)", true: "#65B876" }}
          ></Switch>
        </View>
      </View>
      {/* <TouchableHighlight
        underlayColor="rgba(140,140,140,0.08)"
        onPress={() => navigation.navigate("FAQ")}
      >
        <View style={[styles.container, settingStyles.contentContainer]}>
          <Text style={[styles.heading, settingStyles.leftPadded]}>
            Location
          </Text>
          <Icon
              name="chevron-thin-right"
              size={24}
              color={"#8c8c8c"}
              style={settingStyles.rightPadded}
            />
        </View>
      </TouchableHighlight> */}
      <TouchableHighlight
        underlayColor="rgba(140,140,140,0.08)"
        onPress={() => navigation.navigate("FAQ")}
      >
        <View style={[styles.container, settingStyles.contentContainer]}>
          <Text style={[styles.heading, settingStyles.leftPadded]}>
            Frequently Asked Questions
          </Text>
          <Icon
            name="chevron-thin-right"
            size={24}
            color={"#8c8c8c"}
            style={settingStyles.rightPadded}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};
const settingStyles = EStyleSheet.create({
  container: {
    display: "flex",
    paddingTop: 100,
  },
  title: {
    marginBottom: 20,
    paddingLeft: "5%",
  },
  leftPadded: {
    paddingHorizontal: "5%",
  },
  rightPadded: {
    paddingRight: "5%",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "rgba(140,140,140,0.25)",
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
});

export default Settings;
