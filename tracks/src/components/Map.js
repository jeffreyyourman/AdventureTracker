import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationProvider } from "../context/LocationContext";

const Map = () => {
  const { state } = useContext(LocationProvider);
  const { currentLocation } = state;

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{marginTop:200}} />
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.02
      }}
    >
      <Circle 
        center={currentLocation.coords}
        radius={30}
        strokeColor='black'
        fillColor='black'
      />
      {/* <Polyline coordinates={points}/> */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
export default Map;
