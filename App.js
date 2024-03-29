import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import mapsImage from "./src/assets/maps-icon.png";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail"

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          image:mapsImage,
        })
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key
        })
      };
    });
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== key;
    //     })
    //   };
    // });
  };

  render() {
    return (
        <View style={styles.container}>
          <PlaceDetail selectedPlace={this.state.selectedPlace} />
          <PlaceInput onPlaceAdded={this.placeAddedHandler} />
          <PlaceList
              places={this.state.places}
              onItemSelected={this.placeSelectedHandler}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
