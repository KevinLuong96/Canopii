"use strict";
import React, { useState, useCallback, useEffect } from "react";
import {
  Text,
  View,
  Switch,
  Dimensions,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";
import EStyleSheet from "react-native-extended-stylesheet";
import DeviceInfo from "react-native-device-info";

const deviceId = DeviceInfo.getUniqueId();
const logo = require("./images/Logo.png");
const logoMultiple = require("./images/LogoMultiple.png");
const textLogo = require("./images/LogoText.png");

const Home = ({ navigation }) => {
  const [useIP, setUseIP] = useState(null);
  const [ownTagged, setOwnTagged] = useState(0);
  const [totalTagged, setTotalTagged] = useState(0);

  const fetchStatistics = async () => {
    console.log("test");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ device_id: deviceId }),
    };
    const res = await fetch("http://canopii.net/getent", options);
    if (res.ok) {
      const resJson = await res.json();
      setOwnTagged(resJson.your_count);
      setTotalTagged(resJson.total_count);
    }
  };

  useEffect(() => {
    console.log("used effect");
    fetchStatistics();
  });
  // getData();
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#f9f9f9" }}>
      <View style={[styles.container, homeStyles.container]}>
        <View style={homeStyles.textLogoContainer}>
          <Image source={textLogo} style={homeStyles.textLogo}></Image>
        </View>
        <View style={homeStyles.statContainer}>
          <Image source={logo} style={homeStyles.image} />

          <View style={homeStyles.statTextContainer}>
            <Text style={styles.title}>{ownTagged}</Text>
            <Text style={styles.heading}>trees tagged by you</Text>
          </View>
        </View>
        <View style={homeStyles.statContainer}>
          <Image source={logoMultiple} style={homeStyles.image} />

          <View style={homeStyles.statTextContainer}>
            <Text style={styles.title}>{totalTagged}</Text>
            <Text style={styles.heading}>total trees mapped in Kitchener</Text>
          </View>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate("Add")}
          style={{ borderRadius: 10 }}
        >
          <View style={homeStyles.buttonContainer}>
            <Text style={[styles.body, homeStyles.buttonText]}>Tag a tree</Text>
            <Icon name="chevron-thin-right" size={20} color={"#fff"} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate("Settings")}
          style={{ borderRadius: 10 }}
        >
          <View
            style={[homeStyles.buttonContainer, { backgroundColor: "#9DD867" }]}
          >
            <Text style={[styles.body, homeStyles.buttonText]}>Settings</Text>
            <Icon name="chevron-thin-right" size={20} color={"#fff"} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
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
    paddingTop: 100,
    width: "90%",
    marginLeft: "5%",
    height: "100%",
    // backgroundColor: "#f9f9f9",
  },
  statContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 30,
    alignItems: "center",
  },
  statTextContainer: {
    width: "75%",
  },
  image: {
    width: "20%",
    height: "100%",
    resizeMode: "contain",
  },
  textLogo: { width: "35%", height: 36, resizeMode: "contain" },
  textLogoContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 36,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    paddingVertical: 18,
    fontSize: 16,
  },
  buttonContainer: {
    // height: "100%",
    backgroundColor: "$dgreen6",
    borderRadius: 15,
    width: "100%",
    paddingHorizontal: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default Home;
