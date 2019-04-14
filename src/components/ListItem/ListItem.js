import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

export default class ListItem extends Component {
    render() {
        return (
            <View style={styles.listItem}>
                <Text>{this.props.listLabel}</Text>
            </View>
        );
    }
}

ListItem.propTypes = {
    listLabel: PropTypes.string,

};

ListItem.defaultProps = {
    listLabel: ""
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        backgroundColor: "#eee"
    }
});