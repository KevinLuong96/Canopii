"use strict";
import { Text, View } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "./actions";
import Header from "./header";
import Navigation from "@react-native-community/geolocation";
import MapView, { Marker } from "react-native-maps";
import { TextInput, TouchableHighlight } from "react-native-gesture-handler";

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const authString = "511533099117910349591x4798";
const Location = ({ navigation }) => {
  const [region, setRegion]: [Region, Function] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });
  const [markerRegion, setMarkerRegion] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [address, setAddress] = useState("");
  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();
  const { treeID, treeType } = useSelector(state => state);

  useEffect(() => {
    Navigation.getCurrentPosition(location => {
      const lat = location.coords.latitude;
      const long = location.coords.longitude;
      setRegion({
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
      setMarkerRegion({
        latitude: lat,
        longitude: long,
      });
      setEditable(false);
      getAddress(lat, long);
    });
  }, []);

  const getAddress = (latitude, longitude) => {
    setEditable(false);
    const url = `https://geocode.xyz/${latitude},${longitude}&auth=${authString}?json=1`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error getting data");
        } else {
          return res.json();
        }
      })
      .then(resJson => {
        setAddress(`${resJson.stnumber} ${resJson.staddress}`.toUpperCase());
        setEditable(true);
      })
      .catch(err => {
        setAddress("An error occured, please try again");
        setEditable(true);
      });
  };

  const getCoordinates = address => {
    setEditable(false);
    const url = `https://geocode.xyz/${address}&auth=${authString}?json=1`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Error getting data");
        } else {
          return res.json();
        }
      })
      .then(resJson => {
        setRegion(
          Object.assign({}, region, {
            latitude: +resJson.latt,
            longitude: +resJson.longt,
          })
        );
        setMarkerRegion({
          latitude: +resJson.latt,
          longitude: +resJson.longt,
        });
        setEditable(true);
      })
      .catch(err => {
        setAddress("An error occured, please try again");
        setEditable(true);
      });
  };

  return (
    <Header
      header={
        <>
          <Text style={[styles.title, locationStyles.title]}>
            Verify Location
          </Text>
          <Text style={[styles.heading, locationStyles.heading]}>
            Verify the tree location. If it is incorrect, type in the correct
            address or move the pin on the map.
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
          }}
        >
          <View style={locationStyles.inputContainer}>
            <TextInput
              autoCapitalize="characters"
              editable={editable}
              value={address}
              style={locationStyles.input}
              onChangeText={text => setAddress(text)}
              onEndEditing={_ => getCoordinates(address)}
            ></TextInput>
          </View>
          <View style={locationStyles.button}>
            <TouchableHighlight
              style={
                editable
                  ? [locationStyles.touchable]
                  : [locationStyles.touchable, { backgroundColor: "#8C8C8C" }]
              }
              onPress={() => {
                if (editable) {
                  dispatch(
                    setLocation({
                      latitude: region.latitude,
                      longitude: region.longitude,
                      address,
                    })
                  );
                  if (treeType && treeID) {
                    navigation.navigate("Review");
                  } else {
                    navigation.navigate("TreeType");
                  }
                }
              }}
            >
              <Text
                style={[styles.body, { color: "white", textAlign: "center" }]}
              >
                {editable ? "Confirm location" : "Loading maps..."}
              </Text>
            </TouchableHighlight>
          </View>
          <View style={locationStyles.map}>
            {region.latitude != 0 && region.longitude != 0 && (
              <MapView
                style={locationStyles.map}
                region={region}
                onRegionChangeComplete={region => setRegion(region)}
              >
                <Marker
                  draggable
                  coordinate={{
                    latitude:
                      markerRegion.latitude != 0
                        ? markerRegion.latitude
                        : region.latitude,
                    longitude:
                      markerRegion.longitude != 0
                        ? markerRegion.longitude
                        : region.longitude,
                  }}
                  onDragEnd={e => {
                    setMarkerRegion({
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                    });
                    getAddress(
                      e.nativeEvent.coordinate.latitude,
                      e.nativeEvent.coordinate.longitude
                    );
                  }}
                />
              </MapView>
            )}
          </View>
        </View>
      }
      fullWidth={true}
    ></Header>
  );

  //   return <View style={[styles.centered, treeStyles.container]}></View>;
};

const locationStyles = EStyleSheet.create({
  button: {
    width: "80%",
    left: "10%",
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
  map: {
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
    width: "80%",
    height: 60,
    position: "absolute",
    top: -20,
    zIndex: 1,
    left: "10%",
  },
});

export default Location;
