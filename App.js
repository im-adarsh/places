/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  state = {
    placeName : ''
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName : val
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.placeInput}
              value={this.state.placeName}
              placeholder="Enter places here."
              onChangeText={this.placeNameChangedHandler} />
          <Button title="Add" style={styles.placeButton}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    padding:16,
    paddingTop:80,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    width : "100%",
    flexDirection:"row",
    justifyContent: "space-between",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width:"30%",
  }

});
