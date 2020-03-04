"use strict";
import { Text, View } from "react-native";
import styles from "./styles";
import EStyleSheet from "react-native-extended-stylesheet";
import React, { useState, useEffect, useCallback } from "react";
import Header from "./header";
import Navigation from "@react-native-community/geolocation";
import MapView, { Marker } from "react-native-maps";
import { TextInput } from "react-native-gesture-handler";

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
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [markerRegion, setMarkerRegion] = useState({
    latitude: 0,
    longitude: 0,
  });
  console.log("initialized");
  const [address, setAddress] = useState("");
  const [editable, setEditable] = useState(false);

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
      setEditable(false);
      getAddress(lat, long);
    });
  }, []);

  const getAddress = (latitude, longitude) => {
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
        console.log(resJson);
        setAddress(`${resJson.stnumber} ${resJson.staddress}`.toUpperCase());
        setEditable(true);
      })
      .catch(err => {
        setAddress("An error occured, please try again");
        setEditable(true);
      });
  };

  const getCoordinates = address => {
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
        console.log(resJson);
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
          <View style={locationStyles.map}>
            {region && (
              <MapView
                style={locationStyles.map}
                initialRegion={region}
                region={region}
                onRegionChange={region => setRegion(region)}
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
    fontFamily: "OpenSans",
    fontSize: 16,
    paddingLeft: 15,
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
