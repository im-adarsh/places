import React from "react";
import {Modal, View, Image, Text, Button, StyleSheet} from "react-native";

const placeDetail = props => {
    let modelContent = null;
    if (props.selectedPlace) {
        modelContent = (
            <View style={styles.detailCard}>
                <Image source={props.selectedPlace.image} style={styles.detailCardImg}/>
                <Text>{props.selectedPlace.placeName}</Text>
            </View>
        )
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modelContent}
                <View>
                    <Button title="Delete" color="red"/>
                    <Button title="Close"/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        marginTop : 30,
    },
    detailCard: {
        padding: 24,
        flexDirection: "column",
        alignItems:"center",
        backgroundColor: "#eee",
    },
    detailCardImg: {
        width: "100%",
        height: 400,
    },
});

export default placeDetail;