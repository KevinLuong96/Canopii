"use strict";
import { Text, View } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextInput,
  TouchableHighlight,
  ScrollView,
} from "react-native-gesture-handler";
import Header from "./header";
import speciesData from "./species_dat";
import Icon from "react-native-vector-icons/Entypo";
import { setTree } from "./actions";

const Search = ({ navigation }) => {
  const [speciesName, setSpeciesName] = useState("");
  const [results, setResults] = useState([]);
  const dispatch = useDispatch();

  const search = unformattedName => {
    const results = [];
    const name = unformattedName && unformattedName.toLowerCase();
    if (!name) return;

    for (const id in speciesData) {
      const species = speciesData[id];
      if (
        species.sci_name.toLowerCase().includes(name) ||
        species.com_name.toLowerCase().includes(name) ||
        species.com_name_alt.toLowerCase().includes(name)
      ) {
        results.push(id);
      }
    }

    setResults(results);
  };

  return (
    <Header
      header={
        <>
          <Text style={[styles.title, searchStyles.title]}>Species Search</Text>
          <Text style={[styles.heading, searchStyles.heading]}>
            Search and select the correct species.
          </Text>
        </>
      }
      content={
        <View
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: 145,
          }}
        >
          <View style={searchStyles.inputContainer}>
            <TextInput
              // autoCapitalize="characters"
              value={speciesName}
              style={searchStyles.input}
              onChangeText={text => setSpeciesName(text)}
              onEndEditing={_ => search(speciesName)}
              placeholder="Enter your species name..."
            ></TextInput>
          </View>
          <ScrollView style={searchStyles.searchResults}>
            <View
              style={{ borderBottomColor: "#A4A4A4", borderBottomWidth: 1 }}
            >
              <Text style={[styles.body, searchStyles.resultsTitle]}>
                Results
              </Text>
            </View>
            {results.map(result => (
              <TouchableHighlight
                key={result}
                onPress={() => {
                  dispatch(setTree(speciesData[result].sci_name, result));
                  navigation.navigate("Location");
                }}
                underlayColor="rgba(140,140,140,0.4)"
              >
                <View style={searchStyles.result}>
                  <Text style={[styles.body, searchStyles.sciName]}>
                    {`${speciesData[result].com_name} (${speciesData[result].sci_name})`}
                  </Text>
                  <Icon name="chevron-thin-right" size={20} color={"#4b4b4b"} />
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>
      }
      fullWidth={true}
    ></Header>
  );

  //   return <View style={[styles.centered, treeStyles.container]}></View>;
};

const searchStyles = EStyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "$dgreen6",
  },
  content: {
    width: "90%",
    height: "100%",
    marginTop: 100,
    marginBottom: 25,
  },
  title: {
    color: "white",
    marginBottom: 10,
  },
  heading: {
    color: "white",
    marginBottom: 15,
  },
  searchResults: {
    width: "100%",
    height: "100%",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: "100%",
    fontFamily: "Muli",
    fontSize: 16,
    paddingLeft: 15,
    color: "#000",
  },
  inputContainer: {
    width: "90%",
    height: 60,
    position: "absolute",
    top: -20,
    zIndex: 1,
    left: "5%",
  },
  resultsTitle: {
    color: "#949494",
    marginBottom: 15,
    marginTop: 60,
    marginLeft: "5%",
    borderBottomColor: "#A4A4A4",
    borderBottomWidth: 1,
  },
  result: {
    height: 55,
    borderBottomColor: "#A4A4A4",
    borderBottomWidth: 1,
    display: "flex",
    paddingHorizontal: "5%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  sciName: { color: "#4b4b4b" },
  bodyText: { color: "#949494" },
});

export default Search;
