import React from "react";
import { View, StyleSheet } from "react-native";

const Circleshape = () => {
    return (
        <View style={styles.container}>
            <View style={styles.circle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "red",
    
    },
});

export default Circleshape;
