import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text, SafeAreaView, Button, TextInput } from "react-native";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const [region, setRegion] = useState({
    latitude: 6.859668083109055,
    longitude: 79.92719774260294,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [rentHouse, setRentHouses] = useState([]);
  const [location, setLocation] = useState({
    latitude: 6.859668083109055,
    longitude: 79.92719774260294,
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  const googlePlaceInput = useRef(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //   setLocation({
      //     latitude: location.coords.latitude,
      //     longitude: location.coords.longitude,
      //   });

      console.log("location", location.coords.latitude);
      console.log("location", location.coords.longitude);
    })();
  }, []);

  useEffect(() => {
    console.log("rentHouses", rentHouse);
  }, [rentHouse]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GooglePlacesAutocomplete
          placeholder="Search"
          ref={googlePlaceInput}
          fetchDetails={false}
          debounce={100}
          renderRightButton={() =>
            // console.log(googlePlaceInput.current?.getAddressText().length > 2);
            googlePlaceInput.current?.getAddressText().length >= 1 ? (
              <FontAwesome.Button
                backgroundColor={"white"}
                name="times"
                style={{
                  shadowColor: "white",
                }}
                iconStyle={{ color: "grey", justifyContent: "center", alignItems: "center" }}
                onPress={() => {
                  googlePlaceInput.current?.clear();
                  googlePlaceInput.current?.blur();
                }}
              />
            ) : (
              ""
            )
          }
          // currentLocation={true}
          // currentLocationLabel="Current location"
          listEmptyComponent={() => (
            <View style={{ flex: 1 }}>
              <Text>No results were found</Text>
            </View>
          )}
          GooglePlacesSearchQuery={{
            rankby: "distance",
          }}
          onPress={(data, details = null) => {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }}
          query={{
            key: "",
            language: "en",
            components: "country:LK",
            types: "address",
            radius: 30000,
          }}
          styles={{
            container: {
              flex: 1,
              position: "absolute",
              width: "100%",
              zIndex: 1,
              top: 40,
              padding: 10,
            },
            listView: { backgroundColor: "white" },
          }}
        />
      </View>
      <View style={styles.container}>
        <MapView toolbarEnabled={false} ref={mapRef} initialRegion={region} style={styles.map} minZoomLevel={7} loadingEnabled={true}>
          <Marker
            coordinate={location}
            title={"My Home"}
            onPress={(e) => {
              mapRef.current.animateToRegion(
                {
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.0022,
                  longitudeDelta: 0.0021,
                },
                1000
              );
            }}
          >
            <Callout>
              <Text>My Home</Text>
            </Callout>
          </Marker>
          <Marker
            draggable={true}
            coordinate={{ latitude: region.latitude, longitude: region.longitude }}
            nativeID="hello"
            onPress={(e) => {
              const { latitude, longitude } = e.nativeEvent.coordinate;
              console.log(e.nativeEvent);

              setRentHouses((pre) => [
                ...pre,
                {
                  latitude: latitude,
                  longitude: longitude,
                },
              ]);
            }}
          />

          {rentHouse != 0 &&
            rentHouse.map((house, index) => (
              <Marker
                onPress={(e) => {
                  const { latitude, longitude } = e.nativeEvent.coordinate;
                  console.log(e.nativeEvent);

                  mapRef.current.animateToRegion(
                    {
                      latitude: latitude,
                      longitude: longitude,
                      latitudeDelta: 0.0022,
                      longitudeDelta: 0.0021,
                    },
                    1000
                  );
                }}
                draggable={true}
                key={index}
                coordinate={{ latitude: house.latitude, longitude: house.longitude }}
              />
            ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchBox: {
    position: "absolute",
    margin: 20,
    flexDirection: "row",
    backgroundColor: "$ff",
    width: "90%",
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, heigh: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
