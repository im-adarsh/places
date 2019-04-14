/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';

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
        <TextInput
            style={{borderColor:"black",borderWidth:1,width:300,}}
            value={this.state.placeName}
            placeholder="Enter places here."
            onChangeText={this.placeNameChangedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
